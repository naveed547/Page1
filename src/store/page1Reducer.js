const initialState = {
    appName: 'page1',
};
export default {
    name: 'page1',
    state: { ...initialState },
    reducers: {
        setAppName: (state, appName) => ({ ...state, appName }),
    },
};