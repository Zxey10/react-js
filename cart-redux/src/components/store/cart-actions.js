import { uiActions } from "./ui"
import { cartActions } from "./cart"

export const sendCartData = (cart) => {
    return async(dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Loading',
            message: '...'
          }))
          const reqConfig = {
            url: 'https://react-test-242e7-default-rtdb.firebaseio.com/cartItems.json',
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(cart)
          }
          try {
            const res = await fetch(reqConfig.url,{
              method: reqConfig.method,
              headers: reqConfig.headers,
              body : reqConfig.body
            })
      
            if(!res.ok){
              throw new Error('Put Request Failed')
            }
    
            const json = await res.json();
            console.log("PUT")  
            console.log(json)
            dispatch(uiActions.showNotification({
              status: 'success',
              title: res.statusText,
              message: 'Req send succesfully'
            }))
    
          } catch (error) {
    
            console.log(error)
            dispatch(uiActions.showNotification({
              status: "error",
              title: "Erorr",
              message: error.message
            }))
          }  
    }
}

export const fetchCartData = () => {
    return async(dispatch) => {
          const reqConfig = {
            url: 'https://react-test-242e7-default-rtdb.firebaseio.com/cartItems.json',
            method: 'GET',
          }
          try {
            const res = await fetch(reqConfig.url,{
              method: reqConfig.method,
            })
      
            if(!res.ok){
              throw new Error('Get Request Failed')
            }
    
            const json = await res.json();  
            console.log("JSON")
            console.log(json)
            
            dispatch(cartActions.replaceCart({
                totalItems: json.totalItems,
                items: json.items || []
            }))
    
          } catch (error) {
            console.log(error)
            dispatch(uiActions.showNotification({
                status: "error",
                title: "Erorr",
                message: error.message
              }))
          }  
    }
}