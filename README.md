# RealTimeChat

RealTimeChat is a lightweight real-time chat application designed for easy deployment and usage. It allows users to communicate instantly with each other over the web. Built with Node.js, Express.js, Socket.io, and MongoDB, RealTimeChat offers a seamless chatting experience with features like user authentication, persistent message storage, and a user-friendly interface.

## Features

### Real-time Messaging
RealTimeChat enables users to exchange messages in real-time without the need to refresh the page. Messages are instantly sent and received, providing a smooth communication experience.

### User Authentication
Secure user authentication is implemented to ensure that only registered users can access the chat functionality. Users can securely register and log in using their credentials.

### Persistent Storage
Messages sent through RealTimeChat are stored in a MongoDB database, ensuring that they are retained even after users log out. This allows users to view past messages and maintain conversation history.

### User-friendly Interface
RealTimeChat features a clean and intuitive user interface, making it easy for users to navigate and engage in conversations. The interface is designed for optimal user experience, enhancing the overall chatting experience.

## Installation

Follow these steps to install and run RealTimeChat on your local machine:

1. **Clone the repository:**

2. **Navigate to the project directory:**

3. **Install dependencies:**

4. **Set up environment variables:**
- Create a `.env` file in the root directory.
- Define the following environment variables in the `.env` file:
  ```
  MONGODB_URI=your_mongodb_uri
  SESSION_SECRET=your_session_secret
  ```

5. **Start the application:**

6. **Access the application:**
Open your web browser and navigate to `http://localhost:5000` to start using RealTimeChat.

## Technologies Used

RealTimeChat utilizes the following technologies:

- **Node.js:** JavaScript runtime for server-side application logic.
- **Express.js:** Web application framework for Node.js, used for routing and middleware.
- **Socket.io:** Real-time engine for bi-directional communication between web clients and servers.
- **MongoDB:** NoSQL database used for storing chat messages.
- **HTML/CSS:** Front-end technologies for designing and styling the user interface.

## License

This project is licensed under the MIT License. For more details, refer to the [LICENSE](LICENSE) file.
