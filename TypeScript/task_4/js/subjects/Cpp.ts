namespace Subjects {
  // Extends the Teacher interface within the Subjects namespace
  export interface Teacher {
    experienceTeachingC?: number; // Optional attribute for C++
  }

  // Class 'Cpp' extending from 'Subject'
  export class Cpp extends Subject {
    // Method returning requirements for C++
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    // Method to check available C++ teacher
    getAvailableTeacher(): string {
      // Checks if the teacher has experience teaching C++
      if (this.teacher.experienceTeachingC) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}