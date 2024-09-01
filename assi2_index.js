document.addEventListener("DOMContentLoaded", function () {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^(?:\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4})$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    function validateEmail(email) {
        return emailPattern.test(email);
    }

    function validatePhone(phone) {
        return phonePattern.test(phone);
    }

    function validatePassword(password) {
        return passwordPattern.test(password);
    }

    function getPasswordStrength(password) {
        let strength = 'poor';
        const length = password.length;
        if (length >= 8) {
            if (/[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)) {
                strength = 'strong';
            } else if (/[A-Z]/.test(password) || /[a-z]/.test(password)) {
                strength = 'medium';
            }
        }
        return strength;
    }

    function handleSignUp(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;

        let valid = true;

        if (!validateEmail(email)) {
            document.getElementById('emailError').textContent = 'Invalid email address.';
            valid = false;
        } else {
            document.getElementById('emailError').textContent = '';
        }

        if (!validatePhone(phone)) {
            document.getElementById('phoneError').textContent = 'Invalid phone number. Should be 10 digits or in XXX-XXX-XXXX format.';
            valid = false;
        } else {
            document.getElementById('phoneError').textContent = '';
        }

        if (!validatePassword(password)) {
            document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, and one number.';
            valid = false;
        } else {
            document.getElementById('passwordError').textContent = '';
        }

        const strength = getPasswordStrength(password);
        document.getElementById('passwordStrength').textContent = `Strength: ${strength}`;
        document.getElementById('passwordStrength').className = `strength ${strength}`;

        if (valid) {
            alert('Sign Up successful!');
        }
    }

    function handleLogin(event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        let valid = true;

        if (!validateEmail(email)) {
            document.getElementById('loginEmailError').textContent = 'Invalid email address.';
            valid = false;
        } else {
            document.getElementById('loginEmailError').textContent = '';
        }

        if (!validatePassword(password)) {
            document.getElementById('loginPasswordError').textContent = 'Invalid password.';
            valid = false;
        } else {
            document.getElementById('loginPasswordError').textContent = '';
        }

        if (valid) {
            alert('Login successful!');
        }
    }

    document.getElementById('signupForm').addEventListener('submit', handleSignUp);
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
});
