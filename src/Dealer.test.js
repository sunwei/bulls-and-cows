/**
 * Created by wwsun on 18/07/2017.
 */
import Dealer from './Dealer';

const dealer = new Dealer();
const theCard = dealer.showTheCard();

it('given_theCard_when_showTheCard_then_length_4', () => {
  expect(theCard.length).toEqual(4);
});

it('given_theCard_when_showTheCard_then_range_1-9', () => {
  var numberInRangeCount = 0;
  for(var i = 0; i < theCard.length; i++){
    if (0 < parseInt(theCard[i]) < 10) {
      numberInRangeCount++;
    }
  }
  expect(numberInRangeCount).toEqual(4);
});

it('given_theCard_when_showTheCard_then_number_different', () => {
  var sameNumberFound = false;
  let theCardLength = theCard.length;
  for(var i = 0; i < theCardLength - 1; i++){
    let restStr = theCard.substring(i + 1, theCardLength);
    if (-1 !== restStr.indexOf(theCard[i])) {
      sameNumberFound = true;
      break;
    }
  }

  expect(sameNumberFound).toEqual(false);
});

