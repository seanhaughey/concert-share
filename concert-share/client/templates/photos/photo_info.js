
var post = {};
Template.photoInfo.events({
	'click #0': function() {
		// var venue = $('#0').attr('value');
		// console.log(venue);
		post.venue = $('#0').attr('value');
		$('#venue-label').append("<p id='post-venue'>" + post.venue + "</p>")
	},

	'click #1': function() {
		post.venue = $('#1').attr('value');
		$('#venue-label').append("<p id='post-venue'>" + post.venue + "</p>")
	},

	'click #2': function() {
		post.venue = $('#2').attr('value');
		$('#venue-label').append("<p id='post-venue'>" + post.venue + "</p>")
	},

	'click #3': function() {
		post.venue = $('#3').attr('value');
		$('#venue-label').append("<p id='post-venue'>" + post.venue + "</p>")
	},

	'click #4': function() {
		post.venue = $('#4').attr('value');
		$('#venue-label').append("<p id='post-venue'>" + post.venue + "</p>")
	},			

	'click #submit-photo': function() {
		// var currentId = Posts.findOne(_id);
		// console.log(currentId);
		// var post = {
		// 	venue: $("#location").val(),
		// 	artist: $("#artist").val(),
		// 	ownerComment: $("#owner-comment").val()
		// };
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
