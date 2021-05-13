const LoginPage = require('../pageobjects/login.page');
const RegisterPage = require('../pageobjects/register.page');

describe('End to end tests', () => {
    describe('Check project working correctly', () => {
        it('Register a new user and login', () => {
            RegisterPage.open();
            RegisterPage.fullName.addValue('Pablo Andres');  
            RegisterPage.email.addValue('pablouyp6@gmail.com')
            RegisterPage.password.addValue('asdQWE12');
            RegisterPage.confirmPassword.addValue('asdQWE12');
            RegisterPage.submit();
            LoginPage.open(); 
            LoginPage.email.addValue('pablouyp6@gmail.com')
            LoginPage.password.addValue('asdQWE12');
            LoginPage.submit();
        
            const errorText = LoginPage.error.getText();
            expect(errorText).toBe('Login Success!');
        });
    });

    describe('Login with invalid email', () => {
        it('Register a new user', () => {
            RegisterPage.open();
            RegisterPage.fullName.addValue('Juan Perez');  
            RegisterPage.email.addValue('juanperez@hotmail.com')
            RegisterPage.password.addValue('asdQWE12');
            RegisterPage.confirmPassword.addValue('asdQWE12');
            RegisterPage.submit();
        });

        it('Enter login page', () => {
            LoginPage.open(); 
        });

        it('Enter an unregistred user', () => {
            LoginPage.email.addValue('perezjuan@hotmail.com')
            LoginPage.password.addValue('asdQWE12');
            LoginPage.submit();
        
            const errorText = LoginPage.error.getText();
            expect(errorText).toBe('Please, check your data');
        });
  
    });

    describe('Login with invalid password', () => {
        it('Register a new user', () => {
            RegisterPage.open();
            RegisterPage.fullName.addValue('Alberto Fernandez');  
            RegisterPage.email.addValue('albertofernandez@hotmail.com')
            RegisterPage.password.addValue('asdQWE12');
            RegisterPage.confirmPassword.addValue('asdQWE12');
            RegisterPage.submit();
        });

        it('Enter login page', () => {
            LoginPage.open(); 
        });

        it('Enter a wrong password', () => {
            LoginPage.email.addValue('albertofernandez@hotmail.com')
            LoginPage.password.addValue('asdasdQWE12');
            LoginPage.submit();
        
            const errorText = LoginPage.error.getText();
            expect(errorText).toBe('Please, check your data');
        });
    });
});