$('#current-lesson').text('Basic Anatomy')
$('.card-box').css({maxHeight: '400px'})

$('.toggle-lesson-list').click(function() {
  
    let content = `.${$(this).attr('content')}`;
    let parent = $(this).parent().parent();
    $('.toggle-lesson-list').attr('minimized','false'); 
    
    $(this).addClass('active'); // add onto current

    if(parent.hasClass('minimized')){
        //expands lessons-panel

        console.log('expaaand')
        console.log(parent)
        $(this).removeClass('minimized')
        $(this).addClass('maximized')

        $(this).attr('minimized', 'false')
        $(content).removeClass('minimized')
        $(content).addClass('maximized')

    } else{
        //minimizes lessons-panel
        console.log('minimiiize')

        $(this).addClass('minimized')
        $(this).removeClass('maximized')

        $(this).attr('minimized', 'true')
        $(content).addClass('minimized')
        $(content).removeClass('maximized')

    }

    if(!$('.toggle-lesson-list').is('.maximized')){
        //minimized all
          $('.lessons-panel').removeClass('col-md-4').addClass('col-md-2')
          $('.video-player').removeClass('col-md-8').addClass('col-md-10')      
    }else{
        $('.lessons-panel').removeClass('col-md-2').addClass('col-md-4')
        $('.video-player').removeClass('col-md-10').addClass('col-md-8')

    }

})


// Changes current lesson in navbar 
$('.lesson-name').click(function(){
    $('#current-lesson').text($(this).text())
})


$('.show-reading-materials').click(function() {
    console.log($(this).attr('target'))
    console.log(' show reading materials ')
})