(function ($) {
    /* =Change Tab */
    $.fn.setTabLoadContent = function (obj) {
        if ($(this).length === 1 && $(this).data('seted') === undefined) {
            // set read
            $(this).data('seted', true);

            // value default
            var vdf = {
                'defaultTab': 0
            };
            // check value
            if (obj) {
                $.extend(vdf, obj);
            }

            // data
            vdf.root = $(this);
            vdf.count = 0;
            vdf.totalTab = vdf.root.find('.tab-menu ul li').length;

            // view
            vdf.root.find('.tab-menu ul li').eq(vdf.defaultTab).addClass('active');
            vdf.root.find('.tab-content').load(vdf.root.find('.tab-menu ul li').eq(vdf.defaultTab).find('a').attr('href'), function () {
                $(".style-select-box").selectbox();


            });

            // control
            vdf.root.find('.tab-menu ul li a').click(function (e) {
                e.preventDefault();

                vdf.root.find('.tab-menu ul li').removeClass('active');

                vdf.defaultTab = $(this).parent().index();
                vdf.root.find('.tab-menu ul li').eq(vdf.defaultTab).addClass('active');
                vdf.root.find('.tab-content').load(
                    vdf.root.find('.tab-menu ul li').eq(vdf.defaultTab).find('a').attr('href'),
                    function () {
                        $(".style-select-box").selectbox();


                    }
                );
            });

        } else if ($(this).length > 1) {
            $(this).each(function (index, element) {
                $(element).setTabLoadContent(obj);
            });
        }
    };

    /* =Check Box */
    $.fn.customCheckBox = function () {
        if ($(this).length === 1 && $(this).data('customCheckBox') === undefined) {
            // set read
            $(this).data('customCheckBox', true);

            $(this).bind('click', function () {
                $(this).toggleClass('active');
            });

        } else if ($(this).length > 1) {
            $(this).each(function (index, element) {
                $(element).customCheckBox(obj);
            });
        }
    }

    /* =Radio Box */
    /*$.fn.customRadioBox = function(obj){
		if ($(this).length === 1 && $(this).data('customRadioBox') === undefined) {
            // set read
            $(this).data('customRadioBox', true);

			var itemClick;
			//var $allInput;
				itemClick = $(this).find('.js-item-radio');
			//var	$allInput = $(this).find('input')

				
			itemClick.bind('click',function(e){
				e.preventDefault();
				
				//$allInput.attr('checked', false);
				itemClick.removeClass('active');

				$(this).addClass('active');
				//$(this).find('input').attr('checked', true);

			});

		} else if ($(this).length > 1) {
            $(this).each(function (index, element) {
                $(element).customRadioBox(obj);
            });
        }
	};*/

})(jQuery);


/* Original Berm */
/* =Adyim Schedule */
function editSchedule() {

    $('.js-manage-schedule').find('a').bind('click', function () {
        // data
        var mc = $(this).parents('.js-manage-schedule').find('a');
        var selectTime = '';
        var chkFirstTime = false;
        var countAct = 0;

        // view
        $(this).toggleClass('act');

        mc.each(function (index, element) {
            if ($(element).hasClass('act')) {
                countAct += 1;

                if (!chkFirstTime) {
                    selectTime += index + ':00';
                    chkFirstTime = true;
                }
            } else {
                if (chkFirstTime) {
                    selectTime += ' - ' + index + ':00, ';
                    chkFirstTime = false;
                }
            }

            if (index == 23 && chkFirstTime) {
                selectTime += ' - 23:59';
            }
        });

        if (countAct >= 24) {
            selectTime = 'Running all day.';
        } else {
            if (selectTime.charAt(selectTime.length - 2) == ',') {
                selectTime = selectTime.substr(0, (selectTime.length - 2));
            }
        }


        $(this).parent().parent().next('.overall-time').find('td').next('td').html(selectTime);
    });
}

/* =Slide Volume */
function editTime(elem) {
    //data
    // elemTarget is selector
    // elemTime is value slide bar
    // elemStart is value start
    // listener is selector change value
    var canChange, timeValue;
    var slideWidth = $(elem.elemTarget).width();
    var btnSlide = $(elem.elemTarget).find('a').width();
    var maxLeftSlide = slideWidth - btnSlide;

    //view


    //control
    $(elem.elemTarget).find('a').bind('mousedown', function (e) {
        e.preventDefault();
        canChange = true;

        $(document).bind('mousemove', function (e) {
            e.preventDefault();

            if (canChange === true) {
                var poSix = e.pageX - $(elem.elemTarget).offset().left;

                if (poSix > maxLeftSlide) {
                    poSix = maxLeftSlide;
                }
                if (poSix < 0) {
                    poSix = 0;
                }

                $(elem.elemTarget).find('a').css({
                    left: poSix + 'px'
                });

                timeValue = parseInt(poSix / ((slideWidth - btnSlide) / elem.elemTime)) + elem.elemStart;

                // chk length
                if (String(timeValue).length <= 1) {
                    timeValue = '0' + String(timeValue);
                }

                $(elem.elemTarget).find('input').val(timeValue);

                if (elem.listener !== undefined) {
                    $(elem.listener).html(timeValue);
                }
            }

        });
    });

    $(document).bind('mouseup', function (e) {
        e.preventDefault();
        canChange = false;

        $(document).unbind('mousemove');
    });
}