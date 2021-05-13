const RegisterPage = require('../pageobjects/register.page');

describe('Testing Register page', () => {

    // fullName

    describe('Check span: fullName', () => {
        it('Check if error span fullName is displayed', () => {
            RegisterPage.open();
            RegisterPage.fullName.addValue('Pablo');
            RegisterPage.email.click();
    
            let isSpanFullNameDisplayed = RegisterPage.spanFullName.isDisplayed();
            expect(isSpanFullNameDisplayed).toBeTrue;
        });
    
        it('Check first fullName validation message', () => {
            RegisterPage.open();
            RegisterPage.fullName.addValue('Pablo');
            RegisterPage.email.click();
    
            let spanFullNameValue = RegisterPage.spanFullName.getText();
            expect(spanFullNameValue).toBe('Name Must Be More Than 6 Characters');
        });
    
            it('Check second fullName validation message', () => {
            RegisterPage.open();
            RegisterPage.fullName.addValue('PabloBalbo');
            RegisterPage.email.click();
    
            let spanFullNameValue = RegisterPage.spanFullName.getText();
            expect(spanFullNameValue).toBe('Name Must Have A Blank Space');
        });
    
            it('Check if error span fullName is not displayed', () => {
            RegisterPage.open();
            RegisterPage.fullName.addValue('Pablo Balbo');
            RegisterPage.email.click();
    
            let isSpanFullNameDisplayed = RegisterPage.spanFullName.isDisplayed();
            expect(isSpanFullNameDisplayed).toBeFalse;
        });
    });

    // email

    describe('Check span: email', () => {
        it('Check if error span email is displayed', () => {
            RegisterPage.open();
            RegisterPage.email.addValue('Pablo');
            RegisterPage.password.click();
    
            let isSpanEmailDisplayed = RegisterPage.spanEmail.isDisplayed();
            expect(isSpanEmailDisplayed).toBeTrue;
        });
    
        it('Check email validation message with a string', () => {
            RegisterPage.open();
            RegisterPage.email.addValue('Pablo');
            RegisterPage.password.click();
    
            let spanEmailValue = RegisterPage.spanEmail.getText();
            expect(spanEmailValue).toBe('Enter A Valid Email');
        });
    
        it('Check email validation message with a number', () => {
            RegisterPage.open();
            RegisterPage.email.addValue('6');
            RegisterPage.password.click();
    
            let spanEmailValue = RegisterPage.spanEmail.getText();
            expect(spanEmailValue).toBe('Enter A Valid Email');
        });
    
        it('Check email validation message with a blank space', () => {
            RegisterPage.open();
            RegisterPage.email.addValue(' ');
            RegisterPage.password.click();
    
            let spanEmailValue = RegisterPage.spanEmail.getText();
            expect(spanEmailValue).toBe('Enter A Valid Email');
        });
    
        it('Check if error span email is not displayed', () => {
            RegisterPage.open();
            RegisterPage.email.addValue('pabloabalbo@hotmail.com');
            RegisterPage.password.click();
    
            let isSpanEmailDisplayed = RegisterPage.spanEmail.isDisplayed();
            expect(isSpanEmailDisplayed).toBeFalse;
        });
    });

    // password

    describe('Check span: password', () => {
        it('Check if error span password is displayed', () => {
            RegisterPage.open();
            RegisterPage.password.addValue('pablo');
            RegisterPage.confirmPassword.click();
    
            let isSpanPasswordDisplayed = RegisterPage.spanPassword.isDisplayed();
            expect(isSpanPasswordDisplayed).toBeTrue;
        });
    
        it('Check first password validation message with 5 characters', () => {
            RegisterPage.open();
            RegisterPage.password.addValue('pablo');
            RegisterPage.confirmPassword.click();
    
            let spanPasswordValue = RegisterPage.spanPassword.getText();
            expect(spanPasswordValue).toBe('Password Must Have At Least 8 Characters');
        });
    
        it('Check second password validation message with 6 numbers', () => {
            RegisterPage.open();
            RegisterPage.password.addValue('123456');
            RegisterPage.confirmPassword.click();
    
            let spanPasswordValue = RegisterPage.spanPassword.getText();
            expect(spanPasswordValue).toBe('Password Must Have At Least 8 Characters');
        });
    
        it('Check first email validation message with a blank space', () => {
            RegisterPage.open();
            RegisterPage.password.addValue(' ');
            RegisterPage.confirmPassword.click();
    
            let spanPasswordValue = RegisterPage.spanPassword.getText();
            expect(spanPasswordValue).toBe('Password Must Have At Least 8 Characters');
        });
    
        it('Check first email validation message with an string, a number and a @', () => {
            RegisterPage.open();
            RegisterPage.password.addValue('pablo@6');
            RegisterPage.confirmPassword.click();
    
            let spanPasswordValue = RegisterPage.spanPassword.getText();
            expect(spanPasswordValue).toBe('Password Must Have At Least 8 Characters');
        });
    
        it('Check second email validation message with at least 8 characters', () => {
            RegisterPage.open();
            RegisterPage.password.addValue('pablobalbo');
            RegisterPage.confirmPassword.click();
    
            let spanPasswordValue = RegisterPage.spanPassword.getText();
            expect(spanPasswordValue).toBe('Enter A Lowercase, An Uppercase And A Number');
        });
    
        it('Check second email validation message with at least 8 numbers', () => {
            RegisterPage.open();
            RegisterPage.password.addValue('123456789');
            RegisterPage.confirmPassword.click();
    
            let spanPasswordValue = RegisterPage.spanPassword.getText();
            expect(spanPasswordValue).toBe('Enter A Lowercase, An Uppercase And A Number');
        });
    
        it('Check second email validation message with no uppercase', () => {
            RegisterPage.open();
            RegisterPage.password.addValue('pablo6balbo');
            RegisterPage.confirmPassword.click();
    
            let spanPasswordValue = RegisterPage.spanPassword.getText();
            expect(spanPasswordValue).toBe('Enter A Lowercase, An Uppercase And A Number');
        });
    
        it('Check second email validation message with no lowercase', () => {
            RegisterPage.open();
            RegisterPage.password.addValue('PABLO6BALBO');
            RegisterPage.confirmPassword.click();
    
            let spanPasswordValue = RegisterPage.spanPassword.getText();
            expect(spanPasswordValue).toBe('Enter A Lowercase, An Uppercase And A Number');
        });
    
        it('Check second email validation message with no number', () => {
            RegisterPage.open();
            RegisterPage.password.addValue('PabloBalbo');
            RegisterPage.confirmPassword.click();
    
            let spanPasswordValue = RegisterPage.spanPassword.getText();
            expect(spanPasswordValue).toBe('Enter A Lowercase, An Uppercase And A Number');
        });
    
        it('Check if error span password is not displayed', () => {
            RegisterPage.open();
            RegisterPage.password.addValue('PabloBalbo6');
            RegisterPage.confirmPassword.click();
    
            let isSpanPasswordDisplayed = RegisterPage.spanPassword.isDisplayed();
            expect(isSpanPasswordDisplayed).toBeFalse;
        });
    });

    // confirmPassword
    
    describe('Check span: confirmPassword', () => {
        it('Check if error span confirmPassword is displayed', () => {
            RegisterPage.open();
            RegisterPage.password.addValue('PabloBalbo6');
            RegisterPage.confirmPassword.click();
            RegisterPage.confirmPassword.addValue('pablo');
            RegisterPage.password.click();
    
            let isSpanConfirmPasswordDisplayed = RegisterPage.spanConfirmPassword.isDisplayed();
            expect(isSpanConfirmPasswordDisplayed).toBeFalse;
        });
    
        it('Check confirmPassword validation message with a string', () => {
            RegisterPage.open();
            RegisterPage.password.addValue('PabloBalbo6');
            RegisterPage.confirmPassword.click();
            RegisterPage.confirmPassword.addValue('pablo');
            RegisterPage.password.click();
    
            let spanConfirmPasswordValue = RegisterPage.spanConfirmPassword.getText();
            expect(spanConfirmPasswordValue).toBe('Passwords Do Not Match');
        });
    
        it('Check confirmPassword validation message with numbers', () => {
            RegisterPage.open();
            RegisterPage.password.addValue('PabloBalbo6');
            RegisterPage.confirmPassword.click();
            RegisterPage.confirmPassword.addValue('123456789');
            RegisterPage.password.click();
    
            let spanConfirmPasswordValue = RegisterPage.spanConfirmPassword.getText();
            expect(spanConfirmPasswordValue).toBe('Passwords Do Not Match');
        });
    
        it('Check confirmPassword validation message with a blank space', () => {
            RegisterPage.open();
            RegisterPage.password.addValue('PabloBalbo6');
            RegisterPage.confirmPassword.click();
            RegisterPage.confirmPassword.addValue(' ');
            RegisterPage.password.click();
    
            let spanConfirmPasswordValue = RegisterPage.spanConfirmPassword.getText();
            expect(spanConfirmPasswordValue).toBe('Passwords Do Not Match');
        });
    
        it('Check if error span confirmPassword is not displayed', () => {
            RegisterPage.open();
            RegisterPage.password.addValue('PabloBalbo6');
            RegisterPage.confirmPassword.click();
            RegisterPage.confirmPassword.addValue('PabloBalbo6');
            RegisterPage.password.click();
    
            let isSpanConfirmPasswordDisplayed = RegisterPage.spanConfirmPassword.isDisplayed();
            expect(isSpanConfirmPasswordDisplayed).toBeFalse;
        });
    });

    // Buttons

    describe('Check buttons', () => {
        it('Check login button', () => {
            RegisterPage.open();
            RegisterPage.login();

            expect(browser).toHaveUrl('http://localhost:4000/public/login.html');
        });
        
        it('Check submit button', () => {
            RegisterPage.open();
            RegisterPage.fullName.addValue('Pablo Balbo');  
            RegisterPage.email.addValue('pabloabalbo@hotmail.com')
            RegisterPage.password.addValue('asdQWE12');
            RegisterPage.confirmPassword.addValue('asdQWE12');
            RegisterPage.submit();

            const errorText = RegisterPage.error.getText();
            expect(errorText).toContain('Pablo Balbo: pabloabalbo@hotmail.com');
        });
    });
});