import Bowman from '../Bowman';

test('...', () => {
  const received = new Bowman('John');
  const expected = {
    name: 'John',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(received).toEqual(expected);
});
