const icon = document.getElementById("icon-burger");
const sidebar = document.getElementById("sidebar");
// const mainContent = document.getElementById("content-main");

function handleNavMobileToggle() {
  sidebar.classList.toggle("is-active");
//   mainContent.style.gridColumn = "3 / 7"
}

icon.onclick = handleNavMobileToggle;
