window.addEventListener('scroll',function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY> 0);
})

// ----------------Portfolio----------------

$(document).ready(function(){
    $(".button").click(function(){
        var value = $(this).attr("data-filter");
        if(value == "all"){
            $(".filter").show("100");
        }
        else{
            $(".filter").not("."+value).hide("1000");
            $(".filter").filter("."+value).show("1000");
        }
        $("ul.button").click(function(){
            $(this).addClass('active').siblings().removeClass('active')
        })
    })
})