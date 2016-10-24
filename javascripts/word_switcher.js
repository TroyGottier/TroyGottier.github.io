var $switchContainer = $('.js-data_switch'),
	dataSets = [
		[
			' Father',
			' Developer',
			' Husband',
			' Builder',
			' Tinkerer',
			' Gamer',
			' Knowledge Seeker',
			' Chef',
			' Cycler',
			' Joker',
			' Fast Learner',
			'vailable to hire'
		]
	];



$switchContainer.each(function() {
	var $container = $(this),
		setNumber = $container.data('container').split('-').pop(),
		data = dataSets[setNumber - 1],
		toSwitch = $container.find('span'),
		count = 0;

	toSwitch.text(data[0]);
	setInterval(function () {
		count++;
		toSwitch.fadeOut(400, function () {
			$(this).text(data[count % data.length]).fadeIn(400);
		});
	}, 2000);
	console.log(data);
});
