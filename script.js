// --- Occupation par bâtiment ---
const occupationCtx = document.getElementById("occupationChart");
new Chart(occupationCtx, {
  type: "bar",
  data: {
    labels: ["Bât. A", "Bât. B", "Bât. C", "Coworking"],
    datasets: [{
      label: "Taux d’occupation (%)",
      data: [92, 97, 90, 88],
      backgroundColor: ["#81c784", "#66bb6a", "#43a047", "#388e3c"]
    }]
  },
  options: { responsive: true }
});

// --- Rentabilité mensuelle ---
const rentabiliteCtx = document.getElementById("rentabiliteChart");
new Chart(rentabiliteCtx, {
  type: "line",
  data: {
    labels: ["Jan", "Fév", "Mars", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],
    datasets: [{
      label: "Revenus mensuels (€)",
      data: [9500, 9600, 9800, 9900, 10000, 10200, 10300, 10200, 10400, 10600, 10750, 11000],
      borderColor: "#2e7d32",
      tension: 0.3,
      fill: true,
      backgroundColor: "rgba(46, 125, 50, 0.1)"
    }]
  },
  options: { responsive: true }
});

// --- Énergie générée ---
const energieCtx = document.getElementById("energieChart");
new Chart(energieCtx, {
  type: "doughnut",
  data: {
    labels: ["Panneaux solaires", "Pompes à chaleur", "Économie d'isolation"],
    datasets: [{
      data: [4800, 1200, 800],
      backgroundColor: ["#81c784", "#a5d6a7", "#c8e6c9"]
    }]
  },
  options: { responsive: true }
});
