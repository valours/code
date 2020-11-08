export type Gender = 'FEMALE' | 'MALE' | 'NON-BINARY';

export interface Person {
  name: string;
  gender: Gender;
}

class ListPersons {
  datastore: Person[] = [];

  constructor(persons: Person[]) {
    this.datastore.push(...persons);
  }

  getPersonsByGender = (gender: Gender): Person[] => {
    return this.datastore.filter(p => p.gender === gender);
  }
}

export default ListPersons;