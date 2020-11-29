import selenium from 'selenium-webdriver';

export const isMatch = (actual, expected) => {
    if (Array.isArray(expected)) {
        return expected.includes(actual)
    } 
    return actual === expected
}
