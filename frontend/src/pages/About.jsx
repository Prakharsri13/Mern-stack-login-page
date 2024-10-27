import React from 'react'

function About() {
  return (
    
    <div>
    {/* First div */}
    <div className="div1">
    Node.js, React.js, Express, MongoDB, React-Toastify, and Joi form a powerful stack for building robust web applications, especially for a login page. Node.js is a runtime environment that allows JavaScript to run on the server, enabling back-end functionality like handling database connections. Express is a minimalistic web framework for Node.js, which simplifies creating routes and managing requests and responses. In a login page, Express can handle user authentication, routing, and middleware functions.
    </div>

    {/* Second div */}
    <div className="div2">
    React.js is a front-end library for building interactive user interfaces, making it ideal for creating responsive and dynamic login pages. React-Toastify, a popular React library, can be used to display elegant toast notifications, such as alerts for successful or failed login attempts.
    </div>

    {/* Third div */}
    <div className="div3">
    For validating user input on the login page, Joi comes in handy. Joi is a powerful schema validation library used in Express to ensure that data such as email addresses and passwords meet predefined criteria before being processed.
    </div>

    {/* Fourth div */}
    <div className="div4">
    MongoDB, a NoSQL database, serves as the back-end database for storing user credentials securely. The connection between Express and MongoDB allows for seamless user authentication and session management. This tech stack provides a scalable and efficient way to manage login systems for modern web applications.
    </div>
  </div>
  
    
  )
}

export default About
