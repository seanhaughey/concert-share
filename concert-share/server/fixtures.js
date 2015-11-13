if (Posts.find().count() === 0) {
	Posts.insert({
		image: 'images/bob_log.jpg',
		author: 'sdhaughey',
		artist: 'Bob Log III',
		venue: 'Mohawk'
	});
	Posts.insert({
		image: 'images/black_pistol_fire.jpg',
		author: 'sdhaughey',
		artist: 'Black Pistol Fire',
		venue: 'The Scoot Inn'
	});
	Posts.insert({
		image: 'images/widespread_panic.jpg',
		author: 'sdhaughey',
		artist: 'Widespread Panic',
		venue: 'ACL Live'
	});
}