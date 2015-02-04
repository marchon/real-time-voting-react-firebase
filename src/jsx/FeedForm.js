/** @jsx React.DOM */

var React = require('react');

var FeedForm = React.createClass({
	
	handleForm: function(e) {
		e.preventDefault();
		
		var newItem = {
			title: this.refs.title.getDOMNode().value,
			description: this.refs.description.getDOMNode().value,
			url: this.refs.url.getDOMNode().value,
			voteCount: 0
		};
		
		this.refs.feedForm.getDOMNode().reset();
		
		this.props.onNewItem(newItem);
	},
	
	render: function() {
				
		var classString = (this.props.displayed) ? "ContentContainer FeedsForm" : "ContentContainer FeedsForm hidden";
		
		return (
			<form ref="feedForm" className={ classString } onSubmit={ this.handleForm }>
				<div className="FeedsContainer">
					<input ref="title" type="text" className="Input" placeholder="Title" />
					<input ref="description" type="text" className="Input Input--center" placeholder="Description" />
					<input ref="url" type="text" className="Input" placeholder="URL" />
					<button type="submit" className="Button Button--save"><i className="fa fw fa-save"></i> Save</button>
					<button type="reset" className="Button Button--cancel" onClick={ this.props.onToggleForm }><i className="fa fw fa-remove"></i> Cancel</button>
				</div>
			</form>
		);
	}

});

module.exports = FeedForm;