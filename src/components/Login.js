import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userLogin } from '../reducers/loginReducer'

const Login = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()

	const handleLogin = event => {
		event.preventDefault()
		dispatch(userLogin(username, password))
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