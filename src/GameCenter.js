/**
 * Created by wwsun on 18/07/2017.
 */
import Notary from './Notary'
import Dealer from './Dealer'

let DEFAULT_LIVES = 6;
let CORRECT_ANSWER = '4A0B';

class GameCenter {

  constructor() {
    this.lives = 0;
    this.dealer = new Dealer();
    this.theCard = null;
    this.notary = null;
  }

  start() {
    this._restore();
    this.notary = new Notary(this.theCard);
  }

  play(answer) {
    let tip = this.notary.judge(answer);
    if (CORRECT_ANSWER === tip) {
      this.end();

      return {
        status: 'congratulations',
        message: 'Bingo! You Won!',
        card: this.c
      }
    }

    this.lives--;
    if(0 >= this.lives) {
      this.end();

      return {
        status: 'sorry',
        message: 'Game Over! You Loose!'
      }
    }

    return {
      status: 'continue',
      message: 'Come on! We can made it!',
      lives: this.lives,
      tip: tip
    }

  }

  end() {
    this.lives = -1;
    this.theCard = null;
    this.notary = null;
  }

  _restore() {
    this.lives = DEFAULT_LIVES;
    this.theCard = this.dealer.showTheCard();
    console.log('===========');
    console.log(this.theCard);
  }

}

export default GameCenter;