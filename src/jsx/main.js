/** @jsx React.DOM */

var React = require('react'),
	Feed = require('./Feed');
	
React.renderComponent(
	<Feed />,
	document.querySelector('.VotingApp')
);