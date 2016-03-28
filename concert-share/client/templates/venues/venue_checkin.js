Session.setDefault('venue', null);

Meteor.startup(function () {
  Tracker.autorun(function () {
    var geo = Geolocation.currentLocation();
    Session.set('geo', geo);
  }); 
});
console.log(Geolocation.latLng());
