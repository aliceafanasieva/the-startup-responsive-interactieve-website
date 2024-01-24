function validateForm() {
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var people = document.querySelector('input[name="people"]:checked');
    
    // Validation for the full name
    if (fullName.trim() === '') {
        document.getElementById('nameError').innerHTML = '* Full name is required';
        return false;
    }
    else {
        document.getElementById('nameError').innerHTML = '';
    }

    // Validation for email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerHTML = '* The email is invalid';
        return false;
    } 
    else {
        document.getElementById('emailError').innerHTML = '';
    }

    // Validation for amount people
    if (!people) {
        document.getElementById('peopleError').innerHTML = '* This field is required';
        return false;
    } 
    else {
        document.getElementById('peopleError').innerHTML = '';
    }

    // If all validations pass, you can submit the form
    alert('Form submitted successfully!');
    return true;
}

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
}