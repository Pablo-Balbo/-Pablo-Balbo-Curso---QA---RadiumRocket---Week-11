const LoginPage = require('../pageobjects/login.page');

describe('Testing Login page', () => {

    // Email

    describe('Check span: email', () => {
        it('Check if error span email is displayed', () => {
            LoginPage.open();
            LoginPage.email.addValue('Pablo');
            LoginPage.password.click();
    
            let isSpanEmailDisplayed = LoginPage.spanEmail.isDisplayed();
            expect(isSpanEmailDisplayed).toBeTrue;
        });
    
        it('Check email validation message with a string', () => {
            LoginPage.open();
            LoginPage.email.addValue('Pablo');
            LoginPage.password.click();
    
            let spanEmailValue = LoginPage.spanEmail.getText();
            expect(spanEmailValue).toBe('Enter A Valid Email');
        });
    
        it('Check email validation message with a number', () => {
            LoginPage.open();
            LoginPage.email.addValue('6');
            LoginPage.password.click();
    
            let spanEmailValue = LoginPage.spanEmail.getText();
            expect(spanEmailValue).toBe('Enter A Valid Email');
        });
    
        it('Check email validation message with a blank space', () => {
            LoginPage.open();
            LoginPage.email.addValue(' ');
            LoginPage.password.click();
    
            let spanEmailValue = LoginPage.spanEmail.getText();
            expect(spanEmailValue).toBe('Enter A Valid Email');
        });
    
        it('Check if error span email is not displayed', () => {
            LoginPage.open();
            LoginPage.email.addValue('pablo@balbo.com');
            LoginPage.password.click();
    
            let isSpanEmailDisplayed = LoginPage.spanEmail.isDisplayed();
            expect(isSpanEmailDisplayed).toBeFalse;
        });
    });

    // Password

    describe('Check span: password', () => {
        it('Check if error span password is displayed', () => {
            LoginPage.open();
            LoginPage.password.addValue('pablo');
            LoginPage.email.click();
    
            let isSpanPasswordDisplayed = LoginPage.spanPassword.isDisplayed();
            expect(isSpanPasswordDisplayed).toBeTrue;
        });
    
        it('Check first password validation message with 5 characters', () => {
            LoginPage.open();
            LoginPage.password.addValue('pablo');
            LoginPage.email.click();
    
            let spanPasswordValue = LoginPage.spanPassword.getText();
            expect(spanPasswordValue).toBe('Password Must Have At Least 8 Characters');
        });
    
        it('Check second password validation message with 6 numbers', () => {
            LoginPage.open();
            LoginPage.password.addValue('123456');
            LoginPage.email.click();
    
            let spanPasswordValue = LoginPage.spanPassword.getText();
            expect(spanPasswordValue).toBe('Password Must Have At Least 8 Characters');
        });
    
        it('Check first email validation message with a blank space', () => {
            LoginPage.open();
            LoginPage.password.addValue(' ');
            LoginPage.email.click();
    
            let spanPasswordValue = LoginPage.spanPassword.getText();
            expect(spanPasswordValue).toBe('Password Must Have At Least 8 Characters');
        });
    
        it('Check first email validation message with an string, a number and a @', () => {
            LoginPage.open();
            LoginPage.password.addValue('pablo@6');
            LoginPage.email.click();
    
            let spanPasswordValue = LoginPage.spanPassword.getText();
            expect(spanPasswordValue).toBe('Password Must Have At Least 8 Characters');
        });
    
        it('Check second email validation message with at least 8 characters', () => {
            LoginPage.open();
            LoginPage.password.addValue('pablobalbo');
            LoginPage.email.click();
    
            let spanPasswordValue = LoginPage.spanPassword.getText();
            expect(spanPasswordValue).toBe('Enter A Lowercase, An Uppercase And A Number');
        });
    
        it('Check second email validation message with at least 8 numbers', () => {
            LoginPage.open();
            LoginPage.password.addValue('123456789');
            LoginPage.email.click();
    
            let spanPasswordValue = LoginPage.spanPassword.getText();
            expect(spanPasswordValue).toBe('Enter A Lowercase, An Uppercase And A Number');
        });
    
        it('Check second email validation message with no uppercase', () => {
            LoginPage.open();
            LoginPage.password.addValue('pablo6balbo');
            LoginPage.email.click();
    
            let spanPasswordValue = LoginPage.spanPassword.getText();
            expect(spanPasswordValue).toBe('Enter A Lowercase, An Uppercase And A Number');
        });
    
        it('Check second email validation message with no lowercase', () => {
            LoginPage.open();
            LoginPage.password.addValue('PABLO6BALBO');
            LoginPage.email.click();
    
            let spanPasswordValue = LoginPage.spanPassword.getText();
            expect(spanPasswordValue).toBe('Enter A Lowercase, An Uppercase And A Number');
        });
    
        it('Check second email validation message with no number', () => {
            LoginPage.open();
            LoginPage.password.addValue('PabloBalbo');
            LoginPage.email.click();
    
            let spanPasswordValue = LoginPage.spanPassword.getText();
            expect(spanPasswordValue).toBe('Enter A Lowercase, An Uppercase And A Number');
        });
    
        it('Check if error span password is not displayed', () => {
            LoginPage.open();
            LoginPage.password.addValue('PabloBalbo6');
            LoginPage.email.click();
    
            let isSpanPasswordDisplayed = LoginPage.spanPassword.isDisplayed();
            expect(isSpanPasswordDisplayed).toBeFalse;
        });
    });

    // Buttons

    describe('Check buttons', () => {
        it('Check register button', () => {
            LoginPage.open();
            LoginPage.register();

            expect(browser).toHaveUrl('http://localhost:4000/public/register.html');
        });
        
        it('Check submit button', () => {
            LoginPage.open(); 
            LoginPage.email.addValue('pablo@balbo.com')
            LoginPage.password.addValue('asdQWE12');
            LoginPage.submit();
        
            const errorText = LoginPage.error.getText();
            expect(errorText).toBe('Please, check your data');
        });
    });
});