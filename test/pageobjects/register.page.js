const Page = require('./page');

class RegisterPage extends Page {
    get fullName() {return $('#fullName')}
    get spanFullName() {return $('#spanFullName')}
    get email() {return $('#email')}
    get spanEmail() {return $('#spanEmail')}
    get password() {return $('#password')}
    get spanPassword() {return $('#spanPassword')}
    get confirmPassword() {return $('#confirmPassword')}
    get spanConfirmPassword() {return $('#spanConfirmPassword')}
    get resetBtn() {return $('form button[type="reset"]')}
    get submitBtn() {return $('form button[type="submit"]')}
    get loginBtn() {return $('#btn2*=Log in')}
    get error() {return $('#error')}

    open(){
        super.open('public/register.html')
    }

    submit(){
        this.submitBtn.click()
    }

    reset(){
        this.resetBtn.click()
    }

    login(){
        this.loginBtn.click()
    }
}

module.exports = new RegisterPage();