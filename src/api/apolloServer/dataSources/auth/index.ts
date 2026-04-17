import ParentClass from "../Main";

class Auth extends ParentClass {
  async signIn(args: { username: string; password: string }) {
    return this.post("auth/sign-in", { body: args });
  }

  async getUser() {
    return this.get("auth/user");
  }
}

export default Auth;
