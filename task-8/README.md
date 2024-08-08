
---

# Authentication App

**Authentication App** is a Next.js project designed to handle user authentication and authorization. It includes pages for signing up, verifying the user's email, and signing in. The app interacts with a backend API to provide secure authentication and authorization services.

## Features

- **Signup**: Create a new account by providing an email and password.
- **Email Verification**: After signing up, users receive an email with a verification link to confirm their email address.
- **Signin**: Users can sign in with their email and password after their account is verified.
- **Authorization**: Protect routes and content, ensuring that only authenticated users can access certain parts of the app.

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later) or Yarn (v1.x or later)

### Installation

1. **Clone the Repository**  
   Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/authentication-app.git
   ```

2. **Navigate to the Project Directory**  
   Move into the project directory:

   ```bash
   cd authentication-app
   ```

3. **Install Dependencies**  
   Install the required dependencies using npm or Yarn:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. **Set Up Environment Variables**  
   Create a `.env.local` file in the root of your project and add the following environment variables:

   ```env
   NEXT_PUBLIC_API_URL=<Your Backend API URL>
   NEXTAUTH_URL=http://localhost:3000
   GOOGLE_CLIENT_ID=<Your Google Client ID>
   GOOGLE_CLIENT_SECRET=<Your Google Client Secret>
   AUTH_SECRET=<Your Authentication Secret>
   ```

5. **Start the Development Server**  
   Start the development server to run the app locally:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

   The app should now be running at [http://localhost:3000](http://localhost:3000).

### Usage

- **Signup**: Navigate to `/signup` to create a new account.
- **Email Verification**: After signing up, check your email for a verification link and click it to verify your account.
- **Signin**: Navigate to `/signin` to log in to your account.

### Backend API

This project is designed to interact with a backend API for user management. Make sure your backend API supports the following endpoints:

- `POST /auth/signup`: Create a new user.
- `POST /auth/signin`: Authenticate a user.
- `POST /auth/verify-email`: Verify the user's email address.

### Customization

You can customize the pages, components, and styles by modifying the respective files in the `pages` and `components` directories. 

### Learn More

To learn more about Next.js, check out the [Next.js documentation](https://nextjs.org/docs).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

# screenshots

# signup page: 
![signup](https://github.com/user-attachments/assets/921a5fe2-af5a-43b7-ac8f-ea26bec68586)

# email verification: 
![verify](https://github.com/user-attachments/assets/b78c6718-7084-485d-aab0-d43bfab5af77)




This `README.md` provides clear and concise instructions on how to set up and use your "authentication-app" project, making it easy for others to get started.
