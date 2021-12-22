export const mockApiCall = (callback: () => void, delay = 1200): void => {
    setTimeout(() => {
        callback();
    }, delay);
};
