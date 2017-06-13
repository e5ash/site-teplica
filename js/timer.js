function updateDigits(ul_element, li_class, value) {
    var str_value = value + '';
    var count = ul_element.find('.'+li_class).length;
    var digit;
    for (var i=0; i < count; i++) {
        if (str_value.length - count + i < 0) {
            digit = 0;
        } else {
            digit = str_value[i - count + str_value.length];
        }
        ul_element.find('.'+li_class+':eq('+i+')').text(digit);
    }
}

function updateTimers() {
    //todo remove lp-timer
    $('.timer').each(function() {
        var event = new Date($(this).data('event'));
        
        var timespan = countdown(null, event, -2018);
        updateDigits($(this), 'timer__num_hours span', timespan.value > 0 && timespan.hours || 0);
        updateDigits($(this), 'timer__num_minutes span', timespan.value > 0 && timespan.minutes || 0);
        updateDigits($(this), 'timer__num_seconds span', timespan.value > 0 && timespan.seconds || 0);
    });
}

setInterval(updateTimers, 1000);
updateTimers();