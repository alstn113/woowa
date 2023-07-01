import Car from '../src/domains/Car.js';

describe('Car', () => {
  test('Car 클래스가 정상적으로 생성되어야 한다.', () => {
    const car = new Car('pobi');
    expect(car).not.toBeNull();
  });

  test('Car 클래스의 name은 정상적으로 설정되어야 한다.', () => {
    const car = new Car('pobi');
    expect(car.getName()).toBe('pobi');
  });

  test('Car 클래스의 position은 정상적으로 설정되어야 한다.', () => {
    const car = new Car('pobi');
    expect(car.getPosition()).toBe(0);
  });

  test('Car 클래스의 move 메소드가 정상적으로 동작해야 한다.', () => {
    const car = new Car('pobi');
    car.move();
    expect(car.getPosition()).toBe(1);
    car.move();
    expect(car.getPosition()).toBe(2);
  });
});
