function validateNotEmpty(value, message) {
    if (value.length === 0) {
        return message;
    }
    return '';
}

function validateCity(city) {
    return validateNotEmpty(city, 'You must select a city');
}

function validateGiftDescription(description) {
    return validateNotEmpty(description, 'You must write what you would like to receive')
}

