const { fetchUserData } = require('../userData');

describe('fetchUserData', () => {
    test('fetch data for user 1', async () => {
        const data = await fetchUserData(1);
        expect(data).toEqual({name: 'John Doe', age: 39})
    })

    test('fetch data for user 2', async () => {
        const data = await fetchUserData(2);
        expect(data).toEqual({name: 'Jane Doe', age: 25})
    })

    test('throws an error for an unknown user', async () => {
        expect.assertions(1);
        try {
            await fetchUserData(3);
        } catch (error) {
            expect(error.message).toEqual("User not found");
        }
    })
})