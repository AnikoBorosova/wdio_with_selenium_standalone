const registerPage = require("../pageObjects/Register.page");
const userData = require("../testData/userData").registerData;

const config = require("../../config");
const mainUrl = config.urls.main;

// randomize email address to make sure the testData is usable over and over again
const randomCharString = Math.random().toString(36).substr(2, 7);
const email = userData.email;
const emailSnippetArray = email.split("-");
emailSnippetArray.splice(1, 0, randomCharString);
userData.email = emailSnippetArray.join('');

describe("Test for registration process", () => {

	beforeAll(() => {
		browser.url(mainUrl);
		browser.maximizeWindow();
	});

	it("navigate to 'Sign in'page and check if it displays", () => {
		registerPage.doOpenSignInPage();
		expect(registerPage.createAccountHeadline.isDisplayed()).toBe(true);
	});

	it("creates account and check if it proceeds to registration form", () => {
		registerPage.doCreateAccount(userData.email);
		expect(registerPage.personalInfoHeadline.isDisplayed()).toBe(true);
	});

	it("adds correct registration data and validates that the process was successful", () => {
		registerPage.setRegistrationData(userData);
		expect(registerPage.welcomeHeadline.isDisplayed()).toBe(true);
	});
});