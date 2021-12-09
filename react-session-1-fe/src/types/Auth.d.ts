interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface AuthResponse {
  jwt: string;
  user: User;
}

interface LoginPayload {
  identifier: string;
  password: string;
}

interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}
