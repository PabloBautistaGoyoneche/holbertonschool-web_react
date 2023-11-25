namespace Subjects {
  // Extends the Teacher interface within the Subjects namespace
  export interface Teacher {
    experienceTeachingJava?: number; // Optional attribute for Java
  }

  // Class 'Java' extending from 'Subject'
  export class Java extends Subject {
    // Method returning requirements for Java
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    // Method to check available Java teacher
    getAvailableTeacher(): string {
      // Checks if the teacher has experience teaching Java
      if (this.teacher.experienceTeachingJava) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}