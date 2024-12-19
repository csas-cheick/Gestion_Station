const sidebarButtons = document.querySelectorAll(".sidebar button");

// Gérer le clic sur chaque bouton dans la sidebar
sidebarButtons.forEach((button) => {
  button.addEventListener("click", function () {
    sidebarButtons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
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
