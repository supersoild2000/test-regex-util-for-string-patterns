#Application Documentation
##Application Description:
The "Test regex util for string pattern validation" is a React web application designed to demonstrate and test the validation of input strings using regular expressions. Users can input a text string and adjust the minimum and maximum length constraints for the string. Upon submitting the form, the application validates the input text against a regex pattern that enforces certain criteria including lowercase letters, uppercase letters, digits, and special characters. The application then displays whether the input text meets the validation criteria or not.
##Regex Implementation Description:
The core functionality of the application revolves around the `validateStringByRegex` function. This function takes three arguments: the input text to be validated, the minimum allowable length, and the maximum allowable length. It first checks if the provided minimum and maximum lengths are safe integers to avoid issues with regex. Next, it ensures that the minimum length is not greater than the maximum length. It then constructs a regex pattern that enforces a combination of lowercase letters, uppercase letters, digits, and special characters. The pattern is applied to the input text to determine its validity. If the input text matches the pattern, the function returns true, indicating that the text is valid according to the defined criteria; otherwise, it returns false.
##Running the Application Locally:

1. Clone the repository or download the source code for the application.
2. Navigate to the root directory of the project in your terminal.
3. Run `npm install` or `yarn install` to install the required dependencies.
4. Run `npm start` or `yarn start` to start the development server.
5. Open your web browser and go to http://localhost:3000 to access the application.

## Running Tests for validateStringByRegex Locally:

To run the validateStringByRegex function locally, you can follow these steps:

1. Navigate to the root directory of the project in your terminal.
2. Execute the tests by running the following command (script):
   `yarn test`

Each test case within the suite assesses a specific scenario based on the requirements of the validateStringByRegex function. By executing these tests, you can ensure that the function works as intended and accurately validates strings against the specified criteria.
