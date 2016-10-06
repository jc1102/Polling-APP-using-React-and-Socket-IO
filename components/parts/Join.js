import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'

class Join extends React.Component {

	constructor() {
		super();
		this.join = this.join.bind(this);
	} 

	join() {
		var memberName = ReactDOM.findDOMNode(this.refs.name).value;
		this.props.emit('join', {name: memberName});
	}

	render() {
		return (
				<form action="javascript:void(0)" onSubmit={this.join.bind()}>

					<label>Full Name </label>
					<input ref="name"
							className="form-control"
							placeholder="enter your full name..."
							required />
					<button className="btn btn-primary">Join</button>
					<Link to='/speaker'>Join as speaker</Link>
					<Link to='/board'>Go to the board</Link>
				</form>
			);
	}
}

module.exports = Join;
