import React, {Fragment} from "react"
import ReactDOM from 'react-dom'
import classes from "./Modul.module.css"

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onHideBookMark}/>
}

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => { 
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onHideBookMark={props.onHideBookMark}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
}

export default Modal