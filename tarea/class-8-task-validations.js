function validateCity(city) {
    if (city.length === 0) {
        return 'You must select a city';
    } else {
        return '';
    }
}

function validateGiftDescription(description) {
    const LONG_VALUE = 100;
    const onlyNumbersLetters = /^[a-z0-9]*/i.test(description);

    if (description.length === 0) {
        return 'You must write what you would like to receive';
    } else if (description.length >= LONG_VALUE) {
        return 'The description must not exceed 100 characters';
    } else if (!onlyNumbersLetters) {
        return 'The description should only contain numbers and letters';
    } else {
        return '';
    }
}

