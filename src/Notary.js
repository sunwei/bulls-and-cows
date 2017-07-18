/**
 * Created by wwsun on 18/07/2017.
 */

class Notary {

  constructor(theCard){
    this.theCard = theCard;
    this.answer = null;
  }

  judge(answer) {
    this.answer = answer;
    let sameNumberCount = this._countSameNumber();
    let samePositionCount = this._countSamePosition();

    return samePositionCount + 'A' + (sameNumberCount - samePositionCount) + 'B';
  }

  _countSameNumber() {
    var count = 0;
    for(var i = 0; i < this.answer.length; i++){
      if(-1 !== this.theCard.indexOf(this.answer[i])) {
        count++;
      }
    }

    return count;
  }

  _countSamePosition() {
    var count = 0;
    for(var i = 0; i < this.answer.length; i++){
      if(this.theCard[i] === this.answer[i]) {
        count++;
      }
    }

    return count;
  }

}

export default Notary;
