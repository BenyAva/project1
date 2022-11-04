// $(()=> {
//     $('.home').on('click',() => {
//         $(this).toggleClass('.reveal')
//     })
// })


// $('div').on('click', function() {
//     $(this).toggleClass('show-description');
// })

$(() => {

//    $('#home').hide()
   $('#bio').hide()
   $('#resume').hide()
   $('#projects').hide()

    const showText = () => {
        $('#home').show(500)
        $('#bio').hide()
        $('#resume').hide()
        $('#projects').hide()
    }

    $('#h').on('click',showText)
    //////////////////

    const showText2 = () => {
        $('#bio').show(500)
        $('#home').hide()
        $('#resume').hide()
        $('#projects').hide()
    }

    $('#b').on('click',showText2)

    /////////////////////

    const showText3 = () => {
        $('#resume').show(500)
        $('#home').hide()
        $('#bio').hide()
        $('#projects').hide()
    }

    $('#r').on('click',showText3)

    /////////////////////////

    const showText4 = () => {
        $('#projects').show(500)
        $('#home').hide()
        $('#bio').hide()
        $('#resume').hide()
    }

    $('#p').on('click',showText4)


})


$(() => {

    let currentImgIndex = 0;

    let numOfImages = $('.carousel-images').children().length - 1

    $('.next').on('click', () => {
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')

        if(currentImgIndex < numOfImages) {
            currentImgIndex ++
           } else {
            currentImgIndex = 0
           }

        $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')


    })

    $('.previous').on('click', () => {
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')

        if(currentImgIndex > 0) {
            currentImgIndex --
          } else {
            currentImgIndex = numOfImages
          }
          

        $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
        
       })
      





});


$(() => {

    const darkMode = () => { 
        $('body').css('background','black')
        $('h1').css('color','white')
        $('p').css('color','white')
    }

    $('#dark').on('click',darkMode)



})