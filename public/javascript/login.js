async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            console.log(response)
            
            document.location.replace('/dashboard');
        } else {
            alert("Help!");
        }
    }
}


async function signupFormHandler(event) {
    // event.preventDefautl();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const language_id = document.querySelector('#languageFilter').value
    //const language_id = parseInt(language)
    //console.log(language_id)

    if (username && password && language_id) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password,
                language_id
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        //check response status
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert("Email and/or password incorrect!");
        }
    }

}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
