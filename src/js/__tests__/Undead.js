import Undead from '../Undead';

test('...', () => {
  const received = new Undead('John');
  const expected = {
    name: 'John',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(received).toEqual(expected);
});
