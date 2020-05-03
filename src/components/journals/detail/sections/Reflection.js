import React from 'react'

const Reflection = ({ reflection }) => {
	const backgroundColor = {
		backgroundColor: reflection.color
	}

	return (
		<div
			className="reflection-item"
			style={backgroundColor}
			dangerouslySetInnerHTML={{ __html: reflection.content }}
		/>
	)
}

export default Reflection