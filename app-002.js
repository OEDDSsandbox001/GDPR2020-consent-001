const storageType = localStorage;
const consentPropertyName02 = 'jdc02_consent';

const shouldShowPopup02 = () => !storageType.getItem(consentPropertyName02);
const saveToStorage = () => storageType.setItem(consentPropertyName02, false);

window.onload = () => {
    if (shouldShowPopup02()) {
        const consent02 = confirm('agree to the TERMS & CONDITIONS of the site?');
        if (consent02) {
            saveToStorage();
        }
    }
};