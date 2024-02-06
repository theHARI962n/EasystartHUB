async function allocateSeat() {
    const employeeName = document.getElementById('employeeName').value;
    const department = document.getElementById('department').value;
    const seatSelection = document.getElementById('seatSelection').value;

    // Validate input fields
    if (!employeeName || !department || !seatSelection) {
        alert('Please fill out all fields.');
        return;
    }

    // Fetch API to communicate with the backend (adjust the URL and method based on your backend)
    try {
        const response = await fetch('http://localhost:3000/allocate-seat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                employeeName,
                department,
                seatSelection,
            }),
        });

        if (response.ok) {
            alert('Seat allocated successfully!');
        } else {
            alert('Failed to allocate seat. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
}
