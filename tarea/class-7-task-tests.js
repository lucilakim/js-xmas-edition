function validateNotEmptyTest() {
    console.assert(
        validateNotEmpty('') === validateNotEmpty.message,
        'Validate that is not empty, not valid that it is not empty.'
    )
    console.assert(
        validateCity('') === 'You must select a city',
        'Validate city not valid that city field is not empty'
    )
    console.assert(
        validateGiftDescription('') === 'You must write what you would like to receive',
        'Validate gift description not valid that description field is not empty'
    )
}

validateNotEmptyTest();
