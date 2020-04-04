import React from 'react'
import Todo from './journals/Todo'
import BookSummary from './journals/BookSummary'
import TodayWord from './journals/TodayWord'

const Journal = ({ journal }) => {
	const todosDisplay = () => (
		<div>
			<h3>Todos</h3>
			<ul>
				{journal.todos.map(todo =>
					<Todo
						key={todo.id}
						todo={todo} />
				)}
			</ul>
		</div>
	)

	const bookSummariesDisplay = () => (
		<div>
			<h3>Book Summary</h3>
			<ul>
				{journal.book_summary.map(bookSummary =>
					<BookSummary
						key={bookSummary.id}
						bookSummary={bookSummary} />
				)}
			</ul>
		</div>
	)

	const todayWordsDisplay = () => (
		<div>
			<h3>Words of Today</h3>
			<ul>
				{journal.words_of_today.map(vocabulary =>
					<TodayWord
						key={vocabulary.id}
						vocabulary={vocabulary} />
				)}
			</ul>
		</div>
	)
	return (
		<li>
			<div>
				<h2>{journal.date}</h2>
			</div>

			{journal.todos && todosDisplay()}

			<div>
				<h3>How is your day?</h3>
				{journal.reflection}
			</div>

			{journal.book_summary && bookSummariesDisplay()}

			{journal.words_of_today && todayWordsDisplay()}

		</li>
	)
}

export default Journal