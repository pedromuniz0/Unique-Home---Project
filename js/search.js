// script.js
document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("search-icon");
  const searchBar = document.getElementById("search-bar");

  searchIcon.addEventListener("click", function () {
      // Alterna a classe 'open' no campo de pesquisa
      searchBar.classList.toggle("open");
      searchBar.focus(); // Foca no campo de pesquisa ao abrir
  });
});