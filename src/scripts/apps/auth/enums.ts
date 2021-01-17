export enum Actions {
    FETCH_CURRENT_USER = 'FETCH_CURRENT_USER',
    FETCH_CURRENT_USER_SUCCESS = 'FETCH_CURRENT_USER_SUCCESS',
    FETCH_CURRENT_USER_FAILED = 'FETCH_CURRENT_USER_FAILED'
}

export enum AccessType {
    NOT_REGISTERED = 'NOT_REGISTERED',
    AUTHORIZED_NO_PROFILE = 'AUTHORIZED_NO_PROFILE',
    AUTHORIZED = 'AUTHORIZED'
}