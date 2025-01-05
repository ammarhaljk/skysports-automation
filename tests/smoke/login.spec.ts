import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-objects/LoginPage';

test('User Login: Verify user can log in and reach the security check page', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Navigate to the login page
  await loginPage.navigateToLogin();

  // Perform login with valid credentials
  await loginPage.login('vobixav265@gholar.com', 'p455w0rd');

  // Verify login is successful by reaching the security check page
  const isSecurityCheckPage = await loginPage.isLoginSuccessful();
  expect(isSecurityCheckPage).toBeTruthy();
});
