$(window).scroll(function () {
if ($(window).scrollTop() >= 100) {
$('.navbar').css('background','#ffffff');
} else {
$('.navbar').css('background','transparent');
}
});
