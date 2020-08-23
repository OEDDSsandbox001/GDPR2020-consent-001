const cookieStorage = {
    getItem: (key) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[key];
    },
    setItem: (key, value) => {
        document.cookie = `${key}=${value}`;
    }
}

const storageType = cookieStorage;
const consentPropertyName03 = 'jdc03_consent';

const shouldShowPopup03 = () => !storageType.getItem(consentPropertyName03);
const saveToStorage = () => storageType.setItem(consentPropertyName03, true);

window.onload = () => {
    if (shouldShowPopup03()) {
        const consent03 = confirm('agree to the TERMS & CONDITIONS of the site?');
        if (consent03) {
            saveToStorage();
        }
    }
};