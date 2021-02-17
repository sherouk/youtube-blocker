/* This selects all the items on the YouTube homepage
and deletes it */

// const content = document.getElementById("content");
// content.parentNode.removeChild(content);

const content = $('#content')
// const contentParent = content.Parent()
// $("#content").prependChild(img.src = '/background.jpg');
// $(`<img src = '${/background.jpg}'>`).prependTo(#'content')
$('#content').replaceWith("<p>Hello!</p>", "<img id='theImg' src = '/background.jpg'/>");
// content.remove()
