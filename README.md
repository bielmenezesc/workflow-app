# Workflow Management App

This is a simple workflow management application built with React and Node.js. It allows users to create, edit, see an specifc workflow grafic representation, see all workflows, and delete an workflow.

## Getting Started

These instructions will guide you on how to run the application in different environments.

### Prerequisites

Before running the application, make sure you have the following prerequisites installed:

- Node.js: [https://nodejs.org/](https://nodejs.org/)
- npm (Node Package Manager): [https://www.npmjs.com/](https://www.npmjs.com/)
- Git (optional): [https://git-scm.com/](https://git-scm.com/)

### Development Environment

To run the app in a development environment, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/workflow-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd workflow-app
   ```

3. Install server dependencies:

   ```bash
   cd backend
   npm install
   ```

4. Install client dependencies:

   ```bash
   cd ..
   npm install
   ```

5. Start the server:

   ```bash
   cd backend
   node .src/app.js
   ```

6. Start the client (in a separate terminal):

   ```bash
   cd ..
   npm start
   ```

7. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the app.

### Production Environment

To run the app in a production environment, you'll need to build and deploy it to a web server:

1. Clone the repository to your server:

   ```bash
   git clone https://github.com/yourusername/workflow-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd workflow-app
   ```

3. Install server dependencies:

   ```bash
   cd backend
   npm install
   ```

4. Install client dependencies:

   ```bash
   cd ..
   npm install
   ```

5. Build the client for production:

   ```bash
   npm run build
   ```

6. Configure your web server (e.g., Nginx, Apache) to serve the contents of the `client/build` directory as static files.

7. Start your web server and make the app accessible over the internet.

### Advantages of This Configuration

- **Development Environment:** Running the app locally allows for rapid development, debugging, and testing. You can leverage hot-reloading and other development features.

- **Production Environment:** Deploying the app in a production environment ensures optimal performance and security. It also allows for scalability to accommodate a larger user base.

### External Dependencies

- **React:** Used for building the user interface due to its flexibility and component-based architecture.

- **Node.js:** Used for the server backend, providing a non-blocking, event-driven environment.

- **Express.js:** Used to create a robust and scalable API for handling workflow data.

### Testing

- **Testing:** Supertest for backend testing. Automated tests help ensure the reliability of the application.


### Decisions Made

- **Client-Server Architecture:** A client-server architecture to separate concerns, making the application more modular and maintainable.

- **React for Front-End Framework:** Was chosen to build the front-end of the application using React, a popular JavaScript library for building user interfaces. React's component-based architecture, virtual DOM, and strong community support made it an ideal choice for creating a dynamic and responsive user interface.

- **Node.js for Backend:** Was the technology chosen for building the back-end server. Its non-blocking, event-driven architecture is well-suited for handling concurrent requests and managing the application's business logic. Additionally, Node.js integrates seamlessly with JavaScript, promoting code reuse between the front end and back end.

- **MongoDB for Database:** For data storage and management, it was adopted MongoDB, a NoSQL database. Its flexible schema-less design allows efficient storage and retrieval of structured data, making it an excellent choice for managing workflows and associated data.

- **React Router DOM for Routing:** To handle client-side routing and navigation within the single-page application, was opted for React Router DOM. This library provides a robust solution for defining and managing routes, allowing users to seamlessly navigate between different views and components.

- **Axios for HTTP Requests:** Axios was selected as the HTTP client library for making requests to the server and external APIs. Its simplicity, promise-based approach, and built-in support for request and response transformations streamlined data retrieval and submission.

- **Graphviz for Data Visualization:** To generate graphical representations of workflows, it was integrated the Graphviz library. Graphviz enables the visualization of complex workflows in a clear and concise manner, enhancing the user experience and aiding in understanding workflow structures.

- **Git for Version Control:** Git enables version control, collaboration, and tracking of code changes.

### Workflow Logic

In the pursuit of creating an swift but powerfull project, I embraced a streamlined approach to workflows. Leveraging the concept of Graphviz, I designed a user-friendly system where users can define their workflow flow effortlessly using a straightforward syntax. This workflow is securely stored, and when a request is made to visualize it graphically, Graphviz comes into play. It effortlessly translates this flow into a visually appealing and powerful workflow demonstration.

### Future Growth

This application is designed with scalability in mind, allowing for future enhancements, such as additional workflow features, user management, and integration with other tools.

---
Feito com ❤️ por Gabriel Menezes Cabral
