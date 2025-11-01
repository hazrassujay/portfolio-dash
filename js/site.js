document.addEventListener('DOMContentLoaded', () => {

    // Animate sections on scroll
    const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
          if(entry.isIntersecting){entry.target.classList.add('visible');}
});
},{threshold:0.2});
sections.forEach(section=>observer.observe(section));

// Animate skill bars
  const fills = document.querySelectorAll('.skill-fill');
fills.forEach(fill=>{
    const width = fill.style.width;
fill.style.width='0%';
setTimeout(()=>{fill.style.width=width;},500);
});



// Fullscreen Overlay Feature
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.createElement('div');
    overlay.classList.add('fullscreen-overlay');
    document.body.appendChild(overlay);

    // Hide overlay when clicked
    overlay.addEventListener('click', () => {
        overlay.classList.remove('show');
        overlay.innerHTML = '';
    });

    // Add click listeners to all project images
    document.querySelectorAll('.project-card img').forEach(img => {
        img.addEventListener('click', () => {
            const clone = img.cloneNode(true);
            overlay.innerHTML = '';
            overlay.appendChild(clone);
            overlay.classList.add('show');
        });
    });
});

// (Optional) Download CV button
  const downloadBtn = document.getElementById('downloadBtn');
if(downloadBtn){
    downloadBtn.addEventListener('click',()=>{
        window.open('Sujay_Hazra_CV.pdf','_blank');
});
}

});

document.addEventListener("DOMContentLoaded", () => {
    // Animate nav links on hover
    document.querySelectorAll(".navbar nav a").forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.transform = "scale(1.1)";
});
link.addEventListener("mouseleave", () => {
    link.style.transform = "scale(1)";
});
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
if (window.scrollY > 40) {
    nav.classList.add("scrolled");
} else {
    nav.classList.remove("scrolled");
}
});
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".glass").forEach(card => {
        card.style.opacity = "0";
card.style.transform = "translateY(20px)";
setTimeout(() => {
    card.style.transition = "all 0.6s ease";
card.style.opacity = "1";
card.style.transform = "translateY(0)";
}, 200);
});
});

