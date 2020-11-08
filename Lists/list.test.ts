import faker from 'faker';
import List from './list';

describe('Lists', () => {
  it('should insert element into a list', () => {
    // given
    const list = new List();
    const element = faker.random.arrayElement([
      faker.random.number,
      faker.lorem.word]
    )();

    // when
    list.addHigher(element);

    // then
    list.end();
    expect(list.getElement()).toEqual(element)
  })

  describe('add if higher', () => {
    it('should insert element into a list only if it\s larger than any of elements with same type', () => {
      // given
      const list = new List(1, 2);
      const element = 3;

      // when
      list.addHigher(element);

      // then
      list.end();
      expect(list.getElement()).toEqual(element);
      expect(list.length()).toEqual(3);
    })

    it('should not insert element into a list only if it\s smaller than any of elements with same type', () => {
      // given
      const list = new List(2, 3);
      const element = 1;

      // when
      list.addHigher(element);

      // then
      expect(list.length()).toEqual(2);
    })

    it('should insert string element into a number list', () => {
      // given
      const list = new List(2, 3);
      const element = faker.lorem.word();

      // when
      list.addHigher(element);

      // then
      list.end()
      expect(list.getElement()).toEqual(element);
      expect(list.length()).toEqual(3);
    })
  })

  describe('add if smaller', () => {
    it('should insert element into a list only if it\s larger than any of elements with same type', () => {
      // given
      const list = new List(1, 2);
      const element = 3;

      // when
      list.addSmaller(element);

      // then
      list.end();
      expect(list.getElement()).toEqual(2);
      expect(list.length()).toEqual(2);
    })

    it('should not insert element into a list only if it\s smaller than any of elements with same type', () => {
      // given
      const list = new List(2, 3);
      const element = 1;

      // when
      list.addSmaller(element);

      // then
      list.end()
      expect(list.getElement()).toEqual(element);
      expect(list.length()).toEqual(3);
    })
  })
})