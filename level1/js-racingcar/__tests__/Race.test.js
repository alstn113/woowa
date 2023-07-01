import Race from '../src/domains/Race';
import Car from '../src/domains/Car';
import { generateRandomNumber } from '../src/utils/Random.js';

jest.mock('../src/utils/Random.js');

const mockGenerateRandomNumber = (...arr) => {
  const tmp = [...arr];
  generateRandomNumber.mockImplementation((_min, _max) => {
    return tmp.shift();
  });
};

describe('Race 클래스', () => {
  let race;

  beforeEach(() => {
    // Race 클래스의 인스턴스를 생성하여 테스트에 사용할 자동차들을 전달
    const cars = [new Car('car1'), new Car('car2'), new Car('car3')];
    race = new Race(cars);
  });

  test('생성자에서 전달받은 자동차들을 정상적으로 설정해야 한다.', () => {
    const car1 = race.getCars()[0];
    expect(car1.getName()).toBe('car1');
    expect(car1.getPosition()).toBe(0);

    const car2 = race.getCars()[0];
    expect(car2.getName()).toBe('car1');
    expect(car2.getPosition()).toBe(0);

    const car3 = race.getCars()[0];
    expect(car3.getName()).toBe('car1');
    expect(car3.getPosition()).toBe(0);
  });

  test('progress 메소드가 정상적으로 동작해야 한다.', () => {
    mockGenerateRandomNumber(7, 3, 9);
    race.progress();
    const positions = race.getCars().map((car) => car.getPosition());
    expect(positions).toEqual([1, 0, 1]);
  });

  test('getWinners 메소드가 정상적으로 동작해야 한다.', () => {
    mockGenerateRandomNumber(7, 3, 9);
    race.progress();
    mockGenerateRandomNumber(3, 4, 6);
    race.progress();
    const positions = race.getCars().map((car) => car.getPosition());
    expect(positions).toEqual([1, 1, 2]);
    const winners = race.getWinners().map((car) => car.getName());
    expect(winners).toEqual(['car3']);
  });
});
