interface ILogin {
  username: string;
  password: string;
}

interface ISignup {
  phone: string;
  password: string;
}

interface IVerifyUser {
  id: string;
  phone: string;
  iat?: number;
  exp?: number;
}

interface IJwtAccessTokenPayload {
  id: string;
  phone: string;
}

interface IVerifyAccessToken extends IJwtAccessTokenPayload {
  iat: number;
  exp: number;
}

interface IJwtRefreshTokenPayload extends IJwtAccessTokenPayload {}

interface IVerifyRefreshToken extends IJwtRefreshTokenPayload {
  iat: number;
  exp: number;
}

export {
  IJwtRefreshTokenPayload,
  ILogin,
  IJwtAccessTokenPayload,
  IVerifyRefreshToken,
  IVerifyAccessToken,
  ISignup,
  IVerifyUser,
};
