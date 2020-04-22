import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

const UserRegistration = () => {
	const dispatch = useDispatch()

	const { register, handleSubmit, errors } = useForm()

	const handleRegistration = data => {
		console.log(data)
	}

	return (
		<div>
			<h2>Registration</h2>

			<form onSubmit={handleSubmit(handleRegistration)}>
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
					name
					<input
						type="text"
						name="name"
						ref={register({
							required: true
						})}
					/>
				</div>
				{errors.username && <span>This field is required.</span>}

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
					<button type="submit">register</button>
				</div>
			</form>
		</div>
	)
}

export default UserRegistration