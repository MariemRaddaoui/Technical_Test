# Front-End Developer Intern Technical Test

Welcome to my submission for the Front-End Developer Intern Technical Test. Below, you'll find detailed information on the various components and functionalities I have implemented for this project.

## Landing Page

I have developed a landing page that closely follows the layout and styling of Acheel's landing page, utilizing the graphic charter and colors of Avektoi branding. Thanks to the CSS, the landing page is fully responsive, adapting smoothly to both desktop and mobile devices as demonstrated in the demo video.

## Multi-Language Support

The website supports multiple languages with a dropdown to select either French or English, dynamically changing the website's language accordingly. For this, I have used the `i18next` library for translations, with `translationFr.json` and `translationEn.json` files storing the respective translations.

## Login/Sign Up Form

### Features:

- **Form Fields:** Added a form with multiple fields including email and password.
- **Form Validation:** Implemented form validation using `zod` to ensure all fields are correctly filled.
- **Error Messages:** Display error messages for invalid inputs.
- **Success Message:** Show a success message upon form submission (simulation only; no backend required).

The validation schemas are stored in `utils/validationSchemas.js`. For testing purposes (since we are not using a backend), the login requires using one of the following dummy credentials:

    ```javascript
    const dummyData = [
        { email: "user1@example.com", password: "password123" },
        { email: "user2@example.com", password: "password456" },
        { email: "user3@example.com", password: "password789" },
    ];


## API Integration
 - **Fetching items:** Fetched a list of items (e.g., blog posts) from a public API (https://jsonplaceholder.typicode.com/posts) and displayed them on the landing page.
 - **Search Bar:** Implemented a search bar to filter displayed items based on user input.
 - **Pagination:** Created pagination for the blog section, and each blog post links to a dedicated page for that article.

Both axios and fetch were used for API calls.

## Animations
 - **Hover Effects:** Added a simple hover animation to buttons.
 - **Confetti Animation:** Implemented a confetti animation upon successful login or signup to enhance user experience.

## State Persistance
Included a theme toggle (e.g., light/dark mode) and saved the selected theme in local storage to ensure it persists across page reloads.

## Demo Video
A demo video (demo.mp4) is included, showcasing the functionalities and responsiveness of the website. 
You can find it here: https://drive.google.com/file/d/10aJhisyVEpUxhyHPU7tEfgx6AnsoQySC/view?usp=sharing

## Challenges Encountered
While working on the project, I faced some challenges with the CSS and the images used on the website. Many images had a white background, making their manipulation and integration into the design quite difficult.

## How to Run

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MariemRaddaoui/Technical_Test.git
   cd Technical_Test

If cloning the repository doesn't work, you can download the zip file:
- Click on the "Code" button and select "Download ZIP".
- Unzip the downloaded file and navigate into the unzipped directory:
  ```bash
  unzip Technical_Test.zip
  cd Technical_Test
   
2. Install dependencies:
   ```bash
    npm install

### Running the Application

1. Start the development server:
   ```bash
    npm start

2. Open your browser and navigate to 'http://localhost:3000' to view the application.

## Conclusion

This project was a fantastic opportunity to showcase my skills in React.js and frontend developpement. I hope you find my implementation meets the expectations set forth in the technical test instructions.

If you have any questions or need further clarification, feel free to reach out.

Thank you for reviewing my submission!






  


