function validateCityTest() {
    console.assert(
        validateCity('') === 'You must select a city',
        'Validate city not valid that city field is not empty'
    )
}

function validateDescriptionTest() {
    console.assert(
        validateGiftDescription('') === 'You must write what you would like to receive',
        'Validate gift description not valid that description field is not empty'
    )

    console.assert(
        validateGiftDescription('asdfasdasdfasdfasdfasdfasdfsdfsdffasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfgdfgdfgdfasdfsdf') === 'The description must not exceed 100 characters',
        'Validate gift description not valid that description is not too long'
    )
}

validateCityTest();
validateDescriptionTest();

