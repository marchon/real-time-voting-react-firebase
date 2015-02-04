/** @jsx React.DOM */

var React = require('react');

var FeedItem = React.createClass({
	
	vote: function(newCount) {
		this.props.onVote({
			key: this.props.key,
			title: this.props.title,
			description: this.props.description,
			url: this.props.url,
			voteCount: newCount
		});
	},
	
	voteUp: function(e) {
		e.preventDefault();
		
		var count = parseInt(this.props.voteCount, 10);
		var newCount = count + 1;
		
		this.vote(newCount);
	},
	
	voteDown: function(e) {
		e.preventDefault();
		
		var count = parseInt(this.props.voteCount, 10);
		var newCount = count - 1;
			
		this.vote(newCount);
	},

	render: function() {
		
		var positiveOrNegativeClass = (this.props.voteCount >= 0) ? "VoteCount VoteCount--success" : "VoteCount VoteCount--fail";
		
		return (
			<li key={ this.props.key } className="FeedItem">
				<span className={ positiveOrNegativeClass }>{ this.props.voteCount }</span>
				<span className="ItemInfo">
					<h4 className="ItemTitle"><a href={ this.props.url }>{ this.props.title }</a></h4>
					<p>{ this.props.description }</p>
				</span>
				<span className="Vote">
					<button className="Button Button--voteUp" onClick={ this.voteUp }><i className="fa fw fa-arrow-up"></i></button>
					<button className="Button Button--voteDown" onClick={ this.voteDown }><i className="fa fw fa-arrow-down"></i></button>
				</span>
			</li>
		);
	}

});

module.exports = FeedItem;