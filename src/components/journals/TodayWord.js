import React from 'react'

const TodayWord = ({ vocabulary }) => (
	<li>
		<strong>{vocabulary.word}</strong>: {vocabulary.definition}
	</li>
)

export default TodayWord
