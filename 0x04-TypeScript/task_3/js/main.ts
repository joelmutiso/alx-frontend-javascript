/// <reference path="./crud.d.ts" />

// Import types
import { RowID, RowElement } from './interface';

// Import everything from crud.js as CRUD
// Note: TypeScript allows this because we created crud.d.ts
import * as CRUD from './crud';

// 1. Create an object called row
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// 2. Insert the row
// We assign the result to a const variable named newRowID with type RowID
const newRowID: RowID = CRUD.insertRow(row);

// 3. Update the row
// Create a const variable named updatedRow with type RowElement
// We create a new object spreading the old row and adding age
const updatedRow: RowElement = { ...row, age: 23 };

CRUD.updateRow(newRowID, updatedRow);

// 4. Delete the row
CRUD.deleteRow(newRowID);
