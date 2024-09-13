type Element = any;

interface IList {
  listSize: number;
  position: number;
}

class List implements IList {
  datastore: Element[] = [];
  pos: number = 0;

  constructor(...args: Element[]) {
    this.datastore.push(...args);
  }

  clear = () => {
    this.datastore = [];
  };

  length = () => {
    return this.datastore.length;
  };

  end = (): number => {
    this.pos = this.datastore.length - 1;
    return this.pos;
  };

  getElement = (): Element => {
    return this.datastore[this.pos];
  };

  append = (element: Element): Element[] => {
    this.datastore.push(element);
    return this.datastore;
  };

  addHigher = (item: Element) => {
    if (typeof item === "number") {
      if (
        [...this.datastore]
          .filter((e) => typeof e === "number")
          .concat(item)
          .sort()
          .pop() === item
      ) {
        this.append(item);
      }
    }

    if (typeof item === "string") {
      if (
        [...this.datastore]
          .filter((e) => typeof e === "string")
          .concat(item)
          .sort()
          .pop() === item
      ) {
        this.append(item);
      }
    }
  };

  addSmaller = (item: Element) => {
    if (typeof item === "number") {
      if (
        [...this.datastore]
          .filter((e) => typeof e === "number")
          .concat(item)
          .sort()
          .shift() === item
      ) {
        this.append(item);
      }
    }

    if (typeof item === "string") {
      if (
        [...this.datastore]
          .filter((e) => typeof e === "string")
          .concat(item)
          .sort()
          .shift() === item
      ) {
        this.append(item);
      }
    }
  };
}

export default List;
