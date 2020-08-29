async function signupFormHandler(event) {
    event.preventDefautl();
    //const id = document.querySelector('#id-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    //const tag = document.querySelector('#tag-signup').value.trim();

    if (username && email) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                //id,
                username,
                email
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        //check response status
        if (response.ok) {
            console.log('success');
        } else {
            alert(response.statusText);
        }
    }

}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
