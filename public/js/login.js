const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#loginEmail').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();


    if (email && password) {
        //Nicole: Testing out /seeds/userData. Result: 404 error, leaving it an empty '' for now
        const response = await fetch('/api/users/login', {
            method: 'POST',
            // body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText)
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#signupName').value.trim();
    const email = document.querySelector('#signupEmail').value.trim();
    const password = document.querySelector('#signupPassword').value.trim();

    if (name && email && password) {
        const response = await fetch('./seeds', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('#loginForm')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('#signupForm')
    .addEventListener('submit', signupFormHandler);