// Website Views Chart
const viewsCtx = document.getElementById('viewsChart').getContext('2d');
new Chart(viewsCtx, {
    type: 'bar',
    data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
            label: 'Views',
            data: [50, 45, 20, 30, 50, 60, 80],
            backgroundColor: '#4CAF50'
        }]
    },
    options: {
        responsive: false,
        plugins: {
            legend: {
              display: false // removes the label in the legend
            }
        }
    }
});

// Daily Sales Chart
const salesCtx = document.getElementById('salesChart').getContext('2d');
new Chart(salesCtx, {
    type: 'line',
    data: {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        datasets: [{
            label: 'Sales',
            data: [150, 120, 430, 260, 350, 300, 250, 180, 300, 320, 210, 220],
            borderColor: '#4CAF50',
            fill: false
        }]
    },
    options: {
        responsive: false,
        plugins: {
            legend: {
              display: false // removes the label in the legend
            }
        }
    }
});

// Completed Tasks Chart
const tasksCtx = document.getElementById('tasksChart').getContext('2d');
new Chart(tasksCtx, {
    type: 'line',
    data: {
        labels: ['Apr', 'Jun', 'Aug', 'Oct', 'Dec'],
        datasets: [{
            label: 'Tasks',
            data: [50, 300, 450, 400, 470],
            borderColor: '#4CAF50',
            fill: false
        }]
    },
    options: {
        responsive: false,
        plugins: {
            legend: {
              display: false // removes the label in the legend
            }
        }
    }
});
