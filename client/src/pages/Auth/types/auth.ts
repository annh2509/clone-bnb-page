export interface ILogin {
  username: string;
  password: string;
}

export interface ISignup {
  phone: string;
  password: string;
}

export interface IAuth {
  accessToken: string;
  user: {
    id: string;
    phone: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface FieldTypeAuthForm {
  phoneNumber: string;
  password: string;
}

export enum AuthType {
  LOGIN = "login",
  SIGNUP = "signup",
}
