const ctx = document.getElementById('myChart');
var colunax=['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
var valoresy=[12, 19, 3, 5, 2, 3];
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: colunax,
    datasets: [{
      label: '# of Votes',
      data: valoresy,
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});