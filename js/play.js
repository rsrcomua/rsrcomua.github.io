$(document).ready(function(){
	var air=$('#air-audio').get(0);
	air.volume=1;	

	$('#air-audiobar .play').on('click',function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			air.pause();
			}
		else {
			air.src="http://stream.rsr.com.ua/live";
			$(this).addClass('active');
			air.play();
			}
	});
});