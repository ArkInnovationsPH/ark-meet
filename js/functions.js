$('#current-lesson').text('Basic Anatomy')
$('.card-box').css({maxHeight: '400px'})
if(window.matchMedia("(max-width: 991.98px)").matches) {
    $('.lessons-panel').removeClass('col-md-4').addClass('col-md-2')
    $('.lessons-panel').css({right: -($('.lessons-panel').outerWidth()) , opacity: 0})
    $('.video-player').removeClass('col-md-8').removeClass('col-md-12').addClass('col-md-8')   
    $('.tag.card-box').removeClass('maximized').addClass('minimized')
    $('.iframe').css({
        height: '84vh'
    })
    $('.side-menu-btn').css({opacity: 1})
}

$('.toggle-lesson-list').click(function() {
 
    let content = `.${$(this).attr('content')}`;
    let parent = $(this).parent().parent();
    $('.toggle-lesson-list').attr('minimized','false'); 
    
    $(this).addClass('active'); // add onto current

    if(parent.hasClass('minimized')){
        //expands lessons-panel
        $(this).removeClass('minimized')
        $(this).addClass('maximized')

        $(this).attr('minimized', 'false')
        $(content).removeClass('minimized')
        $(content).addClass('maximized')

        $('.lessons-panel').removeClass('col-md-2').addClass('col-md-4')
        $('.video-player').removeClass('col-md-12').removeClass('col-md-10').addClass('col-md-8')      
    } else{
        //minimizes lessons-panel

        $(this).addClass('minimized')
        $(this).removeClass('maximized')

        $(this).attr('minimized', 'true')
        $(content).addClass('minimized')
        $(content).removeClass('maximized')

    }

    if(!$('.toggle-lesson-list').is('.maximized')){
        //minimized all
        $('.lessons-panel').removeClass('col-md-4').addClass('col-md-2').css({position:'fixed', right: -($('.lessons-panel').outerWidth()),opacity: 0})
        $('.side-menu-btn').css({opacity: 1})
        $('#sidemenu-overlay').css({display: 'none'})
        $("html").css("overflow", "unset");

        $('.video-player').removeClass('col-md-8').addClass('col-md-12')      
    }else{
        $('.lessons-panel').removeClass('col-md-2').addClass('col-md-4').css({position:'fixed', right: 0, opacity: 1})
        $('.side-menu-btn').css({opacity: 0})

        $('.video-player').removeClass('col-md-12').addClass('col-md-8')

    }


})


// Changes current lesson in navbar 
$('.lesson-name').click(function(){
    $('#current-lesson').text($(this).text())
})

$('.side-menu-btn').click(function() {
    if(window.matchMedia("(max-width: 991.98px)").matches) {
        $('#sidemenu-overlay').css({display: 'block'})
        $("html").css("overflow", "hidden");
        $('.lessons-panel').removeClass('p-0').css({paddingRight: '10px', paddingLeft: '10px', maxHeight: '85vh' , overflow: 'auto'})
    }
    $('.lessons-panel').css({position:'fixed', right: 0,opacity: 1})
    $('.side-menu-btn').css({opacity: 0})
    $('.lesson-summary').removeClass('minimized').addClass('maximized')
    $('.toggle-lesson-list[content="lesson-summary"]').removeClass('minimized').addClass('maximized')
    $('.video-player').removeClass('col-md-12').addClass('col-md-8')
    $('.lessons-panel').removeClass('col-md-2').addClass('col-md-4')

})


$('.toggle-subject-details').click(function() {
    let parent = $(this).parent().parent();
        let content = `.${$(this).attr('content')}`;

    if(parent.hasClass('minimized')){
        //expands subject-details
        $('.iframe').css({
            height: '62vh'
        })
     
        $(this).removeClass('minimized')
        $(this).addClass('maximized')

        $(this).attr('minimized', 'false')
        $(content).removeClass('minimized')
        $(content).addClass('maximized')

    } else{
        //minimizes subject-details
        $('.iframe').css({
            height: '84vh'
        })
        $(this).addClass('minimized')
        $(this).removeClass('maximized')

        $(this).attr('minimized', 'true')
        $(content).addClass('minimized')
        $(content).removeClass('maximized')
    }
})


$('.show-reading-materials').click(function() {
    let target = $(this).attr('target')
    $(`#reading-materials-${target}, #mobile-reading-materials-${target}` ).toggleClass('show')
    $(`#reading-materials-${target}, #mobile-reading-materials-${target}`).toggleClass('hide')
    $('.reading-materials').not(`#reading-materials-${target}, #mobile-reading-materials-${target}`).removeClass('show');
})

$(window).resize(function(){
    $("#lessons, #mobile-lessons,#activities, #mobile-activities,#attendance").accordion("refresh");
    $('#sidemenu-overlay').css({display: 'none'})
    $("html").css("overflow", "unset");

    $('.card-box').removeClass('maximized').addClass('minimized')
    $('.card-box').removeClass('maximized').addClass('minimized')
    $('.side-menu-btn').css({opacity: 1})

    $('.lessons-panel').removeClass('col-md-4').addClass('col-md-2').css({position:'fixed', right: -($('.lessons-panel').outerWidth()),opacity: 0})
    $('.iframe').css({
        height: '84vh'
    })
    $('.video-player').removeClass('col-md-8').removeClass('col-md-10').addClass('col-md-12')      

});