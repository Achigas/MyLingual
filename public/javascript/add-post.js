
async function newFormHandler(event) {
    event.preventDefault();
 
    const title = document.querySelector("#post-title").value.trim();
    const post_url = document.querySelector('input[name="post-url"]').value.trim();
    const post = document.querySelector('textarea[name="post"]').value.trim();

    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title:title, 
            post_url:post_url,
            post: post
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('dashboard');
    } else {
        alert("Please add a post!");
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);