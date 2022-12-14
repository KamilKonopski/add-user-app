import React, { Fragment, useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
	const [usersList, setUsersList] = useState([]);

	function addUserHandler(userName, userAge) {
		setUsersList((prevUsersList) => {
			return [
				...prevUsersList,
				{ id: Math.random().toString(), name: userName, age: userAge },
			];
		});
	};
	return (
		<Fragment>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList} />
		</Fragment>
	);
};

export default App;
