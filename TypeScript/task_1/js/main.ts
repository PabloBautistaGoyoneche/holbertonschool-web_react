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
