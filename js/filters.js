numberOfStudentBlocks = 12;

const studentBlock = document.getElementsByClassName("s-block-info");

//btn19th //works
btn19th.addEventListener("click", function () {
  showStudents(findStudents19th(students));
});

//btnAbc // works
btnAbc.addEventListener("click", function () {
  const sortObj = students.sort((a, b) => a.name.localeCompare(b.name));
  showStudents(sortObj);
});

//btnAge //works

btnAge.addEventListener("click", function () {
  const sortObj = students.sort((a, b) => a.deathAge - b.deathAge);
  showStudents(sortObj);
});

//btnOldestStudent //works

const btnOldestStudent = document
  .getElementById("btnOldestStudent")
  .addEventListener("click", function () {
    showStudents(findOldest(students));
  });
//btnOldestandYoungestStudent ///---------------

const btnOldestandYoungestStudent = document
  .getElementById("btnYoungestAndOldest")
  .addEventListener("click", function () {
    showStudents([findOldest(students), findYoungest(students)]);
    console.log("hi");
  });

//btnShareFirstLetters //works
const btnShareFirstLetters = document
  .getElementById("btnShareFirstLetters")
  .addEventListener("click", function () {
    showStudents(findSameFirstLetter(students));
  });

//btnEinstein  //works

const btnEinstein = document.getElementById("btnEinstein");

btnEinstein.addEventListener("click", function () {
  showStudents(findAlbert(students));
});

//btnFirstLetterC

const btnFirstLetterC = document
  .getElementById("btnFirstLetterC")
  .addEventListener("click", function () {
    showStudents(findStudentsWithFirstLetter(students, "C"));
  });
//btnFirstLetterA

const btnFirstLetterA = document
  .getElementById("btnFirstLetterA")
  .addEventListener("click", function () {
    showStudents(findStudentsWithFirstLetter(students, "A"));
  });
