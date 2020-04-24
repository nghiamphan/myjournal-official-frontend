import React from 'react'
import Todo from './journals/Todo'
import BookSummary from './journals/BookSummary'
import Quote from './journals/Quote'
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
				{journal.book_summaries.map(bookSummary =>
					<BookSummary
						key={bookSummary.id}
						bookSummary={bookSummary} />
				)}
			</ul>
		</div>
	)

	const quotesDisplay = () => (
		<div>
			<h3>Cool Quotes</h3>
			<div>
				{journal.quotes.map(quote =>
					<Quote
						key={quote.id}
						quote={quote} />
				)}
			</div>
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
		<>
			<div>
				<h2>{journal.date}</h2>
			</div>

			{journal.todos.length !== 0 && todosDisplay()}

			<div>
				<h3>How is your day?</h3>
				{journal.reflection}
			</div>

			{journal.book_summaries.length !== 0 && bookSummariesDisplay()}

			{journal.quotes.length !== 0 && quotesDisplay()}

			{journal.words_of_today.length !== 0 && todayWordsDisplay()}

		</>
	)
}

export default Journal