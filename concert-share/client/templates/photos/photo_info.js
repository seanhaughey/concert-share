Template.photoInfo.events({

	'click button': function() {
		// var currentId = Posts.findOne(_id);
		// console.log(currentId);
		var post = {
			venue: $("#venue").val(),
			artist: $("#artist").val(),
			ownerComment: $("#owner-comment").val()
		};
		console.log(post);
		console.log($("#post-id").val());
		Posts.update({_id: $("#post-id").val()}, {$set: post});
		// Router.go('postsList');
		Meteor.defer(function(){Router.go('postsList')});
		return false;
	}
});

Template.photoInfo.helpers({
	ownPost: function() {
		return this.userId === Meteor.userId();
	},
	domain: function() {
		var a = document.createElement('a');
		a.href = this.image;
		return a.hostname;
	}
});
