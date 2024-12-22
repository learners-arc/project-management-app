
# **Project Management App**

A comprehensive project management application designed to streamline task assignments, project tracking, collaboration, and progress monitoring. Built using **Next.js**, **Tailwind CSS**, **PostgreSQL**, and **Prisma**, this application ensures an intuitive, user-friendly experience for teams of all sizes.

---

## **Table of Contents**
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Frontend Routes](#frontend-routes)
- [API Routes](#api-routes)
- [Database Schema](#database-schema)
- [Server Actions](#server-actions)
- [Contributors](#contributors)

---

## **Project Overview**

The **Project Management App** allows teams to effectively manage their projects, tasks, and collaboration efforts in one platform. With role-based permissions, users can create and manage projects, assign tasks, track progress using a Kanban board, and monitor deadlines. The app is scalable and responsive, ensuring optimal performance on both desktop and mobile devices.

---

## **Features**

### **1. User Authentication & Authorization**
- **Sign Up / Login**: Secure user registration and login with JWT-based authentication.
- **User Roles**: Admin, Project Manager, and Team Member roles, each with specific permissions.

### **2. Project Management**
- **Create, Edit, Delete Projects**: Manage multiple projects with details such as project name, description, and deadline.
- **Project Dashboard**: Overview of ongoing projects, task progress, and deadlines.
  
### **3. Task Management**
- **Create, Edit, Delete Tasks**: Detailed task management with options for setting priorities, deadlines, and descriptions.
- **Kanban Board**: A visual board to manage tasks with drag-and-drop functionality across columns (To Do, In Progress, Completed).

### **4. Collaboration**
- **Commenting System**: Users can comment on tasks to discuss progress and issues.
- **File Attachments**: Attach documents and files to tasks for easy sharing and collaboration.

---

## **Tech Stack**

- **Frontend**: 
  - **Next.js** (React Framework)
  - **Tailwind CSS** (Styling)
  
- **Backend**:
  - **Next.js API Routes** (Server-Side Logic)
  - **Prisma** (Database ORM)

- **Database**:
  - **PostgreSQL** (Relational Database)

- **Authentication**:
  - **JWT** (JSON Web Token for authentication)

---

## **Setup and Installation**

### **Prerequisites**
- Node.js
- PostgreSQL    

### **1. Clone the Repository**
```
git clone https://github.com/NoviceLab/project-management-app.git
cd project-management-app
```

### **2. Install Dependencies**
```
npm install
```

### **3. Setup Environment Variables**

Create a `.env` file and configure the following:

```
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
JWT_SECRET=your_jwt_secret
```

### **4. Migrate Database**
```
npx prisma migrate dev
```

### **5. Start the Development Server**
```
npm run dev
```

---

## **Frontend Routes**

- `/login` - User login page.
- `/signup` - User registration page.
- `/projects` - List of projects for a user.
- `/projects/[id]` - Detailed view of a specific project, including tasks and team members.
- `/tasks/[id]` - Detailed view of a specific task.
- `/profile` - User profile management.

---

## **API Routes**

### **Auth Routes**
- `POST /api/auth/signup` - Register a new user.
- `POST /api/auth/login` - User login.

### **Project Routes**
- `GET /api/projects` - Fetch all projects for a user.
- `POST /api/projects` - Create a new project.
- `PUT /api/projects/[id]` - Update a specific project.
- `DELETE /api/projects/[id]` - Delete a specific project.

### **Task Routes**
- `GET /api/tasks/[projectId]` - Fetch tasks for a specific project.
- `POST /api/tasks` - Create a new task.
- `PUT /api/tasks/[id]` - Update a specific task.
- `DELETE /api/tasks/[id]` - Delete a specific task.

---

## **Database Schema**

Using **Prisma ORM**, the database is structured with the following schema:

```prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  password  String
  role      Role     @default(USER)
  projects  Project[]
}

model Project {
  id          Int      @id @default(autoincrement())
  name        String
  description String?
  deadline    DateTime?
  ownerId     Int
  owner       User     @relation(fields: [ownerId], references: [id])
  tasks       Task[]
}

model Task {
  id          Int      @id @default(autoincrement())
  title       String
  description String?
  status      Status   @default(TODO)
  projectId   Int
  project     Project  @relation(fields: [projectId], references: [id])
  assignedTo  User?    @relation(fields: [assignedToId], references: [id])
  assignedToId Int?
}

enum Role {
  ADMIN
  MANAGER
  USER
}

enum Status {
  TODO
  IN_PROGRESS
  COMPLETED
}
```

---

## **Server Actions**

- **Authentication**: JWT-based authentication ensures secure user sessions.
- **Role Management**: Users are assigned specific roles (Admin, Manager, User) that determine access permissions.
- **Task Assignment**: Tasks are created and assigned to users, who can track them via the Kanban board.
- **File Uploads**: Supports attaching documents and files to tasks to enhance collaboration.

---

## Contributors

We welcome contributions from the open-source community. Below are our contributors:

[![Contributors](https://contrib.rocks/image?repo=NoviceLab/project-management-app)](https://github.com/NoviceLab/project-management-app/graphs/contributors)

---

### How to Contribute

1. Fork the repository.
2. Create a new branch.
3. Make your changes and submit a pull request.


---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
