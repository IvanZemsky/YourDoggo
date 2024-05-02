export interface UserSigninData {
   login: string
   password: string
}

export interface UserData {
   id: string;
   login: string;
}

export interface AuthErrorMessage {
   errorMessage: string | null;
}