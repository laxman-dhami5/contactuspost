import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import classes from './Modal.module.css'
const BackDrop=(props)=>{
    return <div className={classes.backdrop}>

    </div>
}

const portEle=document.getElementById('modal')
const ModalOverlay=(props)=>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}
const Modal = (props) => {
  return (
    <Fragment>
        {ReactDom.createPortal(<BackDrop/>,portEle)}
        {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portEle)}
    </Fragment>
  )
}

export default Modal
