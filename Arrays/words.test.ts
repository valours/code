import faker from 'faker';
import Words from './words';

describe('Words', () => {
  it('should return the first word by default', () => {
    // given
    const firstWord = faker.lorem.word();
    const secondWord = faker.lorem.word();
    const words = new Words([firstWord, secondWord]);

    // when
    const currentWord = words.getCurrent();

    // then
    expect(currentWord).toEqual(firstWord);
  })

  it('should return the second word when forward method is call', () => {
    // given
    const firstWord = faker.lorem.word();
    const secondWord = faker.lorem.word();
    const words = new Words([firstWord, secondWord]);

    // when
    const currentWord = words.forward();

    // then
    expect(currentWord).toEqual(secondWord);
  })

  it('should return the first word when forward method is call from last word', () => {
    // given
    const firstWord = faker.lorem.word();
    const secondWord = faker.lorem.word();
    const words = new Words([firstWord, secondWord]);

    // when
    words.forward();
    const currentWord = words.forward();

    // then
    expect(currentWord).toEqual(firstWord);
  })

  it('should return the last word when backward method is call from first word', () => {
    // given
    const firstWord = faker.lorem.word();
    const secondWord = faker.lorem.word();
    const words = new Words([firstWord, secondWord]);

    // when
    const currentWord = words.backward();

    // then
    expect(currentWord).toEqual(secondWord);
  })
});
