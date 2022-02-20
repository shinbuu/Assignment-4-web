$(function() {
    $("#video-button").click(function() {
        let about = $(".modal");

        if (about.css("display") === "none") {
            about.css("display", "block")
        } else {
            about.css("display", "none")
        }
    });

    $('.modal-close').click(function() {
        $('.modal').css("display", "none");
    })
});
$(function() {
    $("#about-button").click(function() {
        const h2 = $('.about-empire span h2')
        if (h2.html() === '<h2>For gaming and having fun</h2>') {
            h2.html('<h2>For analyzing or for work with graphics</h2>')
            $('.about-inner h1').html('<h1>For working</h1>')
            $('.about-empire img').remove()
            $('.about-empire').prepend('<img src="./images/chart-trading-courses-forex.jpg" style = " border-radius: 20px;"/>')
            $('.about-empire p').html('<p>A personal computer (PC) is a multi-purpose microcomputer whose size, capabilities, and price make it feasible for individual use. Personal computers are intended to be operated directly by an end user, rather than by a computer expert or technician. Unlike large, costly minicomputers and mainframes, time-sharing by many people at the same time is not used with personal computers. Primarily in the late 1970s and 1980s, the term home computer was also used.</p>')
        } else {
            h2.html('<h2>For gaming and having fun</h2>')
            $('.about-inner h1').html('<h1>For gaming</h1>')
            $('.about-empire img').remove()
            $('.about-empire').prepend('<img src="https://wallpaperaccess.com/full/2567207.jpg" style = " border-radius: 20px;"/>')
            $('.about-empire p').html('<p>A gaming computer is a specialized personal computer designed for playing video games at very high standards. Gaming PCs typically differ from mainstream personal computers by using high-performance video cards and high core-count central processing units with raw performance. Gaming PCs are also used for other demanding tasks such as video editing. Many gamers and computer enthusiasts choose to overclock their CPU and GPU in order to gain extra performance.</p>')
        }
    });
});