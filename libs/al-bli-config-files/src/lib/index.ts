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
    LATEST_POSTS = '/post/latest',
    POST_ERROR = '/post-error-message'
}

export enum LOCALSTORE_KEYS {
    THEME = 'alBli-theme'
}

export enum POSTPARAMS {
    GET_POST_ID_KEY = 'postId'
}

export enum PUBLISH_POST_REQUEST_KEYS {
    TITLE = 'title',
    HAS_DEBATABLE_PRICE = 'debatablePrice',
    DESCRIPTION = 'description',
    IMAGES = 'images',
    LOCATION = 'location',
    PRICE = 'price',
    IS_IN_SALE = 'isInSale',
    IN_SALE_FOR = 'inSaleFor',
    ADVERT_INDEX = 'advertIndex',
    CATEGORY = 'category',
    SUB_CATEGORY = 'subCategory',
    KEYWORDS = 'keywords',
    TELEPHONE = 'telephone',
    WHATSAPP = 'whatsapp',
    EMAIL = 'email',
    DATE = 'date',
    SLUG = 'slug',
    SELLER_NAME = 'sellerName',
    CURRENCY = 'currency'
}

export type ConfigType = {
    ROUTES: typeof RouteKeys,
    POSTPARAMS: typeof POSTPARAMS
}

export const CONFIG: ConfigType = {
    ROUTES: RouteKeys,
    POSTPARAMS
}
