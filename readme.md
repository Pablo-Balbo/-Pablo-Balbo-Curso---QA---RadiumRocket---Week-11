Week 11:
This week I put up a server using NodeJs.
The modifications made in the frontend can be viewed in the files corresponding to the repository from the previous week. below the link:
https://github.com/Pablo-Balbo/Curso---QA---RadiumRocket---Week-9-and-10.git

Week 14:
finally I finished my form project, modifying those validations that did not fulfill its purpose.
The "public" folder was added to this repository, which contains the .html files "register.html" and "login.html", their respective style.css files, in addition to the validations made in JavaScript files.
There is also a file called "test Functions.js" which will be used to include all the desired functions, export them and import them in the "register.js" and "login.js" files. At the moment, this file does not have any functionality, but it will be attached to the code to optimize it later.
Test files were also added to the spec folder, located in the test folder. They are called "login.js", "register.js" and "e2eTest.js".
In addition to these tests, PageObjects were created, a global one called "page.js", one for the registration form, called "register.page.js", and another for the login form, called "login.page.js. ". In them are all the selectors used in the test cases.
To run the tests, we must first start the server with the command "npm run dev", or "npm run start" (I recommend the first option). Then we will write the command "npm run test" to run the tests and we will wait for the final report indicating if the tests passed or failed.

Author: Pablo A. Balbo