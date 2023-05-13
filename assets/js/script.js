window.addEventListener('scroll', function() {
    const array = document.querySelectorAll('.project');
    array.forEach(element => {
    if(element.getBoundingClientRect().top < 300) {
        element.classList.add('active');
    } else {
        element.classList.remove('active');
    }
    });
    
});


// const videoNew1 = document.createElement('video');
// videoNew1.innerHTML = `<video loop src="assets/videos/3D_Architecture(480).mp4" type="video/mp4" autoplay muted="muted">
// </video>`;
// const videoNew3 = document.createElement('video');
// videoNew3.innerHTML = `<video loop src="assets/videos/Battlecruiser480.mp4" type="video/mp4" autoplay muted="muted">
// </video>`;
// const videoNew1 = document.createElement('video');
// videoNew1.innerHTML = `<video loop src="assets/videos/3D_Architecture(480).mp4" type="video/mp4" autoplay muted="muted">
// </video>`;

// if(window.innerWidth < 576) {
//     document.getElementById('#project1').replaceChild(videoNew1, document.querySelector('.video1'));
//     document.getElementById('#project3').replaceChild(videoNew3, document.querySelector('.video2'));
// }
