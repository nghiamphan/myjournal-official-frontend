import axios from 'axios'

const baseUrl = 'http://localhost:3001/journals'

const getAll = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}

const createJournal = async (journalObject) => {
	const response = await axios.post(baseUrl, journalObject)
	return response.data
}
export default {
	getAll,
	createJournal
}