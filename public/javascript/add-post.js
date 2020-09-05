
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
// ROCHELLE'S NOTE FOR DROPDOWNS
//$(".dropdown-menu li a").click(function() {
    //$(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    //$(this).parents(".dropdown").find('.btn').val($(this).data('value'));
//});

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);