Template.postItem.helpers({
	ownPost: function() {
		return this.userId === Meteor.userId();
	},
	domain: function() {
		var a = document.createElement('a');
		a.href = this.image;
		return a.hostname;
	},
	commentsCount: function() {
		return Comments.find({postId: this._id}).count(); 
	},
});