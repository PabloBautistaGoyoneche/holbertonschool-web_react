// Definition of the 'Teacher' interface
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: string | boolean | number | undefined; // To allow any attribute
  }

// Example of use
const teacher3: Teacher = {
  firstName: 'Fracisco',
  fullTimeEmployee: false,
  lastName: 'Contreras',
  location: 'Lima',
  contract: false,
};

console.log(teacher3);

// Definition of the 'Directors' interface that extends 'Teacher'
interface Directors extends Teacher {
    numberOfReports: number;
}

// Example of use with 'Directors' interface
const director1: Directors = {
  firstName: 'Carlos',
  lastName: 'Gutierrez',
  location: 'Lima',
  fullTimeEmployee: true,
  numberOfReports: 25,
};

console.log(director1);

// Function to print the teacher information
function printTeacher(firstName: string, lastName: string): string {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const fullName = `${firstLetter}. ${lastName}`;
  return fullName;
}

// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Example of use with the printTeacher function
const printedTeacher: string = printTeacher("John", "Doe");
console.log(printedTeacher);

// Class named StudentClass
class StudentClass implements StudentInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
      return "Currently working";
  }

  displayName(): string {
      return this.firstName;
  }
}

// Interface for the StudentClass constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

// Interface for the StudentClass
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Example of use with the StudentClass
const studentInstance: StudentInterface = new StudentClass("Alice", "Smith");
console.log(studentInstance.workOnHomework());
console.log(studentInstance.displayName());
