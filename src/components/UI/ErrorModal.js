import React from "react";

import Button from "./Button";
import Card from "./Card";

import classes from "./ErrorModal.module.css";

const ErrorModal = ({ title, message }) => {
	return (
		<div>
			<div className={classes.backdrop} />
			<Card className={classes.modal}>
				<header className={classes.header}>
					<h2>{title}</h2>
				</header>
				<div>
					<p className={classes.content}>{message}</p>
				</div>
				<footer className={classes.actions}>
					<Button>Okay</Button>
				</footer>
			</Card>
		</div>
	);
};

export default ErrorModal;
