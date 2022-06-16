import classes from './ProfileForm.module.css';
import { useContext, useRef } from 'react';
import AuthContext from '../../store/auth-context';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const ProfileForm = () => {

  const authCtx = useContext(AuthContext)
  const passwordRef = useRef()
  const history = useHistory()

  async function changePassword(e){
    e.preventDefault()
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_FIREBASE_KEY}`
    try {
      const res = await axios.post(url,{
        idToken: authCtx.token,
        password: passwordRef.current.value,
        returnSecureToken: true
      })
  
      console.log(res)

      history.replace('/')

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <form onSubmit={changePassword}  className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input ref={passwordRef} type='password' minLength={7} id='new-password' />
      </div>
      <div className={classes.action}>
        <button type='submit'>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
