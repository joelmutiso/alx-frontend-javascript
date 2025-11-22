// 1. Create the DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// 2. Create the TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// 3. Create the Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// 4. Create the Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// 5. Create the createEmployee function
// Argument 'salary' can be a number OR a string
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number") {
        if (salary < 500) {
            return new Teacher();
        } else {
            return new Director();
        }
    }
    return new Director();
}

// --- Test Code (Optional) ---
console.log(createEmployee(200));   // Teacher
console.log(createEmployee(1000));  // Director
console.log(createEmployee('$500'));// Director

// 6. Define the Subjects string literal type
type Subjects = 'Math' | 'History';

// 7. Implement the teachClass function
export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  if (todayClass === 'History') {
    return 'Teaching History';
  }
}

// --- Test Cases ---
console.log(teachClass('Math'));    // Teaching Math
console.log(teachClass('History')); // Teaching History