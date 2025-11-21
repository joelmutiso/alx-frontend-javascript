# TypeScript Project 

Welcome to my repository! This is where I'm tracking my progress and building projects as I learn to use **TypeScript** to create modern, type-safe web applications.

This repo includes everything from basic TypeScript syntax to its integration with build tools like Webpack and its use in manipulating the DOM.

## Table of Contents
- [Projects](#projects)
- [Running a TypeScript Project](#running-a-typescript-project)
- [Core Technologies](#core-technologies)

## Projects

Here's a breakdown of the modules I've worked on so far:

### 0x04-TypeScript
- **Description:** My first steps into the TypeScript ecosystem.
- **Tasks:**
    - `task_0`: Learning to create **interfaces**, type objects, and render data to the DOM using Vanilla JS and TypeScript.
    - *(More to come...)*

*(...add more project directories as you create them...)*

## Running a TypeScript Project

To build and run one of the TypeScript projects (using `0x04-TypeScript/task_0` as an example):

1.  **Clone the repository:**
    (You'll need to replace `<your-repository-url>` with your actual GitHub link)
    ```bash
    git clone <your-repository-url>
    cd frontend-javascript
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd 0x04-TypeScript/task_0
    ```

3.  **Install dependencies:**
    This installs all the local tools for the project, like TypeScript, Webpack, and ESLint.
    ```bash
    npm install
    ```

4.  **Build the project:**
    This command uses Webpack to compile the TypeScript (`.ts`) files into a single JavaScript (`.js`) file for the browser.
    ```bash
    npm run build
    ```

5.  **View the result:**
    Open the `index.html` file in your browser to see the live, compiled application.
    ```bash
    # On Windows, you can just run this in your terminal
    start index.html
    ```

## Core Technologies

While the focus is on TypeScript, these projects also use several other key frontend technologies:

- **TypeScript**: For type-safe JavaScript.
- **Webpack**: For compiling and bundling modules.
- **npm**: For package management.
- **JavaScript (ES6+)**: As the compilation target and for DOM manipulation.
- **HTML5 & CSS3/Sass**: For structure and styling.
- **Git & GitHub**: For version control.