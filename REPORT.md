# 📌 Rättningsrapport – fed24d-the-last-todos-KarinHson

## 🎯 Uppgiftens Krav:
# ✅ Todo App! 

## 🗺️ Description

This is a simple and user-friendly Todo App that allows users to manage their daily tasks. Users can add, sort, mark as done, and delete todos. The application stores todos in localStorage to persist data between sessions.

## 🗝️ Project Features
This website includes several key features:

- Add new todos  
- Mark todos as done/undone  
- Delete individual todos  
- Sort todos A–Ö or Ö–A  
- Stores todos in localStorage for persistence  

## 🔭 Project Overview

The project is built with React and TypeScript and uses functional components and hooks such as `useState` to manage application state. Todos are rendered dynamically and sorted based on user selection. A clean and colorful UI enhances the user experience.

## ✅ Responsiveness and Accessibility

- Fully responsive design using Tailwind CSS  
- Works well across devices and screen sizes  
- Semantic HTML elements like `section`, `ul`, and `button` are used to improve accessibility  
- Keyboard-friendly interactions  

## 👩🏻‍💻 Tech Stack

[![HTML](https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white)](#)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)



## 📸 Site Screenshots

Here are some screenshots from the site:

![Bigger screen size](https://github.com/user-attachments/assets/8e1da750-f920-4588-9c46-a791b7901cdd)

![Mobile screen size](https://github.com/user-attachments/assets/bce7f85d-50a9-47b8-a9ab-7cdfd6e3f218)

![Todos marked as done](https://github.com/user-attachments/assets/62985f08-bb6b-435e-96b2-729441030677)


## 🍎 Lessons learned

- Using localStorage with React to persist state  
- Managing dynamic lists with unique keys and states  
- Working with TypeScript types in component props  
- Styling with Tailwind for responsive design  
- Importance of semantic HTML for accessibility  

## 🔗 Live Version & Repository Link

You can view the live version of this project [here](https://medieinstitutet.github.io/fed24d-the-last-todos-KarinHson/). 

Repository link:
https://github.com/Medieinstitutet/fed24d-the-last-todos-KarinHson


## 💻 Usage

- Add a task by typing into the input field and clicking "Lägg till"  
- Sort tasks alphabetically using the dropdown menu  
- Toggle tasks as done/undone by clicking the checkbox  
- Remove tasks by clicking "Ta bort"  


## 🚀 Installation

1. Install the project locally with ___

```bash
npm install
```

2. Run the project

```bash
npm run dev
```



## 🤝Credits

Special thanks to my teacher Sebastian Tegel and classmates for their feedback and support throughout the project.

## 📝 Author

Karin Henriksson – Project lead and developer
[@KarinHson](https://github.com/KarinHson)



## 🔍 ESLint-varningar:


## 🏆 **Betyg: VG**
📌 **Motivering:** The student has implemented a Todo application that meets all the specified requirements comprehensively. The codebase follows best practices with TypeScript and React, demonstrating a good understanding of component structure, state management with hooks, and type safety with TypeScript. The UI is styled using Tailwind CSS, enhancing the responsiveness and aesthetic of the application. Accessibility considerations are present through semantic HTML elements and ARIA labels. Data persistence is effectively handled with localStorage, ensuring that todos are retained between sessions.

💡 **Förbättringsförslag:**  
To further improve the application, consider the following suggestions: 1) Implement unit testing, especially for the core functionalities (such as adding, deleting, and marking todos), to ensure reliability. 2) Optimize the localStorage update strategy to minimize potentially redundant writes, perhaps by using a useEffect hook to update localStorage only when todoList changes. 3) Improve error handling for edge cases such as failures during localStorage parsing. 4) Consider adding animations for UI interactions like adding or removing todos for enhanced user experience.