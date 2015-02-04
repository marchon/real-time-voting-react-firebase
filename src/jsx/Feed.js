/** @jsx React.DOM */

var React = require('react'),
	ShowAddButton = require('./ShowAddButton'),
	FeedForm = require('./FeedForm'),
	FeedList = require('./FeedList'),
	_ = require('lodash'),
	Firebase = require('firebase');

var Feed = React.createClass({
	
	loadData: function() {
		
		var ref = new Firebase('https://dazzling-heat-682.firebaseio.com/feed');
		
		ref.on('value', function(snapshot) {
			
			var items = [];
			var sorted = [];
			
			snapshot.forEach(function(itemSnap) {
				var item = itemSnap.val();
				item.key = itemSnap.name();
				items.push(item);
			});
			
			sorted = _.sortBy(items, function(item) {
				return -item.voteCount;
			})
			
			this.setState({
				items: sorted
			});
			
		}.bind(this));
	},
	
	componentDidMount: function() {
		this.loadData();
	},
	
	getInitialState: function() {
		return {
			items: [],
			formDisplayed: false
		};
	},
	
	onToggleForm: function() {
		this.setState({
			formDisplayed: !this.state.formDisplayed
		});
	},
	
	onNewItem: function(newItem) {
		
		var ref = new Firebase('https://dazzling-heat-682.firebaseio.com/feed');
		ref.push(newItem);
		
	},
	
	onVote: function(item) {

		var ref = new Firebase('https://dazzling-heat-682.firebaseio.com/feed').child(item.key);
		ref.update(item);
	},

	render: function() {
		return (
			<div>
				<div className="ContentContainer">
					<ShowAddButton displayed={ this.state.formDisplayed } onToggleForm={ this.onToggleForm } />
				</div>
				<FeedForm displayed={ this.state.formDisplayed } onToggleForm={ this.onToggleForm } onNewItem={ this.onNewItem } />
				<FeedList items={ this.state.items } onVote={ this.onVote } />
			</div>
		);
	}

});

module.exports = Feed;