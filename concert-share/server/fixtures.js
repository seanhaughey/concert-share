if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'Rock On!',
		image: 'http://www.ks95.com/wp-content/uploads/2014/04/94130125.jpg'
	});
	Posts.insert({
		title: 'Laser Show',
		image: 'http://orig05.deviantart.net/f20c/f/2010/133/f/3/concert_green_by_kristof_clg.jpg'
	});
	Posts.insert({
		title: 'Confetti Cannon',
		image: 'http://exclaim.ca/images/up-5flaming_lips.jpg'
	});
}