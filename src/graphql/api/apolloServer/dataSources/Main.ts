import { RESTDataSource, type AugmentedRequest } from "@apollo/datasource-rest";
import { randomUUID } from "crypto";
import type ContextValue from "../context";

class ParentClass extends RESTDataSource {
  contextValue: ContextValue;

  constructor(options: { contextValue: ContextValue }) {
    super();
    this.baseURL = process.env.API_ENDPOINT;
    this.contextValue = options.contextValue;
  }

  override willSendRequest(_path: string, request: AugmentedRequest) {
    request.headers = {
      ...request.headers,
      "X-Correlation-Id": randomUUID(),
    };

    const username = process.env.API_USERNAME;
    const password = process.env.API_PASSWORD;
    if (username && password) {
      const credentials = Buffer.from(`${username}:${password}`).toString("base64");
      request.headers.authorization = `Basic ${credentials}`;
    }
  }
}

export default ParentClass;
