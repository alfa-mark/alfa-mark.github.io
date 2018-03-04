$(document).ready(function(){
    $(".navbar .hasScroll").on('click', function(event) {
        if (this.dataset.scrolltarget !== "") {
            event.preventDefault();
            var scrollToDataTrg = this.dataset.scrolltarget;
            $('html, body').animate({
                scrollTop: $(scrollToDataTrg).offset().top
            }, 900, function(){
                window.location.scrollToDataTrg = scrollToDataTrg;
            });
        }
    });
})