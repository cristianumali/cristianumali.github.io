$(document).ready(function () {
  let init = () => {
    initDarkModeWidget();
    initComposerTyping();
  }
  
  let initDarkModeWidget = () => {
    const options = {
      time: '0.5s', // default: '0.3s'
      mixColor: '#fff', // default: '#fff'
      backgroundColor: '#fff',  // default: '#fff'
      buttonColorDark: '#100f2c',  // default: '#100f2c'
      buttonColorLight: '#fff', // default: '#fff'
      saveInCookies: false, // default: true,
      label: '🌓', // default: ''
      autoMatchOsTheme: true // default: true
    }
    
    const darkMode = new Darkmode(options);
    darkMode.showWidget()
  }
  
  let initTypingAction = () => {
    let options = {
      strings: ['Web Developer', 'Full Stack Engineer'],
      typeSpeed: 40,
      smartBackspace: true,
      startDelay: 100,
      backSpeed: 50,
      loop: true
    };
  
    new Typed('.type-field', options);
  }
  
  let initComposerTyping = () => {
    new Typed('.install-animate', {
      strings: ['$ ^500 npm install^1000 `<br>installing components ...` ^1000\n `<br>Fetching from source ...` ^500'],
      typeSpeed: 40,
      backSpeed: 0,
      onComplete: () => {
        $('.intro').addClass('hidden');
        $('.main-text').css({
          'visibility': 'visible',
          'opacity': 1
        });
        initTypingAction();
      }
    });
  
  }

  init();
})