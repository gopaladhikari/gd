let bars = document.getElementById("bars");
let cross = document.getElementById("cross");
let mobile_nav_links = document.getElementById("mobile-nav-links");

bars.onclick = () => {
  cross.style.display = "block";
  bars.style.display = "none";
  mobile_nav_links.classList.remove("right-[-100%]");
};

cross.onclick = () => {
  cross.style.display = "none";
  bars.style.display = "block";
  mobile_nav_links.classList.add("right-[-100%]");
};
