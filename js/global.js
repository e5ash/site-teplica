var w = $(window),
	body = $('body'),
	speed = 400,
	nav = $('.panel__nav');

var ObjectPopup = {popup: $('.popup'), popupWrapper: $('.popup__wrapper'), popupBg: $('.popup__bg'), popupClose: $('.popup__close'), }

$('.caret > li > a').click(function() {
	$(this).removeAttr('href');
	var ul = $(this).siblings('ul');
	ul.slideToggle(400);
});

$('button#sticks').click(function() {
	$(this).toggleClass('close');
	nav.slideToggle(300)
});


$('input[name=phone]').mask("+7 (999) 999-99-99");


function abs(object) {
	var scrollTop = body.scrollTop(),
    	height = body.height();
	object.css('padding-top', scrollTop+20).fadeIn(speed).height(height-scrollTop-20);
}

$('.button_callback').click(function() {
	abs(ObjectPopup.popup);
});

ObjectPopup.popupBg.click(function() {
	ObjectPopup.popup.fadeOut(speed);
});

ObjectPopup.popupClose.click(function() {
	ObjectPopup.popup.fadeOut(speed);
});

$('.popup form').submit(function() {
	$.ajax({
	    type: "POST",
	    url: "/order.php",
	    data: $(this).serialize()
	}).done(function() {
	    popupForm.css('display','none');
	    popupMessage.css('display','block');
	});
	return false;
});

$('.fancybox-media').fancybox({
	openEffect  : 'none',
	closeEffect : 'none',
	helpers : {
		media : {}
	}
});


$('form').submit(function(){
	var error = $(this).find('.error');
	if($(this).find("[name='name']").val()==""){
	   error.html('<p>* Введите имя</p>');
	    $(this).find("[name='name']").focus();
	    return false;
	}
	if($(this).find("[name='phone']").val()==""){
		error.html('<p>* Введите телефон</p>');
	    $(this).find("[name='phone']").focus();
	    return false;
	}
});


 
$(".panel__nav").on("click","a", function (event) {
	event.preventDefault();

	var id  = $(this).attr('href'),
		top = $(id).offset().top;
	
	body.animate({scrollTop: top - 20}, 1500);
});


w.resize(function() {
	if (w.width()>=980) {
		nav.removeAttr('style');
		$('button#sticks').removeClass('close')
	}
});