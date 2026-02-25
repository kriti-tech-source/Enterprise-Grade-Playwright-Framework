import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

test('Complete Checkout Flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addItemToCart(0);
  await inventoryPage.goToCart();

  await cartPage.proceedToCheckout();

  await checkoutPage.fillDetails('Kriti', 'Sharma', '110001');
  await checkoutPage.finishOrder();

  await expect(checkoutPage.successMessage).toHaveText('Thank you for your order!');
});