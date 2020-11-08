export type Word = string;

const isEmpty = (array: any[]) => array.length === 0;

const wordListIsEmptyError = 'The word list is empty';
const indexOfFirstWord = 0;

class Words {
  private index: number = -1;
  private words: Word[] = [];

  constructor(words: Word[] = []) {
    this.words = words;
    if (!isEmpty(this.words)) {
      this.index = indexOfFirstWord;
    }
  }

  pushWord = (word: Word): Word[] => {
    this.words.push(word);

    return this.words
  }

  getWords = (): Word[] => {
    return this.words;
  }

  getCurrent = (): Word => {
    return this.words[this.index];
  }

  incrementIndex = (): number => {
    if (this.index === this.words.length - 1) {
      this.index = indexOfFirstWord;
    } else {
      this.index = this.index + 1;
    }
    return this.index;
  }

  forward = (): Word => {
    if (isEmpty(this.words)) {
      throw Error(wordListIsEmptyError);
    }

    this.incrementIndex();

    return this.words[this.index];
  }

  backward = (): Word => {
    if (isEmpty(this.words)) {
      throw Error(wordListIsEmptyError);
    }

    if (this.index === 0) {
      this.index = this.words.length - 1;
    }

    return this.words[this.index];
  }

};

export default Words;