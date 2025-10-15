const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } }
};

// Occupation chambres
new Chart(document.getElementById('occupationChambres'), {
    type: 'bar',
    data: {
        labels: ['Jan','Fév','Mar','Avr','Mai','Juin','Juil','Août','Sep','Oct','Nov','Déc'],
        datasets: [{ label: 'Chambres %', data: [82,84,85,86,87,88,90,91,89,88,87,86], backgroundColor: '#4CAF50' }]
    },
    options: options
});

// Occupation coworking
new Chart(document.getElementById('occupationCoworking'), {
    type: 'line',
    data: {
        labels: ['Jan','Fév','Mar','Avr','Mai','Juin','Juil','Août','Sep','Oct','Nov','Déc'],
        datasets: [{ label: 'Coworking %', data: [70,72,73,74,75,76,78,79,77,76,75,74], borderColor: '#2c5f49', fill: true, backgroundColor: 'rgba(76,175,80,0.2)' }]
    },
    options: options
});

// Rentabilité annuelle
new Chart(document.getElementById('rentabilite'), {
    type: 'line',
    data: {
        labels: ['Jan','Fév','Mar','Avr','Mai','Juin','Juil','Août','Sep','Oct','Nov','Déc'],
        datasets: [{ label: 'Revenus €', data: [11000,11500,11800,12000,12500,13000,13500,14000,13800,14200,14500,14200], borderColor: '#FFA500', fill: false }]
    },
    options: options
});

// Production solaire
new Chart(document.getElementById('productionSolaire'), {
    type: 'bar',
    data: {
        labels: ['Jan','Fév','Mar','Avr','Mai','Juin','Juil','Août','Sep','Oct','Nov','Déc'],
        datasets: [{ label: 'kWh', data: [500,600,700,800,900,1000,1200,1300,1100,1000,800,600], backgroundColor: '#FFD700' }]
    },
    options: options
});

// Gobelets évités
new Chart(document.getElementById('gobelets'), {
    type: 'doughnut',
    data: {
        labels: ['Économisés','Utilisés'],
        datasets: [{ data: [25000,5000], backgroundColor: ['#4CAF50','#C0C0C0'] }]
    },
    options: options
});

// Potager rooftop
new Chart(document.getElementById('legumes'), {
    type: 'bar',
    data: {
        labels: ['Jan','Fév','Mar','Avr','Mai','Juin','Juil','Août','Sep','Oct','Nov','Déc'],
        datasets: [{ label: 'kg légumes', data: [20,30,35,40,50,60,80,100,90,70,50,30], backgroundColor: '#8BC34A' }]
    },
    options: options
});
