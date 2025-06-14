const ctx = document.getElementById('grafico').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Plástico', 'Papel', 'Eletrônicos', 'Vidro', 'Metal'],
    datasets: [{
      label: 'Kg Reciclado',
      data: [100, 50, 50, 25, 25],
      backgroundColor: 'rgba(76, 175, 80, 0.3)',
      borderColor: '#2e7d32',
      tension: 0.4,
      fill: true,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#1b5e20' },
        title: { display: true, text: 'Kg' }
      },
      x: {
        ticks: { color: '#1b5e20' }
      }
    }
  }
});

document.getElementById('btnBaixar').addEventListener('click', () => {
  const relatorio = document.getElementById('relatorio');
  html2pdf().from(relatorio).set({
    margin: 0.5,
    filename: 'relatorio-reciclagem.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  }).save();
});