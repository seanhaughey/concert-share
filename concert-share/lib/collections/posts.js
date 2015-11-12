Posts = new Mongo.Collection('posts');

Meteor.methods({
	postInsert: function(postAttributes) {
		check(Meteor.userId(), String);
		check(postAttributes, {
			title: String,
			image: String
		});
		var user = Meteor.user();
		var postId = Posts.insert(post);
		return {
			_id: postId
		};
	}
});