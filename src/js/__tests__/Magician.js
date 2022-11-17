import Magician from '../Magician';

test('...', () => {
  const received = new Magician('John');
  const expected = {
    name: 'John',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(received).toEqual(expected);
});
