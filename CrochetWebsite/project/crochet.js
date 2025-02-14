let search=document.querySelector('.search-box');

document.querySelector('#search-icon').onclick=()=>{
    search.classList.toggle('active');
    user.classList.remove('active');
}

let user=document.querySelector('.user');
document.querySelector('#user-icon').onclick=()=>{
    user.classList.toggle('active');
    search.classList.remove('active');
}

$(document).ready(function(){
    $(".about-box-invisible-content").hide();
    $(document).on('click',"#read-more-btn",function(){
        var moreLessButton=$(".about-box-invisible-content").is(":visible")?'Read More':'Read Less';
        $(this).text(moreLessButton);
        $(this).parent(".box").find(".about-box-invisible-content").toggle();
        $(this).parent(".box").find(".about-box-visible-content").toggle();
    });
});