/**
 * @jsx React.DOM
 */
var React = require("react");
var ajax = require("client-ajax");
var TaskList =  require("./tasklist")
// var styles = require("./tasklist.css");
module.exports = React.createClass({
	getInitialState: function() {
		return {items: []};
	},
	componentDidMount: function() {
		ajax({
			url: "/todo/api/todo",
			method: "GET",
			success: function(body) {
				console.log(body)
			},
		});
	},
	render : function() {
		return <TaskList items={this.state.items} />;
	}
});
