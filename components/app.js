/**
 * @jsx React.DOM
 */
var React = require("react");
var styles = require("./app.css");
var ajax = require("client-ajax");
var TaskList =  require("./tasklist")
var TaskForm =  require("./taskform")
module.exports = React.createClass({
	getInitialState: function() {
		return {items: []};
	},

	update: function() {
		ajax({
			url: "/todo/api",
			method: "GET",
		}, function(err, body) {
			this.setState({items: body});
		}.bind(this));
	},

	addItem: function(text) {
		var newItems = this.state.items.concat([text]);
		this.setState({items: newItems});

		ajax({
			url: "/todo/api",
			method: "POST",
			data: text,
			format: "json",
		});
	},

	componentDidMount: function() {
		this.update();
	},

	render : function() {
		return <div>
			<TaskForm onAddItem={this.addItem} />
			<TaskList items={this.state.items}/>
		</div>;
	},
});
