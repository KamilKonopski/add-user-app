import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import Card from "./Card";

import classes from "./ErrorModal.module.css";

const Backdrop = ({ onConfirm }) => {
	return <div className={classes.backdrop} onClick={onConfirm} />;
};

const Modal = ({ title, message, onConfirm }) => {
	return (
		<Card className={classes.modal}>
			<header className={classes.header}>
				<h2>{title}</h2>
			</header>
			<div>
				<p className={classes.content}>{message}</p>
			</div>
			<footer className={classes.actions}>
				<Button onClick={onConfirm}>Okay</Button>
			</footer>
		</Card>
	);
};

const ErrorModal = ({ title, message, onConfirm }) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={onConfirm} />,
				document.getElementById("backdrop")
			)}
			{ReactDOM.createPortal(
				<Modal title={title} message={message} onConfirm={onConfirm} />,
				document.getElementById("modal")
			)}
		</Fragment>
	);
};

export default ErrorModal;
