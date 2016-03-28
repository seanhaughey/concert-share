Venues = new Mongo.Collection('venues');

Meteor.methods({
	venueCheckin: function(venueAttributes){
		check(Meteor.userID(), String);
		check(venueAttributes, {
			name: String
		});
		var user = Meteor.user();
		var venueId = Venues.insert(venue);
		return{
			_id: venueId
		};
	}
})