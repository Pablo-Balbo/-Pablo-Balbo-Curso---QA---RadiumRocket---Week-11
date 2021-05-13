const Page = require('./page');

class LoginPage extends Page {
    get email() {return $('#email')}
    get spanEmail() {return $('#spanEmail')}
    get password() {return $('#password')}
    get spanPassword() {return $('#spanPassword')}
    get submitBtn() {return $('form button[type="submit"]')}
    get registerBtn() {return $('#btn2')}
    get error() {return $('#error')}

    open(){
        super.open('public/login.html')
    }

    submit(){
        this.submitBtn.click()
    }

    register(){
        this.registerBtn.click()
    }
}

module.exports = new LoginPage();