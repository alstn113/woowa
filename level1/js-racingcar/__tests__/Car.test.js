import Car from '../src/domains/Car.js';
import { generateRandomNumber } from '../src/utils/Random.js';

jest.mock('../src/utils/Random.js');

const mockGenerateRandomNumber = (returnValue) => {
  generateRandomNumber.mockImplementation((min, max) => {
    return returnValue;
  });
};

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
    mockGenerateRandomNumber(7); // 4이상이면 전진
    car.move();
    expect(car.getPosition()).toBe(1);
    mockGenerateRandomNumber(2); // 3이하이면 멈춤
    expect(car.getPosition()).toBe(1);
  });
});
