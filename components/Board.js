import React from 'react'
import {BarChart} from 'react-d3-basic'
import Display from './parts/Display'

class Board extends React.Component {

	constructor() {
		super();
		this.state = {
			chartSeries:[
				{
					field: 'results',
					name: 'results'
				}
			],
			x:function(d) {
				return d.choice;
			},
			xScale:"ordinal",
			xLabel:"choice",
			yLabel:"results"
		}
	}
	
	barGraphData(results) {
		return Object.keys(results).map(function(choice) {
			return {
				choice: choice,
				results: results[choice]
			};
		});
	}

	render() {
		return (
				<div id="scoreboard">

					<Display if={this.props.status === 'connected' && this.props.currentQuestion}>
						<BarChart title={this.props.currentQuestion.q} 
									data={this.barGraphData(this.props.results)} 
									width={window.innerWidth * 0.9}
									height={window.innerHeight * 0.6}
									chartSeries={this.state.chartSeries}
									x={this.state.x}
									xLabel={this.state.xLabel}
									xScale={this.state.xScale}
									yLabel={this.state.yLabel}/>
					</Display>

					<Display if={this.props.status === 'connected' && !this.props.currentQuestion}>
						<h3>Awaiting a Question...</h3>
					</Display>

				</div>
			);
	}
}

export default Board