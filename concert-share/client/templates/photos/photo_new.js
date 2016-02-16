Session.setDefault('img', null);

Meteor.startup(function () {
  Tracker.autorun(function () {
    var geo = Geolocation.currentLocation();
    Session.set('geo', geo);
  }); 
});

var getPicture = function(opts) {
  console.log(Foursquare['id']);
  MeteorCamera.getPicture(opts, function(err, data) {
    if (err) {
      console.log('error', err);
    }
    if (data) {
      Session.set('img', data);
  var post = {
    image: data,
    author: Meteor.user().username,
    userId: Meteor.user()._id,
    submitted: new Date(),
    location: [(Geolocation.latLng())["lat"], (Geolocation.latLng())["lng"]]
  };
  $.ajax({
    url: 'https://api.foursquare.com/v2/venues/search?ll='+[(Geolocation.latLng())["lat"], (Geolocation.latLng())["lng"]]+'&client_id=2ADZFDWAO0P30OFONDWTT3WEEM1TFQMDBTUJE2CEPMJO1X04&client_secret=XGNT50DHO4V5UVQRBJJMAKJZJFU4QC2AJYHIURFMBGKNNFV5&v=20140806',
    type: 'GET',
    dataType: 'json',
    data: '',
    success: function (data, textStatus, xhr) {
      $('#fourSquare').html('');
      for (var i = 0; i < 5; i++) {
        console.log(data);
        console.log(data['response']['venues'][i]['id']);
        $('#fourSquare').append('<li>' + '<a href="" class="venue-submit" data-dismiss="modal" id="' + i + '" value="' + data["response"]["venues"][i]["name"] + '" >' + data["response"]["venues"][i]["name"] + '</a>' + '</li>');
      };
    },
    error: function (xhr, textStatus, errorThrown) {
    console.log(errorThrown);
    }
  });
  post._id = Posts.insert(post);
  Session.set('img', null);
  Router.go('photoInfo', post);
    }
  });
};

Template.cameraEvent.events({
  'click button': function () {
    getPicture({
      width: 200,
      height: 200,
      quality: 100
    });
  },

});

Template.libraryEvent.events({
  'click button': function () {
    if (Meteor.isCordova) {
      getPicture({
        width: 200,
        height: 200,
        quality: 75,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
      });

    } else {
      alert('Cordova only feature.');
    }
  }
});

Template.img.helpers({
  img: function() {
    return Session.get('img');
  }
});
