import Daemon from '../Daemon';

test('...', () => {
  const received = new Daemon('John');
  const expected = {
    name: 'John',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(received).toEqual(expected);
});
