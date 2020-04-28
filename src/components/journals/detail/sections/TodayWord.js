import React from 'react'

const TodayWord = ({ vocabulary }) => (
	<div className="word-item card">
		<strong>{vocabulary.word}</strong>
		{vocabulary.definition}
	</div>
)

export default TodayWord
