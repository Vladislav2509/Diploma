export interface User {
  id: number;
  email: string;
  username: string;
}

export interface AuthTokens {
  access: string;
  refresh: string;
}
