import React from 'react'

const Reflection = ({ reflection }) => (
	<div
		className="reflection-item"
		dangerouslySetInnerHTML={{ __html: reflection.content }}
	/>
)

export default Reflection