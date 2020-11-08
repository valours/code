import ListPersons, { Person } from './persons';
import faker from 'faker';

describe('Persons', () => {
  it('should return persons by gender', () => {
    // given
    const females: Person[] = [...new Array(5)].map(() => ({
      name: faker.name.firstName(),
      gender: 'FEMALE'
    }));
    const males: Person[] = [...new Array(5)].map(() => ({
      name: faker.name.firstName(),
      gender: 'MALE'
    }));
    const listPersons = new ListPersons([...females, ...males]);

    // when
    const femalesFiltered = listPersons.getPersonsByGender('FEMALE');

    // then
    expect(femalesFiltered.sort()).toEqual(females.sort());
  })
})