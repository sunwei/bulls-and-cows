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
    var result = "";

    if(this.answer === this.theCard){
      result = "4A0B";
    } else if (this._isUpsideDown()){
      result = "0A4B";
    } else if (false == this._hasSameNumber() && false == this._hasSamePosition()) {
      result = "0A0B";
    }

    return result;
  }

  _hasSameNumber() {
    var found = false;
    for(var i = 0; i < this.answer.length; i++){
      if(-1 !== this.theCard.indexOf(this.answer[i])) {
        found = true;
        break;
      }
    }

    return found;
  }

  _hasSamePosition() {
    var found = false;
    for(var i = 0; i < this.answer.length; i++){
      if(this.theCard[i] === this.answer[i]) {
        found = true;
        break;
      }
    }

    return found;
  }

  _isUpsideDown() {
    return this.answer[0] === this.theCard[3] &&
      this.answer[1] === this.theCard[2] &&
      this.answer[2] === this.theCard[1] &&
      this.answer[3] === this.theCard[0]
  }


}

export default Notary;
