
// Entities
export interface User {
  username: string,
  password: string,
  name: string
}

export interface LoginResponse {
  idToken: string,
  user: User
}

// State
export type AuthState = {
  readonly idToken: string | null,
  readonly userAuthorized: boolean,
  readonly user?: User
}

// Initialization
export const initialAuthState: AuthState = {
  idToken: null,
  userAuthorized: false,
  user: undefined
};
