import { test, expect } from '@playwright/test';
import { ApiClient } from '../../utils/apiClient';
import { TestData } from '../../utils/testData';

test.describe('DummyJSON API Tests', () => {

  test('GET - List all products', async ({ request }) => {
    const api = new ApiClient(request);

    const response = await api.get('/products');

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.products.length).toBeGreaterThan(0);
  });

  test('POST - Create new product', async ({ request }) => {
    const api = new ApiClient(request);

    const response = await api.post('/products/add',TestData.products.createProduct);

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.title).toBe('Playwright Phone');
  });

  test('PUT - Update product', async ({ request }) => {
    const api = new ApiClient(request);

    const response = await api.put('/products/1',TestData.products.updateProduct);

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.title).toBe('Updated Playwright Phone');
  });

  test('DELETE - Delete product', async ({ request }) => {
    const api = new ApiClient(request);

    const response = await api.delete('/products/1');

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.isDeleted).toBe(true);
  });

});