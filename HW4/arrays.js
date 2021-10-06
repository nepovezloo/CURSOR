const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const getPairs = (students) => {
    const pair1 = [students[0], students[2]];
    const pair2 = [students[1], students[3]];
    const pair3 = [students[4], students[5]];
    const allPairs = [pair1, pair2, pair3];

    return allPairs; 
}

const getPairsWithThemes = (allPairs, themes) => {
	const randomPairs = allPairs.map(pair => pair.join(' і '));
	const pairsWithThemes = randomPairs.map((pair, i) => [pair, themes[i]]);

	return pairsWithThemes;
}

const marksWithStudents = (students, marks) => {
    const studentsWithMarks = students.map((student, i) => [student, marks[i]]);

    return studentsWithMarks;
}

const randomMarks = (pairsWithThemes) => {
    const randomMarksForStudents = pairsWithThemes.map((pairs) => [...pairs, Math.round((Math.random() * (5 - 1)) + 1 )]);

    return randomMarksForStudents;
}

const allPairs = getPairs(students);
const pairsWithThemes = getPairsWithThemes(allPairs, themes);
const studentsWithMarks = marksWithStudents(students, marks);
const randoMarks = randomMarks(pairsWithThemes);

console.log(`Пари : ${allPairs} `);
console.log(`Пари з темами : ${pairsWithThemes} `);
console.log(`Студенти з оцінками : ${studentsWithMarks} `);
console.log(`Пари з темами та рандомними оцінками від 1 до 5 : ${randoMarks} `);