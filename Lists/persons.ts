export type Gender = "FEMALE" | "MALE" | "NON-BINARY";

export interface Person {
  name: string;
  gender: Gender;
}

const byGender = (gender: Gender) => (person: Person) =>
  person.gender === gender;

class ListPersons {
  datastore: Person[] = [];

  constructor(persons: Person[]) {
    this.datastore.push(...persons);
  }

  getPersonsByGender = (gender: Gender): Person[] =>
    this.datastore.filter(byGender(gender));
}

export default ListPersons;
