import React, {Fragment} from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div onClick={props.onClose} className={styles.backdrop}></div>;
};

const ModalOverlay = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}

export default function Modal(props) {
  return <Fragment>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />,document.getElementById('overlay'))}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,document.getElementById('overlay'))}
  </Fragment>;
}
