async function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = {
                1: { name: 'John Doe', age: 39 },
                2: { name: 'Jane Doe', age: 25 }
            };

            const user = users[userId];

            if (user) {
                resolve(user);
            } else {
                reject(new Error('User not found'));
            }
        }, 1000)
    })
}

module.exports = {fetchUserData}