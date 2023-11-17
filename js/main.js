// 박물관 가기
$(function(){
    $('.museumLink > a').mouseenter(function() {
        clearTimeout(stMeuseLink);
    }).mouseleave(function() {
        stMeuseLink = setTimeout(function() {
            $('.linkList.museum').hide();
            $('.museumLink > a').removeClass('on');
        }, 500);
    }).focusin(function() {
        $(this).trigger('mouseenter');
    }).focusout(function() {
        $(this).trigger('mouseleave');
    }).click(function() {
        $(this).siblings('.linkList.museum').slideToggle(200);
        $(this).toggleClass('on');
        return false;
    });

    var stMeuseLink = null;
    $('ul.linkList.museum > li a').mouseenter(function() {
        clearTimeout(stMeuseLink);
    }).mouseleave(function() {
        stMeuseLink = setTimeout(function() {
            $('.linkList.museum').hide();
            $('.museumLink > a').removeClass('on');
        }, 500);
    }).focusin(function() {
        $(this).trigger('mouseenter');
    }).focusout(function() {
        $(this).trigger('mouseleave');
    });

    // 언어선택
    var stLangLink = null;
    $('.lang-select').mouseenter(function() {
        clearTimeout(stLangLink);
    }).mouseleave(function() {
        stLangLink = setTimeout(function() {
            $('.linkList.langlist').hide();
            $('.lang-select').removeClass('on');
        }, 500);
    }).focusin(function() {
        $(this).trigger('mouseenter');
    }).focusout(function() {
        $(this).trigger('mouseleave');
    }).click(function() {
        $(this).siblings('.linkList.langlist').slideToggle(200);
        $(this).toggleClass('on');
        return false;
    });

    $('ul.linkList.langlist > li a').mouseenter(function() {
        clearTimeout(stLangLink);
    }).mouseleave(function() {
        stLangLink = setTimeout(function() {
            $('.linkList.langlist').hide();
            $('.lang-select').removeClass('on');
        }, 500);
    }).focusin(function() {
        $(this).trigger('mouseenter');
    }).focusout(function() {
        $(this).trigger('mouseleave');
    });

    // 관련사이트 바로가기
    var stFmLink = null;
    $('.familysite .btn-site').mouseenter(function() {
        clearTimeout(stFmLink);
    }).mouseleave(function() {
        stFmLink = setTimeout(function() {
            $('.link-box .familysite .linkList').hide();
            $('.btn-site').removeClass('on');
        }, 500);
    }).focusin(function() {
        $(this).trigger('mouseenter');
    }).focusout(function() {
        $(this).trigger('mouseleave');
    }).click(function() {
        $(this).siblings('.link-box .familysite .linkList').slideToggle(200);
        $(this).toggleClass('on');
        return false;
    });

    $('ul.linkList > li a').mouseenter(function() {
        clearTimeout(stFmLink);
    }).mouseleave(function() {
        stFmLink = setTimeout(function() {
            $('.link-box .familysite .linkList').hide();
            $('.btn-site').removeClass('on');
        }, 500);
    }).focusin(function() {
        $(this).trigger('mouseenter');
    }).focusout(function() {
        $(this).trigger('mouseleave');
    });

    // 검색창 나오게 하기
    var search = $('.gnb-btn-search')
    var area = $('.search-area')
    var close = $('.search-close')

    search.click(function(){
        area.show();
    }) 
    close.click(function(){
        area.hide();
    })

    // gnb 나오게 하기
    var DESKTOP_WIDTH = 992;
    //----------------------------------------------------------------------------------------------------------------------
    // Desktop
    // GNB 
    
    var mPageId = -1;
    var sPageId = -1;
    var tPageId = -1;
    $('.gnb .nav ul.depth1 > li').each(function() {
    	if ($('> a', this).hasClass('on')) {
    		mPageId = $(this).index();
    	}
    	$('.sub-menu .depth2 > li').each(function() {
    		if ($('> a', this).hasClass('on')) {
    			sPageId = $(this).index();
    		}
    		$('.depth3-menu .depth3 > li').each(function() {
        		if ($('> a', this).hasClass('on')) {
        			tPageId = $(this).index();
        		}
        	});
    	});
    });
//     console.log('mPageId:', mPageId);
//     console.log('sPageId:', sPageId);
//     console.log('tPageId:', tPageId);

    function defaultFocusMenu() {
        if (mPageId !== -1) {
            $('.gnb .nav ul.depth1 > li:eq('+ mPageId +') .sub-menu').show();
        }
    }
    defaultFocusMenu();

    var stMenuOut = null;
    $('.gnb .nav ul.depth1 > li > a').mouseenter(function() {
        clearTimeout(stMenuOut);
        onMenuOver($(this).parent().index());
    }).mouseleave(function() {
        onMenuOut();
    }).focusin(function() {
        $(this).trigger('mouseenter');
    }).focusout(function() {
        $(this).trigger('mouseleave');
    });

    $('.gnb .sub-menu .depth2 > li > a').mouseenter(function() {
        clearTimeout(stMenuOut);
        onSubOver($(this).parent());
    }).mouseleave(function() {
        onMenuOut();
    }).focusin(function() {
        $(this).trigger('mouseenter');
    }).focusout(function() {
        $(this).trigger('mouseleave');
    });

    $('.depth3 li a').mouseenter(function() {
        clearTimeout(stMenuOut);
    }).mouseleave(function() {
        onMenuOut();
    }).focusin(function() {
        $(this).trigger('mouseenter');
    }).focusout(function() {
        $(this).trigger('mouseleave');
    });

    function onMenuOver(mid) {
        $('.gnb .nav ul.depth1 > li > a').removeClass('on');
        //
        $('.sub-menu').hide();
        var sm = $('.gnb .nav ul.depth1 > li:eq('+ mid +') .sub-menu');
        sm.show();
    }

    function onMenuOut() {
        stMenuOut = setTimeout(function() {
        	if (mPageId === -1) {
        		$('.sub-menu').fadeOut(300);
        	} else {
        		$('.sub-menu').hide();
        		$('.gnb .nav ul.depth1 > li:eq('+ mPageId +') .sub-menu').show();
        	}
            $('.depth3-menu').hide();
            defaultFocusMenu();
        }, 1000);
    }

    function onSubOver(subMenu) {
        $('.depth3-menu').hide();
        $('.depth3-menu', subMenu).show();
    }

    
    $('.visual-pagination .controller .btn-pause').click(function(e){
        e.preventDefault()
        $('.btn-pause').toggleClass('.btn-pause.playing')
    })
    
})

// 고탑

$(function(){
    $('.page-top').click(function(){
        $('html, body').stop().animate({
            scrollTop : 0
        }, 500)
    })
})