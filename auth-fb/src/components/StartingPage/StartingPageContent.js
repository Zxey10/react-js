import classes from './StartingPageContent.module.css';
import { useLocation } from 'react-router-dom';
import FlashMessage from 'react-flash-message'

const Message = ({message,duration}) => (
  <FlashMessage duration={duration} className={classes.flash}>
    <strong className={classes.flash}>{message}!</strong>
  </FlashMessage>
)

const StartingPageContent = () => {

  const location = useLocation();

  console.log(location)

  return (
    <section className={classes.starting}>
      {/* {location.state !== null && location.state.showFlash && <Message message='You must be logged in' duration={1000} />} */}
      <h1>Welcome on Board!</h1>
    </section>
  );
};

export default StartingPageContent;
