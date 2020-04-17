import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { userLogin } from '../reducers/loginReducer'

const Login = () => {
	const dispatch = useDispatch()

	const { register, handleSubmit, errors } = useForm()

	const handleLogin = (data) => {
		dispatch(userLogin(data.username, data.password))
	}

	return (
		<div>
			<h2>Login</h2>

			<form onSubmit={handleSubmit(handleLogin)}>
				<div>
					username
					<input
						type="text"
						name="username"
						ref={register({
							required: true,
							minLength: 4
						})}
					/>
				</div>
				{errors.username && <span>This field is required and needs at least 4 characters.</span>}

				<div>
          password
					<input
						type="password"
						name="password"
						ref={register({
							required: true,
							minLength: 4
						})}
					/>
				</div>
				{errors.password && <span>This field is required and needs at least 4 characters.</span>}

				<div>
					<button type="submit">login</button>
				</div>
			</form>
		</div>
	)
}

export default Login