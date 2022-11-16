export default class Character {
  constructor(name) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Имя должено быть не менее 2 и не более 10 символов');
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.health = 100;
      this.attack *= 1.2;
      this.defence *= 1.2;
    } else {
      throw Error('Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw Error('Нельзя атаковать мервтого персонажа');
    }
  }
}
