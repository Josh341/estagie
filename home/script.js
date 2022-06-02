document.getElementById('video').play();
document.querySelector("#back-to-top").addEventListener("click", () => window.scrollTo(0, 0));

window.sr = ScrollReveal({ reset:true});
ScrollReveal({ distance: '15px' });
sr.reveal('.s1', {duration : 3000, origin: 'right'})
sr.reveal('.s2', {duration : 3000, origin: 'left'})
sr.reveal('.s3', {duration : 3000,  origin: 'left'})