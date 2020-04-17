import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../reducers/loginReducer'

const Login = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()

	/* user object received from backend contains token, username and password
	*/
	const user = useSelector(state => state.loginRedux)

	const handleLogin = event => {
		event.preventDefault()
		dispatch(userLogin(username, password))
		if (user) {
			alert('Right credentials')
		}
		else {
			alert('Wrong credentials')
		}
	}

	return (
		<div>
			<h2>Login</h2>

			<form onSubmit={handleLogin}>
				<div>
					username
					<input
						type="text"
						value={username}
						name="Username"
						onChange={({ target }) => setUsername(target.value)}
						// note: parameter is 'target' instead of 'event'; this is destructuring the field 'target' from the object 'event'
					/>
				</div>

				<div>
          password
					<input
						type="password"
						value={password}
						name="Password"
						onChange={({ target }) => setPassword(target.value)}
					/>
				</div>
				<button type="submit">login</button>
			</form>
		</div>
	)
}

export default Login