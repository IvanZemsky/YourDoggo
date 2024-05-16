export interface UserLoginData {
   login: string
   password: string
}

export interface IUserData {
   id: string;
   login: string;
}

export interface AuthErrorMessage {
   errorMessage: string | null;
}