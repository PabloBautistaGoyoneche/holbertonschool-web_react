// Defines the Subject class within the Subjects namespace
namespace Subjects {
  // Class representing a subject with a teacher
  export class Subject {
    teacher: Teacher; // Holds the teacher information

    // Method to set the teacher for the subject
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher; // Assigns the provided teacher
    }
  }
}