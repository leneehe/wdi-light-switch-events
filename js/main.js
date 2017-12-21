document.addEventListener('DOMContentLoaded', function() {

  var button = document.querySelector('button.switch'),
      background = document.querySelector('body'),
      status = document.querySelector('h1.status');

  button.addEventListener('click', function(e) {
    if (e.target.classList.contains('on')) {
      e.target.classList.remove('on');
      e.target.classList.add('off');
      background.className = 'dark';
      status.innerText = 'Hey, who turned off the lights?';
    } else {
      e.target.classList.remove('off');
      e.target.classList.add('on');
      background.className = 'light';
      status.innerText = "It's so bright in here!";
    }

  })

});
