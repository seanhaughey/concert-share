  Session.setDefault('img', null);

  var getPicture = function(opts) {
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
      submitted: new Date()
    };

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
        quality: 75
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
