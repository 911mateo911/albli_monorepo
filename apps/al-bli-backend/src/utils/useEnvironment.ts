export const useEnvironment = <T, K>(returnInProd: T, returnInDev: K): T | K => {
    const environment = process.env.NODE_ENV as 'production' | 'development';

    if (environment === 'production') return returnInProd;

    return returnInDev;
}
