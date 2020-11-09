import BTS from "./BinaryTrees"
import faker from 'faker';

describe('Binary trees search', () => {
  it('should return the root', () => {
    // given
    const bts = new BTS();
    const value = faker.random.number();

    // when
    bts.insert(value)

    // then
    expect(bts.getRoot().show()).toEqual(value);
  })

  it('should add lower value to left of root', () => {
    // given
    const bts = new BTS();
    const value = faker.random.number();
    const valueLower = value - faker.random.number();

    // when
    bts.insert(value)
    bts.insert(valueLower);

    // then
    const rootNode = bts.getRoot();
    expect(rootNode.show()).toEqual(value);
    if (rootNode.left) {
      expect(rootNode.left.data).toEqual(valueLower);
    } else {
      throw new Error();
    }
  })

  it('should add lower value to right of root', () => {
    // given
    const bts = new BTS();
    const value = faker.random.number();
    const valueHigher = value + faker.random.number();

    // when
    bts.insert(value)
    bts.insert(valueHigher);

    // then
    const rootNode = bts.getRoot();
    expect(rootNode.show()).toEqual(value);
    if (rootNode.right) {
      expect(rootNode.right.data).toEqual(valueHigher);
    } else {
      throw new Error();
    }
  })

  describe('Traversing a binary search tree', () => {
    it('should return values for in order traversal function (10-2)', () => {
      // given
      const bts = new BTS();

      // when
      bts.insert(23);
      bts.insert(45);
      bts.insert(16);
      bts.insert(37);
      bts.insert(3);
      bts.insert(99);
      bts.insert(22);

      // then
      expect(bts.showInOrder()).toEqual('3 16 22 23 37 45 99');
    })

    it('should return values for pre order traversal function (10-5)', () => {
      // given
      const bts = new BTS();

      // when
      bts.insert(23);
      bts.insert(45);
      bts.insert(16);
      bts.insert(37);
      bts.insert(3);
      bts.insert(99);
      bts.insert(22);

      // then
      expect(bts.showPreOrder()).toEqual('23 16 3 22 45 37 99');
    })

    it('should return values for post order traversal function (10-5)', () => {
      // given
      const bts = new BTS();

      // when
      bts.insert(23);
      bts.insert(45);
      bts.insert(16);
      bts.insert(37);
      bts.insert(3);
      bts.insert(99);
      bts.insert(22);

      // then
      expect(bts.showPostOrder()).toEqual('3 22 16 37 99 45 23');
    })
  })
})