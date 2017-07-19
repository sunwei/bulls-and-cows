import React, { Component } from 'react';
import './App.css';
import GameCenter from './GameCenter'

const randomReply = replies => replies[Math.floor(Math.random() * replies.length)];

const makeUserBubble = el => {
  el.parentNode.parentNode.classList.add('selected');
  el.parentNode.parentNode.classList.remove('active');
  el.parentNode.innerHTML = el.textContent;
};

let structure = {
  'menu': [
    {
      'title': 'Start',
      'id': 'projects',
    },
    {
      'title': 'End',
      'id': 'writing',
    }
  ]
};

class App extends Component {

  constructor(){
    super();
    this.chat = null;
    this.content = null;
    this.userInput = null;
    // this.idle = null;
    // this.idletime = 45000;
    this.gameCenter = new GameCenter();

    this.state = {
      userInputHidden: true
    }
  }

  componentDidMount() {
    this.chat = document.querySelector('.chat');
    this.content = document.querySelector('.content');
    this.userInput = document.querySelector('#user-answer');

    this._init();
    this._addEventListener();
  }

  oneMoreTime() {
    this.newMessage('One more time!', 'bot');
    this.showMenu();
  }

  answerEntered(answer){
    this.newMessage(answer, 'user', 'user-answer');
    let response = this.gameCenter.play(answer);
    if ('continue' === response.status) {
      this.newMessage(response.lives + ' chances left. ' + '<br/> tips: ' + response.tip, 'bot');
    } else if ('sorry' === response.status) {
      this.newMessage(response.message, 'bot');
      this.oneMoreTime();
    } else if ('congratulations' === response.status) {
      this.newMessage(response.message, 'bot');
      this.oneMoreTime();
    } else {
      this.newMessage(response.lives + ' chances left. ' + '<br/> ' + response.message, 'bot');
    }

  }

  newMessage(message, type = 'user', action) {
    let bubble = document.createElement('section'),
      slideIn = (el, i) => {
        setTimeout(() => {
          el.classList.add('show');
        }, i * 150 ? i * 150 : 10);
      },
      scroll,
      scrollDown = () => {
        this.chat.scrollTop += Math.floor(bubble.offsetHeight / 18);
      };
    bubble.classList.add('message');
    bubble.classList.add(type);
    bubble.innerHTML = `<p>${message}</p>`;
    this.chat.appendChild(bubble);

    scroll = window.setInterval(scrollDown, 16);
    setTimeout(() => {
      window.clearInterval(scroll);
      this.chat.scrollTop = this.chat.scrollHeight;
    }, 300);

    setTimeout(() => {
      bubble.classList.add('show');
    }, 10);

    if (type === 'user') {
      let animate = this.chat.querySelectorAll('button:not(:disabled)');
      for (let i = 0; i < animate.length; i += 1) {
        slideIn(animate[i], i);
      }
      bubble.classList.add('active');
    }

    if (action === 'user-answer') {
      bubble.classList.add('selected');
    }

  };

  checkUp() {
    let lastMessage = document.querySelector('.active'),
      idleReplies = [
        'Did you fall asleep? &#x1F634;',
        'Coffee break? &#x2615;',
        'Still there?',
        '&#x2744; &#x1F331; &#x1F31E; &#x1F342;'
      ];
    if (lastMessage) {
      lastMessage.parentNode.removeChild(lastMessage);
    }
    this.newMessage(randomReply(idleReplies), 'bot');
    setTimeout(() => {
      let helpReplies = [
        'Don\'t like it? Send an email to <a href="mailto:wayde.sun@gmail.com">wayde.sun@gmail.com</a> if you want a real one. &#x1F680;',
        'Not fun? Send an email to <a href="wayde.sun@gmail.com">wayde.sun@gmail.com</a> with any questions...',
      ];
      this.newMessage(randomReply(helpReplies), 'bot');
      setTimeout(() => {
        let menuAgainReplies = [
            'Show me the options again please &#x2705;',
            'Ok, go! &#x1F697;',
          ];
        this.newMessage(`<br /><button class="choice newmenu showmenu">${randomReply(menuAgainReplies)}</button>`);
      }, 300);
    }, 500);
  };

  _init() {
    let welcomeReplies = [
      'Hello! &#x1F44B; I\'m Wayde, this is the playground for xAxB game. Have Fun!'
    ];

    // this.idle = window.setInterval(() => {
    //   window.clearInterval(this.idle);
    //   this.checkUp();
    // }, this.idletime);

    this.newMessage(randomReply(welcomeReplies), 'bot');
    this.showMenu();
  };

  _addEventListener() {
    document.addEventListener('click', e => {
      if (e.target.classList.contains('choice')) {
        window.clearInterval(this.idle);
        if (!e.target.classList.contains('submenu')) {
          makeUserBubble(e.target);
        }

        if (e.target.classList.contains('menu')) {
          this.menuClick(e.target);
        }

        if (e.target.classList.contains('showmenu')) {
          this.showMenu(true);
        }

        if (e.target.classList.contains('showinfo')) {
          let okReplies = [
              'OK &#x1F60E;',
              'How do I get back? &#x1F312;',
              'Ok, thanks! &#x1F44C;'
            ];

          setTimeout(() => {
            setTimeout(() => {
              this.newMessage(`<button class="choice newmenu showmenu">${randomReply(okReplies)}</button>`);
            }, 300);
          }, 500);
        }
      }

    });

    document.addEventListener('keydown', e => {
      if (e.keyCode === 13) {
        this.answerEntered(this.userInput.value);
        this.userInput.value = null;
        this.userInput.blur();
      }
    });
  };

  showMenu() {
    let menu = '';
    setTimeout(() => {
      structure.menu.forEach((val, index) => {
        menu += `<button class="choice menu" data-submenu="${index}">${val.title}</button>`;
      });
      setTimeout(() => {
        this.newMessage(menu);
      }, 300);
    }, 500);

    // this.idle = window.setInterval(() => {
    //   window.clearInterval(this.idle);
    //   this.checkUp();
    // }, this.idletime);
  };

  menuClick(clicked) {
    let menuChoice = structure.menu[clicked.getAttribute('data-submenu')],
      startReplies = [
        '&#x1F44D; Let\'s play...',
      ],
      endReplies = [
        'Not interesting? &#x1F648;',
      ];

    if(menuChoice.title === 'Start'){
      setTimeout(() => {
        this.newMessage(randomReply(startReplies), 'bot');
        this.setState({
          userInputHidden: false
        });
        this.gameCenter.start();
      }, 500);
    } else {
      setTimeout(() => {
        this.newMessage(randomReply(endReplies), 'bot');
      }, 500);
    }


  };

  render() {
    return (
      <div className="container">
        <article className="chat" role="log" aria-live="polite" aria-atomic="false">
          <noscript>
            <section className="message bot show"><p>I'm sorry, but you need JavaScript turned on for this website to function.</p></section>
          </noscript>
        </article>
        <div className="content" role="document" aria-hidden="true" aria-label="Information">
          <button className="close" aria-label="Close">&times;</button>
        </div>
        <div>
          <div className="user-input">
            <input type="text" name="user-answer" id="user-answer" placeholder="Let me guess..." className={this.state.userInputHidden ? 'hidden' : ''}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
