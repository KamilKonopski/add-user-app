import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./AddUser.module.css";

const AddUser = ({ onAddUser }) => {
	const [userName, setUserName] = useState("");
	const [age, setAge] = useState("");

	const addUserHandler = (event) => {
		event.preventDefault();

		if (userName.trim().length === 0 || age.trim().length === 0) {
			return;
		}
		if (+age < 1) {
			return;
		}
		onAddUser(userName, age);

		setUserName("");
		setAge("");
	};

	const userNameChangeHandler = (event) => {
		setUserName(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setAge(event.target.value);
	};

	return (
		<Card className={classes.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input
					id="username"
					type="text"
					value={userName}
					onChange={userNameChangeHandler}
				/>
				<label htmlFor="age">Age (Years)</label>
				<input id="age" type="number" value={age} onChange={ageChangeHandler} />
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
