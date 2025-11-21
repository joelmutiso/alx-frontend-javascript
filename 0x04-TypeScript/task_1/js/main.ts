// Define the Teacher interface
interface Teacher {
  // Attributes modifiable only on initialization
  readonly firstName: string;
  readonly lastName: string;

  // Always defined attributes
  fullTimeEmployee: boolean;
  location: string;

  // Optional attribute
  yearsOfExperience?: number;

  // Index Signature to allow any other attribute
  [key: string]: any;
}

// Create the example teacher object
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // This extra property is allowed!
};

// Log the object
console.log(teacher3);

// --- Example of 'readonly' ---
// The line below would cause a TypeScript error:
// teacher3.firstName = "Jane";
// Error: Cannot assign to 'firstName' because it is a read-only property.

// --- Example of optional attribute ---
const teacher4: Teacher = {
  firstName: 'Jane',
  fullTimeEmployee: true,
  lastName: 'Smith',
  location: 'Paris',
  yearsOfExperience: 5, // This is allowed
};

console.log(teacher4);