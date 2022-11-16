import Character from '../Character';
import Swordsman from '../Swordsman';

test.each([
  ['1'],
  ['12345678910'],
])(
  ('Should throw name length Error'), (name) => {
    const received = () => new Character(name);
    expect(received).toThrow(Error('Имя должено быть не менее 2 и не более 10 символов'));
  },
);

test('Should create Character and сorrect stats', () => {
  const received = new Character('John');
  const expected = { name: 'John', health: 100, level: 1 };

  expect(received).toEqual(expected);
});

test('Should throw levelUp Error', () => {
  const received = () => {
    const test = new Character('Test');
    test.health = 0;
    return test.levelUp();
  };
  expect(received).toThrow(Error('Нельзя повысить левел умершего'));
});

test('Should increase the level and characteristics', () => {
  const received = new Swordsman('John');
  received.health = 10;
  received.levelUp();
  const expected = {
    name: 'John', type: 'Swordsman', health: 100, level: 2, attack: 48, defence: 12,
  };
  expect(received).toEqual(expected);
});

test('Should throw damage Error', () => {
  const received = () => {
    const test = new Character('Test');
    test.health = 0;
    return test.damage(20);
  };
  expect(received).toThrow(Error('Нельзя атаковать мервтого персонажа'));
});

test('Should count and inflore damage', () => {
  const received = new Swordsman('John');
  received.damage(10);
  const expected = {
    name: 'John', type: 'Swordsman', health: 91, level: 1, attack: 40, defence: 10,
  };
  expect(received).toEqual(expected);
});
