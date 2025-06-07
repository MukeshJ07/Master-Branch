const {LoginPage}= require('./LoginPage');
const {Cartsection} =require('./Cartsection');
class POManager {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.cartsection = new Cartsection(this.page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getCartsection() {
        return this.cartsection;
    }
}

module.exports = {POManager};