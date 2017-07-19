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

  checkLives() {
    return 0 >= this.lives ? false : true;
  }

  play(answer) {

    this.lives--;
    let isCardValid = this.dealer.checkCard(answer);

    if(isCardValid){
      let tip = this.notary.judge(answer);
      if (CORRECT_ANSWER === tip) {
        this.end();

        return {
          status: 'congratulations',
          message: 'Bingo! You Won!',
          card: this.theCard
        }
      } else {

        if(this.checkLives()) {
          return {
            status: 'continue',
            message: 'Come on! We can made it!',
            lives: this.lives,
            tip: tip
          }
        } else {
          this.end();
          return {
            status: 'sorry',
            message: 'Game Over! You Loose!'
          }
        }
      }
    } else {
      if(this.checkLives()) {
        return {
          status: 'checkCardFail',
          message: 'Please input 4 different number string in range 1 - 9!',
          lives: this.lives,
        }
      } else {
        this.end();
        return {
          status: 'sorry',
          message: 'Game Over! You Loose!'
        }
      }
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