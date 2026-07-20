# Skill-Based Team Formation Platform - Frontend

A modern and responsive React-based frontend application for the **Skill-Based Team Formation Platform**, designed to help students and developers discover teammates, create project teams, and collaborate efficiently based on technical skills. The application provides an intuitive user interface that communicates with the backend REST APIs to deliver a seamless and secure user experience.

---

# Overview

The **Skill-Based Team Formation Platform** is a full-stack web application that simplifies team creation and project collaboration among students and developers. Instead of manually searching for teammates, users can create professional profiles, showcase their technical skills, discover suitable teams, create projects, and collaborate effectively.

The frontend is built using **React, Vite, and Axios**, offering a fast, responsive, and user-friendly interface. It interacts with the backend through REST APIs to perform authentication, profile management, team management, project management, and other core platform functionalities.

The application follows a modular component-based architecture, making it scalable, maintainable, and easy to extend with future enhancements.

---

# Project Objectives

The primary goals of the frontend application are:

- Build a modern and responsive user interface using React.
- Provide secure authentication workflows with protected client-side routing.
- Allow users to create and manage their professional profiles.
- Enable users to discover, create, and manage project teams.
- Provide an intuitive interface for project creation and management.
- Ensure seamless communication with backend REST APIs.
- Implement reusable components for better maintainability.
- Deliver an optimized user experience across multiple devices.
- Deploy the frontend for public access using Vercel.

---

# Key Features

## Authentication

- User Registration
- User Login
- Forgot Password
- OTP Verification
- Password Reset
- Secure JWT Authentication
- Protected Routes
- Automatic Session Handling

---

## User Profile

- View Personal Profile
- Update Profile Information
- Upload Technical Skills
- Preferred Role Selection
- Experience Details
- Portfolio Links
- GitHub Profile
- LinkedIn Profile
- Personal Bio

---

## Dashboard

- Personalized Dashboard
- User Overview
- Team Statistics
- Project Statistics
- Quick Navigation Cards
- Recent Activities

---

## Team Management

- Create New Teams
- Browse Available Teams
- Search Teams
- View Team Details
- Join Existing Teams
- Manage Team Information

---

## Project Management

- Create Projects
- Browse Projects
- View Project Details
- Project Requirement Display
- Team Collaboration Support

---

## User Interface

- Modern SaaS-inspired Design
- Responsive Layout
- Clean Navigation
- Reusable Components
- Interactive Forms
- Modal Dialogs
- Smooth User Experience

---

## Security Features

- JWT Token Authentication
- Protected Client Routes
- Secure API Requests
- Input Validation
- Authorization Support

---

# Technology Stack

| Category                 | Technology           |
| ------------------------ | -------------------- |
| **Frontend Framework**   | React                |
| **Build Tool**           | Vite                 |
| **Programming Language** | JavaScript (ES6+)    |
| **Styling Technology**   | CSS3                 |
| **Routing Library**      | React Router DOM     |
| **HTTP Client**          | Axios                |
| **Authentication**       | JWT (JSON Web Token) |
| **Package Manager**      | npm                  |
| **Deployment Platform**  | Vercel               |
| **Version Control**      | Git & GitHub         |


---

# Frontend Architecture

```text
                    User
                      │
                      ▼
               React Application
                      │
        ┌─────────────┼─────────────┐
        │             │             │
        ▼             ▼             ▼
   Authentication   Dashboard     Team Module
        │             │             │
        └─────────────┼─────────────┘
                      ▼
               Project Module
                      │
                      ▼
               Axios API Service
                      │
                      ▼
            Express REST Backend API
                      │
                      ▼
                MongoDB Database
```

---

# Live Resources

| Resource              |                                      URL                          |
|-----------------------|-------------------------------------------------------------------|
| GitHub Repository     | https://github.com/sri-lalitha02/SkillBasedTeamFormation_Frontend |
| Frontend Deployment   | https://skill-based-team-formation-frontend-flame.vercel.app/     |
| Backend API           | https://skillbasedteamformation-backend-1.onrender.com/           |
| Swagger Documentation | https://skillbasedteamformation-backend-1.onrender.com/api-docs/  |

---

# Project Structure

