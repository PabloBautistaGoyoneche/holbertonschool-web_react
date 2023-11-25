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