document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('appointmentForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            service: document.getElementById('service').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            message: document.getElementById('message').value
        };
        
        console.log('Appointment Submitted:', formData);
        
        alert('Thank you! Your appointment request has been submitted. We will contact you shortly.');
        form.reset();
    });
    
    // Set minimum date to today
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
});