```text
SkillBasedTeamFormation_Frontend
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   │
│   ├── assets/
│   │   └── images/
│   │       ├── hero.png
│   │       ├── logo.png
│   │       ├── TeamFormation.png
│   │       ├── BuildYourTeam.png
│   │       ├── SkillMatching.png
│   │       ├── Search.png
│   │       ├── SmartFiltering.png
│   │       ├── achieveGoals.png
│   │       ├── collabration.png
│   │       └── MainImage_processed.png
│   │
│   ├── components/
│   │   ├── Register/
│   │   ├── AuthPrompt.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   ├── ProjectDetailsModal.jsx
│   │   └── TeamDetailsModal.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Profile.jsx
│   │   ├── FindTeam.jsx
│   │   ├── CreateTeam.jsx
│   │   ├── CreateProject.jsx
│   │   ├── Projects.jsx
│   │   ├── ForgotPassword.jsx
│   │   ├── VerifyOtp.jsx
│   │   ├── ResetPassword.jsx
│   │   └── teams.jsx
│   │
│   ├── routes/
│   │   └── ProtectedRoute.jsx
│   │
│   ├── services/
│   │   ├── api.js
│   │   ├── authService.js
│   │   └── teamService.js
│   │
│   ├── styles/
│   │   ├── Home.css
│   │   ├── Header.css
│   │   ├── Dashboard.css
│   │   ├── Login.css
│   │   ├── Register.css
│   │   ├── Profile.css
│   │   ├── CreateTeam.css
│   │   ├── Projects.css
│   │   ├── FindTeam.css
│   │   ├── Layout.css
│   │   ├── AuthPrompt.css
│   │   ├── auth.css
│   │   ├── ResetPassword.css
│   │   ├── ProjectDetailsModal.css
│   │   └── TeamDetailsModal.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── config.js
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── vercel.json
└── README.md
```

---

# Prerequisites

Before running the project, ensure the following software is installed on your system:

| Software        | Recommended Version                              |
| --------------- | ------------------------------------------------ |
| **Node.js**     | 18.x or later                                    |
| **npm**         | 9.x or later                                     |
| **Git**         | Latest Version                                   |
| **Web Browser** | Google Chrome / Microsoft Edge / Mozilla Firefox |


Verify your installation:

```bash
node -v
npm -v
git --version
```

---


# Installation

Follow the steps below to set up and run the frontend application locally.

---

## 1. Clone the Repository

Clone the frontend repository using Git:

```bash
git clone https://github.com/sri-lalitha02/SkillBasedTeamFormation_Frontend.git
```

---

## 2. Navigate to the Project Directory

Move into the frontend project directory:

```bash
cd SkillBasedTeamFormation_Frontend

```

---

## 3. Install Dependencies

Install all required project dependencies:

```bash
npm install
```

This installs all packages mentioned in `package.json`, including:

- React
- React Router DOM
- Axios
- Vite
- ESLint
- Development dependencies

---

# Running the Application

## Development Mode

Start the development server using Vite:

```bash
npm run dev
```

After successful startup, the application will be available at:

```text
http://localhost:5173
```

---

## Production Build

Create an optimized production build:

```bash
npm run build
```

The production files will be generated inside:

```text
dist/
```

---

## Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

---

# Available Scripts

| Command | Description |
|---------|-------------|
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts development server using Vite |
| `npm run build`| Creates optimized production build |
| `npm run preview` | Previews production build locally |
| `npm run lint` | Checks code quality using ESLint |

---

# Application Routing

The frontend uses **React Router DOM** for client-side navigation.

The routing system provides:

- Fast page navigation without reload.
- Protected routes for authenticated users.
- Organized route management.
- Better user experience.

---

# Route Structure

```text
                    Application
                         │
                         ▼
                    App.jsx
                         │
             ┌───────────┴───────────┐
             │                       │
             ▼                       ▼
        Public Routes          Protected Routes
             │                       │
             │                       │
     ┌───────┼────────┐             │
     │       │        │             │
     ▼       ▼        ▼             ▼
   Home    Login   Register     Dashboard
                                  │
                    ┌─────────────┼─────────────┐
                    │             │             │
                    ▼             ▼             ▼
                Profile      Create Team    Projects
```

---

# Page Structure

The frontend application consists of multiple pages that provide different platform functionalities.

---

## Home Page

**File:**

```text
src/pages/Home.jsx
```

### Responsibilities:

- Displays the landing page.
- Introduces the platform features.
- Provides navigation options.
- Explains skill-based team formation benefits.

---

## Login Page

**File:**

```text
src/pages/Login.jsx
```

