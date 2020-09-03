async function deleteFormHandler(event) {
    event.preventDefault();

    await fetch('api/posts/${id}', {
        method: 'DELETE'
    });
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);