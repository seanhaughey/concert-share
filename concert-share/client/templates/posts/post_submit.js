Template.postSubmit.events({
	'submit form': function(e) {
		e.preventDefault();
		var post = {
			image: $(e.target).find('[name=image]').val(),
			title: $(e.target).find('[name=title]').val()
		};

		post._id = Posts.insert(post);
		Router.go('postPage', post);
	}
});

Template.postSubmit.onCreated(function() {
	Session.set('postSubmitErrors', {});
});

Template.postSubmit.helpers({
	errorMessage: function(field) {
		return Session.get('postSubmitErrors')[field];
	},
	errorClass: function (field) {
		return !!Session.get('postSubmitErrors')[field] ? 'has-error' : '';
	}
});