### Responsibilities:

- Provides user authentication.
- Accepts email and password.
- Sends login request to backend.
- Stores JWT token after successful login.
- Redirects authenticated users.

---

## Register Page

**File:**

```text
src/pages/Register.jsx
```

### Responsibilities:

- Creates new user accounts.
- Collects personal information.
- Handles technical skill selection.
- Validates user input.
- Sends registration request to backend.

---

## Dashboard Page

**File:**

```text
src/pages/Dashboard.jsx
```

### Responsibilities:

- Displays personalized dashboard.
- Shows user statistics.
- Provides quick navigation.
- Displays team and project information.

---

## Profile Page

**File:**

```text
src/pages/Profile.jsx
```

### Responsibilities:

- Displays user profile information.
- Shows technical skills.
- Displays social profile links.
- Allows profile management.

---

## Create Team Page

**File:**

```text
src/pages/CreateTeam.jsx
```

### Responsibilities:

- Creates new project teams.
- Collects team information.
- Defines required skills.
- Sends team creation requests.

---

## Find Team Page

**File:**

```text
src/pages/FindTeam.jsx
```

### Responsibilities:

- Displays available teams.
- Helps users discover teams.
- Supports team searching.
- Allows users to explore collaboration opportunities.

---

## Projects Page

**File:**

```text
src/pages/Projects.jsx
```

### Responsibilities:

- Displays available projects.
- Shows project details.
- Helps users find collaboration opportunities.

---

## Create Project Page

**File:**

```text
src/pages/CreateProject.jsx
```

### Responsibilities:

- Creates new projects.
- Defines project requirements.
- Sends project information to backend.

---

## Password Recovery Pages

### Forgot Password

```text
src/pages/ForgotPassword.jsx
```

Responsibilities:

- Initiates password recovery process.
- Sends OTP request.

---

### Verify OTP

```text
src/pages/VerifyOtp.jsx
```

Responsibilities:

- Verifies user OTP.
- Allows password reset continuation.

---

### Reset Password

```text
src/pages/ResetPassword.jsx
```

Responsibilities:

- Updates user password.
- Completes password recovery process.

---

# Component Architecture

Reusable components are created to maintain consistency and improve code reusability.

```text
src/components/

│
├── Register/
│
├── AuthPrompt.jsx
│
├── Header.jsx
│
├── Layout.jsx
│
├── ProjectDetailsModal.jsx
│
└── TeamDetailsModal.jsx
```

---

# Component Responsibilities

## Header Component

**File:**

```text
src/components/Header.jsx
```

Responsibilities:

- Provides application navigation.
- Displays authentication-based menu options.
- Maintains consistent header UI.

---

## Layout Component

**File:**

```text
src/components/Layout.jsx
```

Responsibilities:

- Provides common page layout.
- Maintains consistent structure.
- Wraps application pages.

---

## Auth Prompt Component

**File:**

```text
src/components/AuthPrompt.jsx
```

Responsibilities:

- Displays authentication-related messages.
- Provides login/register prompts.

---

## Protected Route Component

**File:**

```text
src/routes/ProtectedRoute.jsx
```

Responsibilities:

- Protects private application pages.
- Checks authentication status.
- Redirects unauthorized users.

---

## Team Details Modal

**File:**

```text
src/components/TeamDetailsModal.jsx
```

Responsibilities:

- Displays complete team information.
- Shows team members.
- Provides team interaction details.

---

## Project Details Modal

**File:**

```text
src/components/ProjectDetailsModal.jsx
```

Responsibilities:

- Displays project information.
- Shows project requirements.
- Improves project browsing experience.

---

# API Integration

The frontend communicates with backend REST APIs using **Axios**.

API-related files are organized inside the services folder.

```text
src/services/

├── api.js
├── authService.js
└── teamService.js
```

---

# Axios Configuration

**File:**

```text
src/services/api.js
```

Responsibilities:

- Creates Axios instance.
- Configures backend API URL.
- Handles HTTP communication.

Example:

```javascript
const api = axios.create({
    baseURL: API_BASE_URL,
});
```

---

# Authentication Service

**File:**

```text
src/services/authService.js
```

Responsibilities:

- Handles user registration.
- Handles user login.
- Communicates with authentication APIs.
- Manages authentication requests.

---

# Team Service

**File:**

```text
src/services/teamService.js
```

Responsibilities:

