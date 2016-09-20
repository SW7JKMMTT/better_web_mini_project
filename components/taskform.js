/**
 * @jsx React.DOM
 */
var React = require("react");
var newID = require("../js/key.js");
// var styles = require("./tasklist.css");
module.exports = React.createClass({
	getInitialState: function() {
		return {text: ""};
	},

	textChange: function(e) {
		this.setState({text: e.target.value});
	},

	submit: function(e) {
		e.preventDefault();
		var item = {key: Date.now(), title: this.state.text, stat: false};
		this.props.onAddItem(item);
		this.setState({text: ""})
	},

	render : function() {
		return (<form onSubmit={this.submit}>
			<input onChange={this.textChange} value={this.state.text} />
			<button>{'Add'}</button>
		</form>);
	}
});
