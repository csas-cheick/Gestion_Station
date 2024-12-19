const sidebarButtons = document.querySelectorAll(".sidebar button");

sidebarButtons.forEach((button) => {
  button.addEventListener("click", function () {
    sidebarButtons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
    updateDashboardContent(this.id);
  });
});
function updateDashboardContent(buttonId) {
  const dashboardWindow = document.getElementById("dashboardWindow");

  if (buttonId === "GestionVenteBtn") {
    dashboardWindow.innerHTML = `
      <h3 class="text-center">Gestion de ventes</h3>
      <p class="text-muted text-center">Ici, pour les fonctionnalités de bouton autres !</p>
    `;
  } else if (buttonId === "GestionStockBtn") {
    dashboardWindow.innerHTML = `
      <h3 class="text-center">Gestion de stocks</h3>
      <p class="text-muted text-center">Ici, pour les fonctionnalités de bouton autres !</p>
    `;
  } else if (buttonId === "GestionCaisseBtn") {
    dashboardWindow.innerHTML = `
      <h3 class="text-center">Gestion de caisse</h3>
      <p class="text-muted text-center">Ici, pour les fonctionnalités de bouton autres !</p>
    `;
  } else if (buttonId === "AutresBtn") {
    dashboardWindow.innerHTML = `
      <h3 class="text-center">Autres</h3>
      <p class="text-muted text-center">Ici, pour les fonctionnalités de bouton autres !</p>
    `;
  }
}
