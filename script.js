document.addEventListener('DOMContentLoaded', () => {

    // --- DATA ---
    const campusData = {
        kpi: { co2: 1.2, energy: 85, occupancy: 95, profit: 12 },
        impact: {
            labels: ['Énergie', 'Eau', 'Déchets', 'Mobilité'],
            data: [40, 25, 20, 15]
        },
        energy: {
            labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin'],
            data: [1200, 1150, 1100, 1050, 980, 950]
        },
        satisfaction: {
            labels: ['Propreté', 'Sécurité', 'Espaces communs', 'Services'],
            data: [92, 98, 88, 85]
        },
        economic: {
            labels: ['Revenus (€)', 'Coûts Op. (€)', 'Bénéfice Net (€)'],
            data: [500000, 320000, 180000]
        },
        baseStudents: 250
    };

    // --- NAVIGATION ---
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    function navigateTo(hash) {
        navLinks.forEach(link => {
            link.classList.toggle('active', link.hash === hash);
        });
        pages.forEach(page => {
            page.classList.toggle('active', page.id === hash.substring(1));
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetHash = e.currentTarget.hash;
            window.location.hash = targetHash;
            navigateTo(targetHash);
        });
    });

    // Initial page load
    const currentHash = window.location.hash || '#accueil';
    navigateTo(currentHash);


    // --- KPI COUNTER ANIMATION ---
    const kpiValues = document.querySelectorAll('.kpi-value');
    kpiValues.forEach(valueElement => {
        const target = +valueElement.getAttribute('data-target');
        const duration = 2000;
        let start = 0;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = target / steps;
       
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                clearInterval(timer);
                start = target;
            }
            valueElement.innerText = start.toFixed(target % 1 !== 0 ? 1 : 0);
        }, stepTime);
    });

    // --- CHARTS INITIALIZATION ---
    function createCharts() {
        const donutCtx = document.getElementById('impactDonutChart')?.getContext('2d');
        if(donutCtx) {
            new Chart(donutCtx, {
                type: 'doughnut',
                data: {
                    labels: campusData.impact.labels,
                    datasets: [{
                        data: campusData.impact.data,
                        backgroundColor: ['#005B41', '#239D60', '#6BCB77', '#B4E197'],
                        borderColor: '#ffffff',
                        borderWidth: 4
                    }]
                },
                options: { responsive: true, maintainAspectRatio: false }
            });
        }
       
        const energyCtx = document.getElementById('energyLineChart')?.getContext('2d');
        if(energyCtx) {
            new Chart(energyCtx, {
                type: 'line',
                data: {
                    labels: campusData.energy.labels,
                    datasets: [{
                        label: 'Consommation (kWh)',
                        data: campusData.energy.data,
                        borderColor: '#239D60',
                        backgroundColor: 'rgba(35, 157, 96, 0.1)',
                        fill: true,
                        tension: 0.3
                    }]
                }
            });
        }

        const satisfactionCtx = document.getElementById('satisfactionBarChart')?.getContext('2d');
        if(satisfactionCtx) {
             new Chart(satisfactionCtx, {
                type: 'bar',
                data: {
                    labels: campusData.satisfaction.labels,
                    datasets: [{
                        label: 'Score de satisfaction (%)',
                        data: campusData.satisfaction.data,
                        backgroundColor: '#6BCB77'
                    }]
                },
                options: { indexAxis: 'y' }
            });
        }
       
        const economicCtx = document.getElementById('economicBarChart')?.getContext('2d');
        if(economicCtx) {
             new Chart(economicCtx, {
                type: 'bar',
                data: {
                    labels: campusData.economic.labels,
                    datasets: [{
                        label: 'Montant (€)',
                        data: campusData.economic.data,
                        backgroundColor: ['#005B41', '#FF6B6B', '#239D60']
                    }]
                }
            });
        }
    }
   
    // Lazy load charts only when their page is shown
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                createCharts();
                obs.unobserve(entry.target); // Stop observing after charts are created
            }
        });
    }, { threshold: 0.5 });
   
    if(document.getElementById('accueil')) {
        observer.observe(document.getElementById('accueil'));
    }


    // --- SIMULATOR ---
    const citySlider = document.getElementById('city-slider');
    const cityCount = document.getElementById('city-count');
    const simCo2 = document.getElementById('sim-co2');
    const simStudents = document.getElementById('sim-students');

    if(citySlider) {
        citySlider.addEventListener('input', (e) => {
            const cities = parseInt(e.target.value);
            cityCount.innerText = cities;
            simCo2.innerText = (campusData.kpi.co2 * cities).toFixed(1) + ' T';
            simStudents.innerText = (campusData.baseStudents * cities).toLocaleString();
        });
    }

    // --- PDF REPORT ---
    const downloadBtn = document.getElementById('download-report');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            const { jsPDF } = window.jspdf;
            const reportContent = document.getElementById('report-content');
           
            html2canvas(reportContent).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('rapport-performance-eco-campus.pdf');
            });
        });
    }
});
