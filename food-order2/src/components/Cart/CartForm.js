import React ,{ useContext, useState } from "react";
import Card from "../UI/Card";
import styles from "./CartForm.module.css";
import useInput from "../../hooks/use-input";
import CartContext from "../../store/cart-context";
import useHttp from "../../hooks/use-http";

export default function CartForm(props) {

  const cartCtx = useContext(CartContext) 

  const {
    enteredValue: nameValue,
    isValid: nameIsValid,
    isInvalid: nameIsInvalid,
    reset: resetName,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
  } = useInput(value => value.trim().length !== 0);

  const {
    enteredValue: streetValue,
    isValid: streetIsValid,
    isInvalid: streetIsInvalid,
    reset: resetStreet,
    changeHandler: streetChangeHandler,
    blurHandler: streetBlurHandler,
  } = useInput(value => value.trim().length !== 0);

  const {
    enteredValue: postalCodeValue,
    isValid: postalCodeIsValid,
    isInvalid: postalCodeIsInvalid,
    reset: resetPostalCode,
    changeHandler: postalCodeChangeHandler,
    blurHandler: postalCodeBlurHandler,
  } = useInput(value => value.trim().length !== 0);

  const {
    enteredValue: cityValue,
    isValid: cityIsValid,
    isInvalid: cityIsInvalid,
    reset: resetCity,
    changeHandler: cityChangeHandler,
    blurHandler: cityBlurHandler,
  } = useInput(value => value.trim().length !== 0);

  let formValid = streetIsValid && nameIsValid && cityIsValid && postalCodeIsValid;

  const applyData = (data) => {
    console.log(data)
  }

  const {
    isLoading,
    error: reqHasError,
    sendRequest: sendPostRequest      
  } = useHttp(applyData);

  function formSubmitHandler(e) {
    e.preventDefault();

    if(!formValid){
        return;
    }

    let reqConfig = {
      url:'https://react-test-242e7-default-rtdb.firebaseio.com/orders.json',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        order:{
          nameValue,
          cityValue,
          postalCodeValue,
          streetValue,
          meal_info:{
            meal_list: cartCtx.items,
            price: cartCtx.totalAmount
          }
        }
      }
    }

    sendPostRequest(reqConfig)
    cartCtx.sendOrder()
    props.onFormSubmited()
    cartCtx.finishOrder()
    cartCtx.clearCart()

    resetName();
    resetStreet();
    resetPostalCode();
    resetCity();

    //TODO RESET ALL METHOD
  }

  const nameClasess = nameIsInvalid ? `${styles.name} invalid` : styles.name
  const streetClasess = streetIsInvalid ? `${styles.name} invalid` : styles.street 
  const postCodeClasess = postalCodeIsInvalid ? `${styles.name} invalid` : styles.postCode 
  const cityClasess = cityIsInvalid ? `${styles.name} invalid` : styles.city  

  const isDisabled = (cartCtx.items.length === 0) || !formValid

  const content = (
    <Card className={styles.formCard}>
      <form className={styles.form} onSubmit={formSubmitHandler}>
        <div className={nameClasess}>
          <label htmlFor="name">Your Name</label>
          <input type="text" autoComplete="off" name="name" id="name" value={nameValue} onChange={nameChangeHandler} onBlur={nameBlurHandler} />
          {nameIsInvalid && <p className={styles.invalid}>Name is invalid</p>}  
        </div>

        <div className={streetClasess}>
          <label htmlFor="street">Street</label>
          <input type="text" autoComplete="off" id="street" name="street" value={streetValue} onChange={streetChangeHandler} onBlur={streetBlurHandler} />
          {streetIsInvalid && <p className={styles.invalid}>Street is invalid</p>}
        </div>

        <div className={postCodeClasess}>
          <label htmlFor="pcode">Postal Code</label>
          <input type="text" autoComplete="off" id="pcode" name="pcode" value={postalCodeValue} onChange={postalCodeChangeHandler} onBlur={postalCodeBlurHandler} />
          {postalCodeIsInvalid && <p className={styles.invalid}>Postal Code is invalid</p>}
        </div>

        <div className={cityClasess}>
          <label htmlFor="city">City</label>
          <input type="text" autoComplete="off" id="city" name="city" value={cityValue} onChange={cityChangeHandler} onBlur={cityBlurHandler} />
          {cityIsInvalid && <p className={styles.invalid}>City is invalid</p>}
        </div>
        <button type="submit" className={styles.btn} disabled={isDisabled}>Order</button>
      </form>
    </Card>
  );

  if(isLoading){
    return (
      <Card>
         <p>Loading ...</p>
      </Card>
    )
  }else if(reqHasError){
    <Card>
      <p>{reqHasError}</p>
    </Card>
  }else{
    return content
  } 

}
