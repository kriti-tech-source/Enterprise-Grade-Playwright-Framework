

import { APIRequestContext, expect } from '@playwright/test';
import { ENV } from '../config/env';
import { Logger } from '../utils/logger';

export class ApiClient {
  readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async get(endpoint: string) {
    Logger.info(`GET Request → ${endpoint}`);
    const response = await this.request.get(`${ENV.API_BASE_URL}${endpoint}`);
    Logger.info(`Response Status → ${response.status()}`);
    return response;
  }

  async post(endpoint: string, payload: any) {
    Logger.info(`POST Request → ${endpoint}`);
    const response = await this.request.post(`${ENV.API_BASE_URL}${endpoint}`, {
      data: payload
    });
    Logger.info(`Response Status → ${response.status()}`);
    return response;
  }

  async put(endpoint: string, payload: any) {
    Logger.info(`PUT Request → ${endpoint}`);
    const response = await this.request.put(`${ENV.API_BASE_URL}${endpoint}`, {
      data: payload
    });
    Logger.info(`Response Status → ${response.status()}`);
    return response;
  }

  async delete(endpoint: string) {
    Logger.info(`DELETE Request → ${endpoint}`);
    const response = await this.request.delete(`${ENV.API_BASE_URL}${endpoint}`);
    Logger.info(`Response Status → ${response.status()}`);
    return response;
  }
  
}