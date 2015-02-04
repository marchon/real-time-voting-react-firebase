/** @jsx React.DOM */

var React = require('react');

var ShowAddButton = React.createClass({

	render: function() {
		
		var classString = (this.props.displayed) ? 'Button Button--add hidden' : 'Button Button--add';
		
		return (
			<button className={ classString } onClick={ this.props.onToggleForm }>
				<i className="fa fw fa-plus"></i>
				&nbsp;Add New Item
			</button>
		);
	}

});

module.exports = ShowAddButton;