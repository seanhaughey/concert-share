
var post = {};
Template.photoInfo.events({
	'click .venue-submit': function() {
		console.log($(event.target));
		post.venue = $(event.target).attr('value');
		$('#venue-label').append("<p id='post-venue'>" + post.venue + "</p>")
	},

	'click #submit-photo': function() {
		post.artist = $("#artist").val();
		post.ownerComment = $("#owner-comment").val();
		console.log($("#post-id").val());
		console.log(post);
		Posts.update({_id: $("#post-id").val()}, {$set: post});
		Session.setDefault('img', null);
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
