import React from 'react'
import Display from './Display'

class Ask extends React.Component {

	constructor() {
		super();
		this.state  = {
			choices: [],
			answer: undefined
		}
		this.setUpChoices = this.setUpChoices.bind(this);
		this.select = this.select.bind(this);
		this.addChoiceButton = this.addChoiceButton.bind(this);
	}

	componentWillMount() {
		this.setUpChoices();
	}

	componentWillReceiveProps() {
		this.setUpChoices();
	}

	setUpChoices() {
		var choices = Object.keys(this.props.question);
		choices.shift(); // get rid of q property
		this.setState({ 
			choices: choices,
			answer: sessionStorage.answer 
		});
	}

	select(choice) {
		this.setState({ answer: choice });
		sessionStorage.answer = choice;
		this.props.emit('answer', {
			question: this.props.question,
			choice: choice
		});
	}

	addChoiceButton(choice, i) {
		var buttonTypes = ['primary', 'success', 'warning', 'danger'];
		return (
				<div className="col-xs-12 col-sm-6">
					<button key={i} 
							className={"btn btn-" + buttonTypes[i]}
							onClick={this.select.bind(null, choice)}>
						{choice}: {this.props.question[choice]}
					</button>
				</div>
			);
	}

	render() {
		return (
				<div id="currentQuestion">

					<Display if={this.state.answer}>
						<h3>You answered: {this.state.answer}</h3>
						<p>{this.props.question[this.state.answer]}</p>
					</Display>

					<Display if={!this.state.answer}>
						<h2>{this.props.question.q}</h2>
						<div className="row">
							{this.state.choices.map(this.addChoiceButton)}
						</div>
					</Display>

				</div>
			);
	}
}

export default Ask