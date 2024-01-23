var sections = document.querySelector('section');

onscroll = function(){
    let scrollPosition = document.documentElement.scrollTop;
    if(scrollPosition > sections.offsetTop + 50)
    {
        document.querySelector('nav').className = 'sticked navbar navbar-expand-lg pt-4 position-fixed top-0 end-0 start-0';
        document.getElementById('right-btn').className = 'main-btn';
    }else{
        document.querySelector('nav').classList.remove('sticked');
        var len = document.getElementById('right-btn');
        len.style.transition = '0.5s';
        document.getElementById('right-btn').classList.remove('main-btn');
    }
}
