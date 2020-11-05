$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20)
        $(".navbar").addClass("sticky");
        else
        $(".navbar").removeClass("sticky");
    });
    
    $('.menu-btn').click(function(){
        $(this).toggleClass("active");
        $(".nav-items").toggleClass("active");
    });
});

