export interface Role {
    id?: number;
    name?: RoleNum;
    description?: string;
}

export enum RoleNum {
    USER = 1,
    STAFF = 2,
    ADMIN = 3
}
