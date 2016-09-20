/**
 * @jsx React.DOM
 */
var React = require("react");
// var styles = require("./tasklist.css");
module.exports = React.createClass({
	render : function() {
		var renderItem = function(item) {
			return <li key={item.key}>{item.title}</li>;
		};
		return <ul>{this.props.items.map(renderItem)}</ul>;
	}
});
