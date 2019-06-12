import { User } from './user';
import { AuthenticationData } from './authenticationData';

export class UserDTO implements User {
    email?: string;
    firstName?: string;
    id?: number;
    lastName?: string;
    phoneNumber?: string;
    authenticationData?: AuthenticationData;
    type?: string;
}
