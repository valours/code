export class MyNode {
  parent: MyNode | undefined;
  data;
  left;
  right;

  constructor(data: any, left?: MyNode, right?: MyNode) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  show = () => {
    return this.data;
  }
}

// tslint:disable-next-line: max-classes-per-file
class BTS {
  root: undefined | MyNode;

  getRoot = (): MyNode => {
    if (!this.root) {
      throw Error('no root');
    }
    return this.root;
  }

  inOrder = (node?: MyNode, nodes?: MyNode[]): MyNode[] => {
    if (!this.root) {
      throw Error();
    }

    if (!node) {
      return this.inOrder(this.root, []);
    } else {
      const result: MyNode[] = []
      if (node.left) {
        result.push(...this.inOrder(node.left, nodes))
      }
      if (node) {
        result.push(node.data)
      }
      if (node.right) {
        result.push(...this.inOrder(node.right, nodes))
      }
      return result;
    }
  };

  preOrder = (node?: MyNode, nodes?: MyNode[]): MyNode[] => {
    if (!this.root) {
      throw Error();
    }
    if (!node) {
      return this.preOrder(this.root, []);
    } else {
      const result: MyNode[] = []
      if (node) {
        result.push(node.data)
      }
      if (node.left) {
        result.push(...this.preOrder(node.left, nodes))
      }
      if (node.right) {
        result.push(...this.preOrder(node.right, nodes))
      }
      return result;
    }
  };

  postOrder = (node?: MyNode, nodes?: MyNode[]): MyNode[] => {
    if (!this.root) {
      throw Error();
    }
    if (!node) {
      return this.postOrder(this.root, []);
    } else {
      const result: MyNode[] = []
      if (node.left) {
        result.push(...this.postOrder(node.left, nodes))
      }
      if (node.right) {
        result.push(...this.postOrder(node.right, nodes))
      }
      if (node) {
        result.push(node.data)
      }
      return result;
    }
  };

  showInOrder = (): string => {
    return this.inOrder().join(' ');
  }

  showPreOrder = (): string => {
    return this.preOrder().join(' ');
  }

  showPostOrder = (): string => {
    return this.postOrder().join(' ');
  }

  insert = (data: any) => {
    const node = new MyNode(data);

    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;

      while (true) {
        if (data < current.data) {
          if (!current.left) {
            current.left = node;
            break
          }
          current = current.left;
        } else if (data > current.data) {
          if (!current.right) {
            current.right = node;
            break
          }
          current = current.right;
        }
      }
    }
  }
}

export default BTS;

