const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

//1
    getSubjects = (students) => {
      const studentsSubjects = Object.keys(students.subjects);
      const listOfSubjects= studentsSubjects.map(subject => subject.slice(0, 1).toUpperCase() + subject.slice(1).toLowerCase().split('_').join(' '));
      return listOfSubjects;
  }

//2
   getAvarageMark = (students) => {
        const allMarks = Object.values(students.subjects);
        const allMarkss =  allMarks[0].concat(allMarks[1], allMarks[2]);
        const avarageMarks = allMarkss.reduce((acc, mark) => acc + mark) / allMarkss.length;
        return avarageMarks.toFixed(2);
    }

//3
getStudentInfo = (students) => {
    return {
      course : students.course,
      name : students.name,
      avarageMark : getAvarageMark(students)
    }
}

//4
getStudentsNames = (students) => students.map(student => student.name).sort()

//5
getBestStudents = (students) =>  students.reduce((result, students) => getAvarageMark(result) > getAvarageMark(students) ? result : students).name;

//6
calculateWordLetters = (word) => {
  const wordToLowerCase = word.toLowerCase().split('');
  const result = {};
  wordToLowerCase.map(letter => !result[letter] ? result[letter] = 1 : result[letter]++)
  return result
}

console.log(getSubjects(students[0]));
console.log(getAvarageMark(students[0]));
console.log(getStudentInfo(students[0]));
console.log(getStudentsNames(students));
console.log(getBestStudents(students));
console.log(calculateWordLetters('тест'));
