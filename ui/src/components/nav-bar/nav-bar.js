export default {
  name: 'nav-bar',
  methods: {
    toggleMenu,
    closeMenu
  }
}

function toggleMenu() {
  const x = document.getElementById("myTopnav");
  const bars = document.querySelector('.container');
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }

  bars.classList.toggle("change");
}

function closeMenu() {
  const x = document.getElementById("myTopnav");
  const bars = document.querySelector('.container');
  x.className = "topnav";
  bars.className = "container";
}