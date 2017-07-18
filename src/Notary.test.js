/**
 * Created by wwsun on 18/07/2017.
 */

import Notary from './Notary';

const notary = new Notary('1234');

it('given_1234_when_judge_then_4A0B', () => {

  let result = notary.judge('1234');
  expect(result).toEqual('4A0B');

});

it('given_1243_when_judge_then_2A2B', () => {

  let result = notary.judge('1243');
  expect(result).toEqual('2A2B');

});
