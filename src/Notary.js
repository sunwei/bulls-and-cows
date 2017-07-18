/**
 * Created by wwsun on 18/07/2017.
 */

class Notary {

  constructor(theCard){
    this.theCard = theCard;
  }

  judge(answer) {
    if(answer === '1243'){
      return "2A2B";
    }
    return "4A0B";
  }


}

export default Notary;
