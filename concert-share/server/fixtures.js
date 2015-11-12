if (Posts.find().count() === 0) {
	Posts.insert({
		image: 'http://www.ks95.com/wp-content/uploads/2014/04/94130125.jpg',
		author: 'sdhaughey',
		artist: 'Motley Crue',
		venue: 'Frank Irwin Center'
	});
	Posts.insert({
		image: 'http://orig05.deviantart.net/f20c/f/2010/133/f/3/concert_green_by_kristof_clg.jpg',
		author: 'sdhaughey',
		artist: 'Imagine Dragons',
		venue: 'Moody Theater'
	});
	Posts.insert({
		image: 'http://exclaim.ca/images/up-5flaming_lips.jpg',
		author: 'sdhaughey',
		artist: 'Flaming Lips',
		venue: 'Jannus Landing'
	});
}