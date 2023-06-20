export interface User {
  role?: string;
  _id?: string;
  email: string;
  password: string;
  password2?: string;
  accessToken: string;
  refreshToken: string;
}
