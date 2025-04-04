// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active navbar link on scroll

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});

// 1) Define the content for each fun fact
const factDetails = {
  education: `
  <h4>Education</h4>
  <p>I am a computer science student at Barnard College, Columbia University after transferring from Diablo Valley College!</p>
  `,
  skills: `
    <h4>Skills</h4>
    <ul>
    <li>UI/UX Design</li>
    <li>Figma</li>
    <li>JavaScript</li>
    <li>Python</li>
    <li>C++</li>
    <li>Product Managment</li>
  </ul>
  `,
  interests: `
    <h4>Interests</h4>
    <p>I am passionate about combining technology and design with social good!</p>
  `
};

  
  // 2) Show the pop-up overlay with the relevant content
  function showCustomPopup(htmlContent) {
    const popupOverlay = document.getElementById('popup-overlay');
    const popupText = document.getElementById('popup-text');
  
    popupText.innerHTML = htmlContent;
    popupOverlay.classList.add('show'); // triggers .popup-overlay.show
  }
  
  // 3) Close the pop-up overlay
  function closeCustomPopup() {
    const popupOverlay = document.getElementById('popup-overlay');
    popupOverlay.classList.remove('show');
  }
  
  // 4) Attach event listeners to each .fun-fact
  document.querySelectorAll('.fun-fact').forEach((factEl) => {
    factEl.addEventListener('click', () => {
      const factKey = factEl.getAttribute('data-fact');
      const content = factDetails[factKey] || '<p>No info available.</p>';
      showCustomPopup(content);
    });
  });
  
  // 5) Close button listener
  document.getElementById('popup-close').addEventListener('click', closeCustomPopup);
  

  // Card Deck Toggle in Hero
const frontPhoto = document.querySelector('.front-photo');
const behindPhoto = document.querySelector('.behind-photo');

if (frontPhoto && behindPhoto) {
  behindPhoto.addEventListener('click', () => {
    // Bring behind photo to the front
    behindPhoto.style.zIndex = '3';
    behindPhoto.style.transform = 'translate(0, 0)';

    // Move the front photo behind, offset it
    frontPhoto.style.zIndex = '2';
    frontPhoto.style.transform = 'translate(20px, 20px)';
  });
}


// Reset navbar brand color after click
document.querySelector('.navbar-brand').addEventListener('click', function () {
    this.style.color = ''; // Reset to base color
  });