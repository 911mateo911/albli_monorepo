export const getValuePerBreakPoint = <T>(
    isTablet: boolean,
    isMobile: boolean,
    tabletValue: T,
    mobileValue: T): T => {
    if (isTablet) return tabletValue;
    if (isMobile) return mobileValue;
    return mobileValue
}
