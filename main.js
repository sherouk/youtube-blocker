/* This selects all the items on the YouTube homepage
and deletes it */

// const content = document.getElementById("content");
// content.parentNode.removeChild(content);

const content = $('#content')
/*function image() {
    // dynamically add an image and set its attribute
    const img = document.createElement('img')
    img.src = '/images/background.jpg'
    document.getElementById('content').appendChild('img')
}; */

// const contentParent = content.Parent()
// $("#content").prependChild(img.src = '/background.jpg');
// $(`<img src = '${/background.jpg}'>`).prependTo(#'content')
const img = 'https://images.unsplash.com/photo-1516914589923-f105f1535f88?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3900&q=80';
$('#content').html(`<img src='${img}'>`).prepend('<h1>Hello!</h1>');
// content.remove()
