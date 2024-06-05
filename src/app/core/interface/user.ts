export interface User {
    id?: string;
    email?: string;
    password?: string;
    fullName?: string;
    active?: boolean;
    createdDate?: string;
    createdBy?: string;
    modifiedDate?: string;
    modifiedBy?: string;
    roleId?: number;
}
