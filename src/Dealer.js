/**
 * Created by wwsun on 18/07/2017.
 */
class Dealer {

  constructor() {
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