import Zombie from '../Zombie';

test('...', () => {
  const received = new Zombie('John');
  const expected = {
    name: 'John',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(received).toEqual(expected);
});
