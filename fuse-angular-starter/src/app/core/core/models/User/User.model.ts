export interface User {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    userName: string;
    passwordhash: string;
    isActive: boolean;
    lastConnection: string | null;
    accessfailedCount: number;
    roleId: number;
}