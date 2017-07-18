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

it('given_5678_when_judge_then_0A0B', () => {

  let result = notary.judge('5678');
  expect(result).toEqual('0A0B');

});

it('given_1243_when_judge_then_2A2B', () => {

  let result = notary.judge('1243');
  expect(result).toEqual('2A2B');

});

it('given_1256_when_judge_then_2A0B', () => {

  let result = notary.judge('1256');
  expect(result).toEqual('2A0B');

});

it('given_2156_when_judge_then_0A2B', () => {

  let result = notary.judge('2156');
  expect(result).toEqual('0A2B');

});
