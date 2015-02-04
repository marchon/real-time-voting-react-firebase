/** @jsx React.DOM */

var React = require('react'),
	FeedItem = require('./FeedItem');

var FeedList = React.createClass({

	render: function() {
		
		var feedItems = this.props.items.map(function(item) {
			
			return ( 
				<FeedItem
					key={ item.key }
					title={ item.title }
					url={ item.url }
					description={ item.description }
					voteCount={ item.voteCount }
					onVote={ this.props.onVote } />
			);

		}.bind(this));
		
		var isEmptyClass = (feedItems.length === 0) ? 'FeedList hidden' : 'FeedList';
		
		return (
			<div className="ContentContainer">
				<ul className={ isEmptyClass }>
					{ feedItems }
				</ul>
			</div>
		);
	}

});

module.exports = FeedList;