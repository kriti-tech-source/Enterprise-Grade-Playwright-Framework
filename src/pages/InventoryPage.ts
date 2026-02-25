import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly inventoryItems: Locator;
  readonly cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryItems = page.locator('.inventory_item');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addItemToCart(index: number) {
    await this.page.locator('.inventory_item button').nth(index).click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}