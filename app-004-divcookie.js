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
const consentPropertyName04 = 'jdc04_consent';

const shouldShowPopup04 = () => !storageType.getItem(consentPropertyName04);
const saveToStorage = () => storageType.setItem(consentPropertyName04, true);

window.onload = () => {
    const consentPopup = document.getElementById('consent-popup');
    const acceptBtn = document.getElementById('accept');

    const accptFn = event => {
        saveToStorage(storageType);
        consentPopup.classList.add('hidden');
    };

    acceptBtn.addEventListener('click', acceptBtn);

    if (shouldShowPopup04()) {
        consentPopup.classList.remove('hidden');
        }
};