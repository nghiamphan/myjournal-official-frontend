import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeJournals } from '../reducers/journalReducer'
import Journal from './Journal'

const Journals = () => {
	const dispatch = useDispatch()
	const journals = useSelector(state => state.journals)

	useEffect(() => {
		dispatch(initializeJournals())
	}, [dispatch])
	return (
		<ul>
			<h1>My Journal</h1>
			{journals !== [] && journals.map(journal =>
				<Journal
					key={journal.id}
					journal={journal}/>
			)}
		</ul>
	)
}

export default Journals