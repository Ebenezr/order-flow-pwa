import { NextRequest } from "next/server";
import { BaseContext } from "@apollo/server";
import Auth from "./dataSources/auth";

export default class ContextValue implements BaseContext {
  public req: NextRequest;
  public res: Response | null;
  public dataSources: {
    auth: Auth;
  };

  constructor({ req, res }: { req: NextRequest; res: Response | null }) {
    this.req = req;
    this.res = res;
    this.dataSources = {
      auth: new Auth({ contextValue: this }),
    };
  }
}
