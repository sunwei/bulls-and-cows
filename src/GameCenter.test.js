/**
 * Created by wwsun on 18/07/2017.
 */
import GameCenter from './GameCenter';
import Notary from './Notary'

const gameCenter = new GameCenter();
const mockCard = '9867';

it('given_right_answer_when_play_then_congratulation', () => {

  gameCenter.start();
  gameCenter.notary = new Notary(mockCard);
  let result = gameCenter.play('9867');

  expect(result.status).toEqual('congratulations');
});

it('run_out_of_lives_when_play_then_sorry', () => {

  gameCenter.start();
  gameCenter.notary = new Notary(mockCard);
  gameCenter.play('1234');
  gameCenter.play('1234');
  gameCenter.play('1234');
  gameCenter.play('1234');
  gameCenter.play('1234');
  let result = gameCenter.play('1234');

  expect(result.status).toEqual('sorry');
});

it('lives_left_when_play_then_continue', () => {

  gameCenter.start();
  gameCenter.notary = new Notary(mockCard);
  gameCenter.play('1234');
  let result = gameCenter.play('1234');

  expect(result.status).toEqual('continue');
  expect(result.lives).toEqual(4);
});


