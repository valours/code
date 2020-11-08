export type Grade = number;

class Grades {
  private grades: Grade[] = [];

  constructor(grades?: Grade[]) {
    if(grades) {
      this.grades = grades;
    }
  }

  getAverage = (): Grade => {
    return 12;
  }

  addGrade = (grade: Grade): Grade[] => {
    this.grades.push(grade);
    return this.grades;
  }

  removeLastGrade = (): Grade[] => {
    this.grades.pop();
    return this.grades;
  }

  getGrades = () : Grade[] => {
    return this.grades;
  } 

  displayGradeAverage = () => {
    return this.grades;
  }
}

export default Grades;