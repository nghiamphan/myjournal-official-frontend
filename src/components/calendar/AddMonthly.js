import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { createMonthly } from '../../reducers/monthliesReducer'
import { toggleMonthlyFormOff } from '../../reducers/displayMonthlyFormReducer'

const AddMonthly = () => {
	const dispatch = useDispatch()

	const { register, handleSubmit, errors } = useForm()

	const onSubmit = data => {
		const monthlyObject = {
			content: data.content
		}
		dispatch(createMonthly(monthlyObject))
		dispatch(toggleMonthlyFormOff())
	}
	return (
		<div className="add-monthly">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<button
						type="submit"
					>
					Save
					</button>
					<button
						type="reset"
						onClick={() => dispatch(toggleMonthlyFormOff())}
					>
					Cancel
					</button>
				</div>
				<textarea
					name="content"
					ref={register({ required: true })}
				/>

				{errors.content && <span className="error-text">This field is required.</span>}
			</form>
		</div>
	)
}

export default AddMonthly