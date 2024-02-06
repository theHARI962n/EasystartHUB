// progress.js
// Include your sample data here or fetch it dynamically
const progressData = [20, 25, 40, 76, 86];

// Function to update progress chart
function updateProgressChart() {
    const ctx = document.getElementById('progressChart').getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: progressData.map((_, index) => `Month ${index + 1}`),
            datasets: [{
                label: 'Progress',
                data: progressData,
                backgroundColor: 'rgba(66, 179, 244, 0.2)',
                borderColor: 'rgba(66, 179, 244, 1)',
                borderWidth: 2,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(66, 179, 244, 1)',
            }],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                },
            },
        },
    });
}

// Function to show detailed progress (replace with your implementation)
function showDetailedProgress() {
    alert('Detailed progress view will be implemented here.'); // Replace with your logic
}

// Call function to update chart on page load
updateProgressChart();

