# Ecommerce Web Application

This is an ecommerce web application built using ReactJS, Express, and PostgreSQL. It provides a user-friendly interface for customers to browse products, add them to their cart.

## Features

- View product details
- Add products to the shopping cart
- Manage the shopping cart (update quantity, remove items)
- User authentication and authorization

## Technologies Used

- ReactJS: A JavaScript library for building user interfaces
- Express: A web application framework for Node.js
- PostgreSQL: A powerful, open-source relational database management system
- HTML: The standard markup language for creating web pages
- CSS: A style sheet language used for designing the application's layout
- JavaScript: The programming language that powers the application's interactivity
- Axios: A promise-based HTTP client for making API requests

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/chehab1/Ecommerce-full-stack-web-application.git
   ```

3. Install the dependencies (For both client and server folders):

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and configure the following environment variables:

   ```plaintext
    user=
    password=
    dbname=
    host=
    port=
    dbdriver=
   ```

   Replace `username`, `password`, and `database_name` with your PostgreSQL credentials.

7. Start the application (Client and server seperately):

   ```bash
   npm start
   ```

8. Open your browser and visit [http://localhost:3000](http://localhost:3000).

## Contributing

Contributions are welcome! If you find any bugs or want to add new features, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
