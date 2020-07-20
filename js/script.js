// event saat link di klik
$('.page-scroll').on('click', function(e){
    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen
    var elementujuan = $(tujuan);

    // pindah scroll
    $('html, body').animate({
        scrollTop: elementujuan.offset().top - 60
    }, 1250, 'easeInOutExpo');

    e.preventDefault();
});

// parallax
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css ({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css ({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css ({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });
});
