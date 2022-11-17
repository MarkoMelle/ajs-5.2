import Swordsman from '../Swordsman';

test('...', () => {
  const received = new Swordsman('John');
  const expected = {
    name: 'John',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(received).toEqual(expected);
});
