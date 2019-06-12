import { User } from './user';

export interface AuthenticationData {
    idUser?: number;
    login?: string;
    password?: string;
    user?: User;
}
