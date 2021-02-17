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
const img = 'images/background.jpg';
$('#content').html(`<img src='${img}'>`).prepend('<h1>Hello!</h1>');
// content.remove()
