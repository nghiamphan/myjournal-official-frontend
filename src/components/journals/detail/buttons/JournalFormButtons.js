import React from 'react'

export const FirstAddButton = ({ inputArray, buttonText }) => (
	<button
		onClick={event => {
			event.preventDefault()
			inputArray.append({})
		}}
	>
		{buttonText}
	</button>
)

export const AddButton = ({ inputArray, index }) => (
	<button
		onClick={event => {
			event.preventDefault()
			inputArray.insert(index+1)
		}}
	>
		add
	</button>
)

export const DeleteButton = ({ inputArray, index }) => (
	<button
		onClick={() => inputArray.remove(index)}
	>
		delete
	</button>
)

export const MoveUpButton = ({ inputArray, index }) => (
	<button
		onClick={event => {
			event.preventDefault()
			inputArray.swap(index, Math.max(0, index-1))
		}}
	>
		move up
	</button>
)

export const MoveDownButton = ({ inputArray, index }) => (
	<button
		onClick={event => {
			event.preventDefault()
			inputArray.swap(index, Math.min(inputArray.fields.length-1, index+1))
		}}
	>
		move down
	</button>
)

export const ItemButtons = ({ inputArray, index }) => (
	<>
		<MoveUpButton
			inputArray={inputArray}
			index={index}
		/>
		<MoveDownButton
			inputArray={inputArray}
			index={index}
		/>
		<AddButton
			inputArray={inputArray}
			index={index}
		/>
		<DeleteButton
			inputArray={inputArray}
			index={index}
		/>
	</>
)