
export const addUser = (firstName, lastName) => ({
    type: 'ADD_USER',
    payload: {firstName, lastName}
})
