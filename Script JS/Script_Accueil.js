const sidebarButtons = document.querySelectorAll(".sidebar button");

// Gérer le clic sur chaque bouton dans la sidebar
sidebarButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Supprimer la classe "active" de tous les boutons
    sidebarButtons.forEach((btn) => btn.classList.remove("active"));
    // Ajouter la classe "active" au bouton cliqué
    this.classList.add("active");
    // Mettre à jour le contenu du tableau de bord
    updateDashboardContent(this.id);
  });
});

// Fonction qui met à jour le contenu du tableau de bord
function updateDashboardContent(buttonId) {
  const dashboardWindow = document.getElementById("dashboardWindow");

  if (buttonId === "GestionVenteBtn") {
    dashboardWindow.innerHTML = `
      <h3 class="text-center">Gestion de ventes</h3>
      <p class="text-muted text-center">Ici, pour les fonctionnalités de vente !</p>
    `;
  } else if (buttonId === "GestionStockBtn") {
    dashboardWindow.innerHTML = `
      <h3 class="text-center">Gestion de stocks</h3>
      <p class="text-muted text-center">Ici, pour la gestion des stocks !</p>
    `;
  } else if (buttonId === "GestionCaisseBtn") {
    dashboardWindow.innerHTML = `
      <h3 class="text-center">Gestion de caisse</h3>
      <p class="text-muted text-center">Ici, pour la gestion de la caisse !</p>
    `;
  } else if (buttonId === "AutresBtn") {
    dashboardWindow.innerHTML = `
      <h3 class="text-center">Autres</h3>
      <p class="text-muted text-center">Ici, pour d'autres fonctionnalités !</p>
    `;
  }
}

// Gérer l'ouverture/fermeture du menu pour les petits écrans
const navbarToggler = document.querySelector(".navbar-toggler"); // Le bouton hamburger
const sidebar = document.querySelector(".sidebar"); // La barre latérale

navbarToggler.addEventListener("click", function () {
  // Basculer la classe 'show' sur la sidebar pour l'afficher/masquer
  sidebar.classList.toggle("show");
});
