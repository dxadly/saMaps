$(document).ready(function(){
  $('#bigimg').attr("src", "assets/imgs/angelisland.png");

  $('#first').click(function(){
    $('#bigimg').attr("src", "assets/imgs/angelisland.png");
  });
    $('#second').click(function(){
    $('#bigimg').attr("src", "https://images.unsplash.com/photo-1565202787321-edd4ac2e0361?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80");
  });
  $('#third').click(function(){
    $('#bigimg').attr("src", "https://images.unsplash.com/photo-1565197239446-a89a684c2651?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80");
  });

  $('#close').click(function(){
    $('.frame').hide();
  });

  $('.frame').dragabble();
});

const linkTxt = carousel.children[indexC].userData.file;
const index = store.models.findIndex((m) => m.file === linkTxt);

txtEl.innerHTML = `<a href="./singleModel.html?active=${index}" target="_blank">${linkTxt}</a>`
