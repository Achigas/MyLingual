async function signupFormHandler(event) {
    event.preventDefautl();
    //const id = document.querySelector('#id-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector()
    //const email = document.querySelector('#email-signup').value.trim();

// function langDropDown() {
//     document.getElementById("langDropdown").classList.toggle("show");
// }

// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i=0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains ('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }
    //const tag = document.querySelector('#tag-signup').value.trim();

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                //id,
                username,
                password
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

//redirect to dashbaord 
// document.location.replace('/dashboard')


document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
