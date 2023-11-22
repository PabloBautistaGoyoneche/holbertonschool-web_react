// Write an interface named "Student"
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

  // Create 2 students variables and store them into an array named "studentsList"
const student1: Student = {
    firstName: "Pablo",
    lastName: "Bautista",
    age: 36,
    location: "Lima",
};
  
const student2: Student = {
    firstName: "Gisela",
    lastName: "Purca",
    age: 36,
    location: "Ayacucho",
};

const studentsList: Student[] = [student1, student2];

  
// 3. Using Vanilla Javascript, render a table and append a new row for each element in the array
const table = document.createElement("table");
  
studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
  
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});
  
document.body.appendChild(table);