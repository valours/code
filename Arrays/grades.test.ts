import Grades from './grades';

describe('Grades', () => {
  it('should add a note in student\'s grades', () => {
    // given
    const grades = new Grades();
    const grade = 8;

    // when
    grades.addGrade(grade);

    // then
    expect(grades.getGrades()).toEqual([grade]);
  });

  it('should remove a note in student\'s grades', () => {
    // given
    const grades = new Grades([3,4]);

    // when
    grades.removeLastGrade();

    // then
    expect(grades.getGrades()).toEqual([3]);
  });
});
