function intro() {
	setTimeout(function() {
		$('.panel.one').css('height', '100%');
		setTimeout(function() {
			$('.panel.two').css('height', '100%');
			setTimeout(function() {
				$('.panel.three').css('height', '100%');
				setTimeout(function() {
					$('.panel.four').css('height', '100%');
					setTimeout(function() {
						$('.panel.five').css('height', '100%');
						setTimeout(function() {
							$('.panel.six').css('height', '100%');
						}, 100);
					}, 100);
				}, 100);
			}, 100);
		}, 100);
	}, 100);
	setTimeout(function() {
		$('.vertical.middle .panel.one').css('box-shadow', 'inset 800px 0 0 #303F9F');
		setTimeout(function() {
			$('.vertical.middle .panel.two').css('box-shadow', 'inset 800px 0 0 #E8EAF6');
			setTimeout(function() {
				$('.vertical.middle .panel.three').css('box-shadow', 'inset 800px 0 0 #303F9F');
				setTimeout(function() {
					$('.vertical.middle .panel.four').css('box-shadow', 'inset 800px 0 0 #E8EAF6');
					setTimeout(function() {
						$('.vertical.middle .panel.five').css('box-shadow', 'inset 800px 0 0 #303F9F');
						setTimeout(function() {
							$('.vertical.middle .panel.six').css('box-shadow', 'inset 800px 0 0 #E8EAF6');
						}, 50);
					}, 50);	
				}, 50);
			}, 50);	
		}, 50);
	}, 800);	
}

$(document).ready(function() {
	intro();
});