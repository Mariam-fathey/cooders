$(".wrapper").animate({width:"100%"},2000);
$(".wrapper").animate({height:window.innerHeight},2000,function(){
    $(".wrapper h1").fadeIn(1000,function(){
        $(".wrapper .item").fadeIn(1000)
    })
});