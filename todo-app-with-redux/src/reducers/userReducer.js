const initialState = {
    user: {
        username: 'Ada',
        email: 'ada@lovelace.com'
    }
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default userReducer;