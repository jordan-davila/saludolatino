const state = {
    page: "home",
    auth: {
        isLoggedIn: false,
        isSubscribed: false
    }
};

const getters = {
    auth: state => state.auth,
    page: state => state.page
};

const actions = {};

const mutations = {
    setAuth: (state, auth) => (state.auth = auth),
    setPage: (state, page) => (state.page = page)
};

export default {
    state,
    getters,
    actions,
    mutations
};
