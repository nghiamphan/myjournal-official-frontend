import axios from 'axios'

const baseUrl = '/api/journals'

const getAll = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}

const createJournal = async (journalObject) => {
	const response = await axios.post(baseUrl, journalObject)
	return response.data
}

const updateJournal = async (id, journalObject) => {
	const response = await axios.put(`${baseUrl}/${id}`, journalObject)
	return response.data
}

const deleteJournal = async id => {
	const response = await axios.delete(`${baseUrl}/${id}`)
	return response.data
}

export default {
	getAll,
	createJournal,
	updateJournal,
	deleteJournal
}