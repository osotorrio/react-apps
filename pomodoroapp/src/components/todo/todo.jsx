import React from 'react';

class Todo extends React.Component {
	constructor() {
		super();

		this.state = {
			currentText: '',
			todos: [],
		};

		this.handleAddItem = this.handleAddItem.bind(this);
		this.handleUpdateText = this.handleUpdateText.bind(this);
		this.handleItemDone = this.handleItemDone.bind(this);
		this.handleRemoveItem = this.handleRemoveItem.bind(this);
	}

	handleAddItem(event) {
		event.preventDefault();
		this.setState((previousState) => ({
			currentText: '',
			todos: previousState.todos.concat({
				text: previousState.currentText,
				isDone: false,
			}),
		}));
	}

	handleUpdateText(event) {
		this.setState({ currentText: event.target.value });
	}

	handleItemDone(event) {
		let todos = this.state.todos;

		todos.map((todo) => {
			if (todo.text === event.target.name) {
				todo.isDone = !todo.isDone;
				console.log(todo);
			}
		});

		this.setState({ todos });
	}

	handleRemoveItem(event) {
		this.setState((previousState) => ({
			todos: previousState.todos.filter((item, index) => {
				return index.toString() !== event.target.id;
			}),
		}));
	}

	render() {
		return (
			<div>
				TODO LIST
				<form onSubmit={this.handleAddItem}>
					<input
						type="text"
						value={this.state.currentText}
						onChange={this.handleUpdateText}
						required
					/>
				</form>
				<ul>
					{this.state.todos.map((todo, index) => (
						<li key={index}>
							<input name={todo.text} type="checkbox" onChange={this.handleItemDone} />
							<span>{todo.text}</span>
							<button id={index} onClick={this.handleRemoveItem}>
								X
							</button>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Todo;
