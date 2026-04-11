let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/* ============================================================
   FICHIER : theme-toggle.js
   À AJOUTER à la fin de ton script.js existant,
   OU à lier avec <script src="theme-toggle.js"></script>
   juste avant </body> dans ton HTML.
   ============================================================ */

const themeToggle = document.getElementById('themeToggle');

/* Restaure la préférence sauvegardée */
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
}

/* Bascule au clic */
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});


document.querySelectorAll("a").forEach(link => {

const href = link.getAttribute("href");

if (
href &&
!href.startsWith("#") &&
!href.startsWith("mailto:") &&
!href.startsWith("tel:")
) {

link.setAttribute("target", "_blank");
link.setAttribute("rel", "noopener noreferrer");

}

});