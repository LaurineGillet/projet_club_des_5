export interface User {
    id?: number;
    email: string;
    username?: string;
    roles?: [];
    password: string;
    salt?: boolean;
    createdDate?: Date;
    updatedDate?: Date;
    name?: string;
    avatar?: string;
    isActif?: boolean;
    categories?: [];

    password_confirmation?: string;

}
