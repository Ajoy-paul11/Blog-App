# React Blog App

A feature-rich blog application built with React, and Appwrite for backend service, leveraging modern web technologies and services for a seamless user experience.

## Features

- **User Authentication**: Sign up and log in functionality to access full features.
- **Post Viewing**: All visitors after logged in can view posts, and logged-in users can create, edit, or delete own posts.
- **Create Posts**: Logged-in users can create new blog posts with a title, content, and image.
- **Rich Text Editing**: Utilizes [TinyMCE](https://www.tiny.cloud/) for a powerful real-time text editor.
- **Post Management**: Authors can update or delete their own posts.
- **Post Status**: Option to set posts as active or inactive.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A modern, fast build tool for JavaScript and CSS.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Appwrite**: Backend As A Service, to handle backend part.
- **Tiny MCE**: A rich text-editor with wide range features.
- **React-Hook-Form**: Handling form data made easy with this package.
- **HTML-React-Parser**: It converts an HTML string to one or more React elements.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js installed on your machine. If you don't have Node.js installed, you can download it from [nodejs.org](https://nodejs.org/).
- Appwrite account and with project set-up. If you don't have an account visit : [Appwrite](https://appwrite.io/))

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Ajoy-paul11/Blog-App.git
   ```
2. Navigate to the project
   ```sh
   cd Blog-App
   ```
3. Install NPM package
   ```sh
   npm install
   ```
4. Set up environment variables:
   - Create a .env file in the root directory and add your Appwrite credentials:
   ```sh
   VITE_APPWRITE_PROJECT_ID="your_project_id"
   VITE_APPWRITE_ENDPOINT="your_appwrite_endpoint"
   VITE_APPWRITE_DATABASE_ID ="your_appwrite_database_id"
   VITE_APPWRITE_COLLECTION_ID ="your_appwrite_collection_id"
   VITE_APPWRITE_BUCKET_ID ="your_appwrite_bucket_id"
   ```
5. Run development server
   ```sh
   npm run dev
   ```

## Usage

---

- **Sign Up/Log In**: Create an account or log in to access all features.
- **View Posts**: Browse through existing blog posts on the home page.
- **Create a Post**:
  - Click on the "Create Post" button.
  - Fill in the title, content (using the TinyMCE editor), and upload an image.
  - Set the post status (active/inactive).
  - Click "Submit" to publish.
- **Edit/Delete Posts**:
  - Navigate to your post.
  - Use the edit button to modify content, title, or image.
  - Use the delete button to remove the post.

## Acknowledgments

- [TinyMCE](https://www.tiny.cloud/) for the rich text editing capabilities
- [Appwrite](https://appwrite.io/) for backend services
- [React Hook Form](https://react-hook-form.com/) for efficient form handling

## Contact

---

<p align="left"> <a href="https://twitter.com/ajoy_paul11" target="blank"><img src="https://img.shields.io/twitter/follow/ajoy_paul11?logo=twitter&style=for-the-badge" alt="ajoy_paul11" /></a> </p>

<a href="https://linkedin.com/in/ajoypaul" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="ajoypaul" height="30" width="40" /></a>
