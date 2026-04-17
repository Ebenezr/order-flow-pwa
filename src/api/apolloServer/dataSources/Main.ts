import { RESTDataSource } from "@apollo/datasource-rest";
import type ContextValue from "../context";

class ParentClass extends RESTDataSource {
  contextValue: ContextValue;

  constructor(options: { contextValue: ContextValue }) {
    super();
    this.baseURL = process.env.API_ENDPOINT;
    this.contextValue = options.contextValue;
  }
}

export default ParentClass;
