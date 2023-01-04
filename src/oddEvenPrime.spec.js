import { game } from "./oddEvenPrime";

describe('Odd Even Prime code kata', () => {
  test('Should return an array with the length of the specified range', () => {
    //ARRANGE
    const ini = 1;
    const end = 100;

    const result = 100;
    //ACT
    const resp = game(ini, end);
    //ASSERT
    expect(resp.length).toEqual(result);
  });

  test('Should return "odd" if it is an odd number', () => {
    //ARRANGE
    const ini = 20;
    const end = 28;

    const foreseen = ['20', 'odd', '22', '23', '24', 'odd', '26', 'odd', '27'];
    //ACT
    const resp = game(ini, end);
    //ASSERT
    expect(resp[1]).toEqual(foreseen[1]);
    expect(resp[5]).toEqual(foreseen[5]);
    expect(resp[7]).toEqual(foreseen[7]);
  });

  test('Should return "even" if it is an even number', () => {
    //ARRANGE
    const ini = 20;
    const end = 28;

    const foreseen = ['even', 'odd', 'even', '23', 'even', 'odd', 'even', 'odd', 'even'];
    //ACT
    const resp = game(ini, end);
    //ASSERT
    expect(resp[0]).toEqual(foreseen[0]);
    expect(resp[2]).toEqual(foreseen[2]);
    expect(resp[4]).toEqual(foreseen[4]);
    expect(resp[6]).toEqual(foreseen[6]);
    expect(resp[8]).toEqual(foreseen[8]);
  });

  test('Should return the number as string if it is prime', () => {
    //ARRANGE
    const ini = 20;
    const end = 28;

    const foreseen = ['even', 'odd', 'even', '23', 'even', 'odd', 'even', 'odd', 'even'];
    //ACT
    const resp = game(ini, end);
    //ASSERT
    expect(resp).toEqual(foreseen);

  });
});
