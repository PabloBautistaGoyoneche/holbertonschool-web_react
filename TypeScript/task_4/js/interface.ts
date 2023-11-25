// Defines the type 'RowID'
type RowID = number;

// Defines the 'RowElement' interface
interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}

export {
    RowID,
    RowElement,
}