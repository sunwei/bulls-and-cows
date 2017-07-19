/**
 * Created by wwsun on 18/07/2017.
 */
class Dealer {

  constructor() {
  }

  _isNumberInRange(theCard) {
    var numberInRangeCount = 0;
    for(var i = 0; i < theCard.length; i++){
      if (0 < parseInt(theCard[i]) < 10) {
        numberInRangeCount++;
      }
    }

    return 4 === numberInRangeCount;
  }

  _isSameNumberFound(theCard) {
    var sameNumberFound = false;
    let theCardLength = theCard.length;
    for(var i = 0; i < theCardLength - 1; i++){
      let restStr = theCard.substring(i + 1, theCardLength);
      if (-1 !== restStr.indexOf(theCard[i])) {
        sameNumberFound = true;
        break;
      }
    }

    return sameNumberFound;
  }

  checkCard(theCard){
    var isValid = true;

    if(!theCard || theCard.length !== 4){
      isValid = false;
    } else {
      isValid = this._isNumberInRange(theCard) && !this._isSameNumberFound(theCard);
    }

    return isValid;
  }

  showTheCard() {
    var sourceArr = ['1','2','3','4','5','6','7','8','9'];
    var randomStr = '';


    var timesToRunCount = 4;
    while (timesToRunCount > 0) {
      timesToRunCount--;

      let randomChar = sourceArr[Math.floor(Math.random() * sourceArr.length)];
      randomStr += randomChar;

      let randomCharIndex = sourceArr.indexOf(randomChar);
      sourceArr.splice(randomCharIndex, 1);
    }

    return randomStr;
  }

}

export default Dealer;