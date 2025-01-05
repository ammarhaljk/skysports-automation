import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-objects/LoginPage';

test('User Login: Verify user can log in and reach the security check page', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLogin();

  await loginPage.login('vobixav265@gholar.com', 'p455w0rd');

  const isSecurityCheckPage = await loginPage.isLoginSuccessful();
  expect(isSecurityCheckPage).toBeTruthy();
});
