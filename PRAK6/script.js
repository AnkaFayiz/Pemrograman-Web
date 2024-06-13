const ctx = document.getElementById('myChart').getContext('2d');

const dataPenjualan = [500, 620, 480, 730, 590, 810, 650, 780, 920, 840, 710, 980];
const labelBulan = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];



const data = {
    labels: labelBulan,
    datasets: [{
        label: 'Penjualan',
        data: dataPenjualan,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};


const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Bulan'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Jumlah Penjualan'
            }
          }
        }
      }
};


const myChart = new Chart(ctx, config);