- Creates teams.
- Retrieves team information.
- Performs team-related API operations.

---


---

# User Interface Design

The frontend application follows a modern SaaS-inspired design approach that focuses on simplicity, usability, and responsiveness.

The design principles include:

- Clean and professional layouts.
- Consistent UI components.
- Responsive design across devices.
- User-friendly navigation.
- Improved user interaction experience.

---

# Responsive Design

The application is designed to provide a seamless experience across different screen sizes.

| Device | Support |
|--------|---------|
| Desktop | Fully Responsive |
| Laptop | Fully Responsive |
| Tablet | Responsive Layout |
| Mobile | Mobile-Friendly Interface |

Responsive implementation includes:

- CSS media queries.
- Flexible layouts.
- Adaptive components.
- Mobile-friendly navigation.

---

# Authentication Flow

The frontend implements a secure JWT-based authentication workflow.

```text
           User
            │
            ▼
    Register / Login
            │
            ▼
    Authentication API Request
            │
            ▼
     Backend Validates Credentials
            │
            ▼
    JWT Token Generated
            │
            ▼
    Token Stored in Browser Storage
            │
            ▼
    Axios Interceptor Adds Token
            │
            ▼
    Protected API Requests
            │
            ▼
    Authenticated User Access
            │
            ▼
     Access Protected Pages
```

---

# Data Flow

The frontend communicates with the backend through REST APIs. User interactions trigger API requests, which are processed by the backend before data is returned to the React application.

```text
          User Interaction
                 │
                 ▼
          React Components
                 │
                 ▼
         Axios Service Layer
                 │
                 ▼
        Express REST API Server
                 │
                 ▼
          MongoDB Database
                 │
                 ▼
        JSON Response Returned
                 │
                 ▼
      React Updates User Interface
```

---

# State Management

The application manages data using React's built-in state management features.

State is managed through:

- React Hooks (`useState`)
- Effect Hooks (`useEffect`)
- React Router Navigation
- Browser Local Storage for JWT tokens
- Axios API responses

This approach keeps the application lightweight while maintaining efficient data flow and component communication.

---

# Error Handling

The frontend implements proper error handling to improve user experience and application reliability.

Error handling includes:

- Form validation before submission.
- API error message handling.
- Authentication failure handling.
- Network request error handling.
- Invalid route redirection.
- User-friendly error notifications.

---

# Performance Optimization

Several optimization techniques are used to improve application performance.

These include:

- Fast development with Vite.
- Component-based architecture.
- Reusable UI components.
- Optimized production builds.
- Efficient API communication using Axios.
- Responsive CSS layouts.
- Code organization for maintainability.

---

# Deployment

The frontend application is deployed using **Vercel**, allowing users to access the application from anywhere through a web browser.

Deployment process:

1. Push the source code to GitHub.
2. Connect the GitHub repository to Vercel.
3. Configure environment variables if required.
4. Deploy the application.
5. Vercel automatically builds and hosts the project.

---

# Future Enhancements

The following features can be added in future versions of the platform:

- Real-time chat between team members.
- Task management dashboard.
- AI-based teammate recommendation.
- Advanced search and filtering.
- Admin dashboard with analytics.
- Project progress tracking.

---

# Learning Outcomes

This project helped in understanding and implementing several modern web development concepts, including:

- React component-based architecture.
- Client-side routing with React Router DOM.
- REST API integration using Axios.
- JWT-based authentication.
- Protected routing.
- Responsive web design.
- Form validation.
- State management using React Hooks.
- Modular project structure.
- Frontend deployment using Vercel.
- Version control using Git and GitHub.

---

# Conclusion

The **Skill-Based Team Formation Platform - Frontend** provides a modern, responsive, and user-friendly interface for collaborative team formation and project management. Built using React and Vite, the application integrates seamlessly with the backend REST APIs to deliver secure authentication, profile management, team collaboration, and project management features.

Its modular architecture, reusable components, responsive design, and scalable structure make it easy to maintain and extend with future enhancements. The project demonstrates best practices in frontend development while providing an efficient platform for students and developers to connect, collaborate, and build projects together.

---

# Authors

This project was collaboratively developed by:

- **Sri Lalitha Yelisetti**
- **Hethal Jain**
- **Durga Venkata Naga Udaya Devi Nainala**

---

# License

This project is developed for educational and learning purposes. You are free to use, modify, and enhance it for academic or personal projects.