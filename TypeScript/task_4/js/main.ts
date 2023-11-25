/// <reference path="./crud.d.ts" />

// Import types and interfaces
import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

// Create 'row' object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert row and get ID
const newRowID: RowID = CRUD.insertRow(row);

// Update row with new age
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);

// Delete Row
CRUD.deleteRow(newRowID);

// Create and export constants for subjects
export const cpp = 'Cpp Subjects';
export const java = 'Java Subjects';
export const react = 'React Subjects';

// Create and export a Teacher object cTeacher with experienceTeachingC = 10
export const cTeacher = {
  experienceTeachingC: 10,
};

// Function to log information for a subject
function logSubjectInfo(subject: string, teacher: any) {
  console.log(subject);
  console.log(`Set ${teacher} as the teacher.`);
  console.log(`Requirements: ${getRequirements(subject)}`);
  console.log(`Available Teacher: ${getAvailableTeacher(subject, teacher)}`);
  console.log('-------------------------------------------');
}

// Function to get requirements for a subject
function getRequirements(subject: string): string {
  // Placeholder implementation, replace with actual logic
  return `Requirements for ${subject}`;
}

// Function to get available teacher for a subject
function getAvailableTeacher(subject: string, teacher: any): string {
  // Placeholder implementation, replace with actual logic
  return `Available Teacher for ${subject}: ${teacher}`;
}

// Log information for C++ subject
logSubjectInfo(cpp, cTeacher);

// Log information for Java subject
logSubjectInfo(java, cTeacher);

// Log information for React subject
logSubjectInfo(react, cTeacher);
