/**
 * Created by wwsun on 18/07/2017.
 */

import Notary from './Notary';

const notary = new Notary('1234');

it('given_1234_when_judge_then_4A0B', () => {

  let result = notary.judge('1234');
  expect(result).toEqual('4A0B');

});

it('given_4321_when_judge_then_0A4B', () => {

  let result = notary.judge('4321');
  expect(result).toEqual('0A4B');

});

