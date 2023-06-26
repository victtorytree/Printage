window.addEventListener('scroll', function() {
    const array = document.querySelectorAll('.project');
    array.forEach(element => {
    if(element.getBoundingClientRect().top < 300) {
        element.classList.add('active');
        element.querySelector('.video_').play();
        element.querySelector('.video_small').play();
    } else {
        element.classList.remove('active');
        element.querySelector('.video_').pause();
        element.querySelector('.video_small').pause();
    }
    });
    
});
