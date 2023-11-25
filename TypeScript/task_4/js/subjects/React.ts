namespace Subjects {
  // Extends the Teacher interface within the Subjects namespace
  export interface Teacher {
    experienceTeachingReact?: number; // Optional attribute for React
  }

  // Class 'React' extending from 'Subject'
  export class React extends Subject {
    // Method returning requirements for React
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    // Method to check available React teacher
    getAvailableTeacher(): string {
      // Checks if the teacher has experience teaching React
      if (this.teacher.experienceTeachingReact) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}