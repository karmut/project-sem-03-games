function showStudents(students) {
  console.log("Displaying students: ", students);

  for (let i = 0; i < numberOfStudentBlocks; i++) {
    studentBlock[i].style.display = "none";
  }

  for (let i = 0; i < students.length; i++) {
    studentBlock[i].style.display = "none";
    studentBlock[i].innerHTML =
      "Name: " +
      students[i].name +
      "<br>Surname: " +
      students[i].surname +
      "<br>Birth Year: " +
      students[i].birthYear +
      "<br>Death Age: " +
      students[i].deathAge;
    studentBlock[i].style.display = "block";
  }
}

function findStudentsWithFirstLetter(students, letter) {
  return students.filter((student) => {
    return student.surname.charAt(0).toUpperCase() === letter;
  });
}

function findSameFirstLetter(students, letter) {
  return students.filter((student) => {
    return student.surname.charAt(0) == student.name.charAt(0);
  });
}

function findStudents19th(students) {
  return students.filter((student) => {
    return student.birthYear > 1800 && student.birthYear <= 1900;
  });
}

function findAlbert(students) {
  return students.filter((student) => {
    return student.name == "Albert" && student.surname == "Einstein";
  });
}

//btnAge // works
function findOldest(students) {
  let minBirthYearStudent = students[0]; // Assume the first student has the minimum birth year

  for (let i = 1; i < students.length; i++) {
    if (students[i].birthYear > minBirthYearStudent.birthYear) {
      minBirthYearStudent = students[i];
    }
  }
  return [minBirthYearStudent];
}
//findOldestAndYoungest

function findOldest(students) {
  let minBirthYearStudent = students[0]; // Assume the first student has the minimum birth year

  for (let i = 1; i < students.length; i++) {
    if (students[i].birthYear > minBirthYearStudent.birthYear) {
      minBirthYearStudent = students[i];
    }
  }
  return minBirthYearStudent;
}
function findYoungest(students) {
  let maxBirthYearStudent = students[0]; // Assume the first student has the minimum birth year

  for (let i = 1; i < students.length; i++) {
    if (students[i].birthYear < maxBirthYearStudent.birthYear) {
      maxBirthYearStudent = students[i];
    }
  }
  return maxBirthYearStudent;
}
