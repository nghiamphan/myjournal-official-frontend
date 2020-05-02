import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { toggleMonthlyUpdateForm, updateMonthly } from '../../reducers/monthliesReducer'

const MonthlyEditable = ({ monthly }) => {
	const dispatch = useDispatch()

	const { register, handleSubmit, errors } = useForm({
		defaultValues: monthly
	})

	const onSubmit = data => {
		const monthlyObject = {
			content: data.content
		}
		dispatch(updateMonthly(monthly.id, monthlyObject))
	}

	const date = monthly.date.substring(0, 10) + ' '  + monthly.date.substring(11, 19)

	return (
		<div className="monthly-editable">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					{date}
					<button
						type="submit"
					>
					Save
					</button>
					<button
						type="reset"
						onClick={() => dispatch(toggleMonthlyUpdateForm(monthly.id))}
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

export default MonthlyEditable