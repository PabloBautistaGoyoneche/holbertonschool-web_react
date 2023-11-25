// Import types and interfaces
import { RowID, RowElement } from './interface';

// Define types for 'crud.js' functions
declare module CRUD {
  function insertRow(row: RowElement): RowID;
  function deleteRow(rowId: RowID): void;
  function updateRow(rowId: RowID, row: RowElement): RowID;
}

export {
	insertRow,
	deleteRow,
	updateRow,
}
