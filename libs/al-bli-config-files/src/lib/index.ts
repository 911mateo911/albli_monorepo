export type ConfigType = {
    ROUTES: { [key: string]: string }
}

export const CONFIG: ConfigType = {
    ROUTES: {
        GET_POST: '/post/:slug/:id',
        EDIT_POST: '/post/:id/edit',
        DELETE_POST: '/post/:id/delete',
        PUBLISH_POST: '/post/publish',
        FAVOURITE_POST: '/post/:id/favourite',
        SEARCH_POSTS: '/post/search',
        LOGIN_AUTH: '/user/login',
        LOGOUT_AUTH: '/user/logout',
        USER_REGISTER: '/user/register',
        USER_DELETE_ACCOUNT: '/user/delete',
        USER_EDIT_ACCOUNT: '/user/edit',
        LATEST_POSTS: '/post/latest'
    }
}
