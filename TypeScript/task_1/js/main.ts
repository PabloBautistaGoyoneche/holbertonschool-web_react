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