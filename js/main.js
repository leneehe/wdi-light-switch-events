document.addEventListener('DOMContentLoaded', function() {

  var button = document.querySelector('button.switch');

  button.addEventListener('click', function(e) {
    if (e.target.classList.contains('on')) {
      e.target.classList.remove('on');
      e.target.classList.add('off');
    } else {
      e.target.classList.remove('off');
      e.target.classList.add('on');
    }

  })

});
