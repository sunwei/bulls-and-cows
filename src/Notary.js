/**
 * Created by wwsun on 18/07/2017.
 */

class Notary {

  constructor(theCard){
    this.theCard = theCard;
  }

  judge(answer) {
    var result = "";

    if(answer === this.theCard){
      result = "4A0B";
    } else if (this._isUpsideDown(answer)){
      result = "0A4B";
    }

    return result;
  }

  _isUpsideDown(answer) {
    return answer[0] === this.theCard[3] &&
      answer[1] === this.theCard[2] &&
      answer[2] === this.theCard[1] &&
      answer[3] === this.theCard[0]
  }


}

export default Notary;
