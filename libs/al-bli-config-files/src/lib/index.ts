export enum RouteKeys {
    GET_POST = '/post/:slug/:id',
    EDIT_POST = '/post/:id/edit',
    DELETE_POST = '/post/:id/delete',
    PUBLISH_POST = '/post/publish',
    FAVOURITE_POST = '/post/:id/favourite',
    SEARCH_POSTS = '/post/search',
    LOGIN_AUTH = '/user/login',
    LOGOUT_AUTH = '/user/logout',
    USER_REGISTER = '/user/register',
    USER_DELETE_ACCOUNT = '/user/delete',
    USER_EDIT_ACCOUNT = '/user/edit',
    LATEST_POSTS = '/post/latest'
}

export enum POSTPARAMS {
    GET_POST_ID_KEY = 'postId'
}

export type ConfigType = {
    ROUTES: typeof RouteKeys,
    POSTPARAMS: typeof POSTPARAMS
}

export const CONFIG: ConfigType = {
    ROUTES: RouteKeys,
    POSTPARAMS
}
