const state = {
    user: {
        isLoggedIn: false,
        isSubscribed: false
    }
};

const getters = {
    auth: state => state.user
};

const actions = {
    // async fetchUser({ commit }) {
    //     const response = await axios.get(`/api/user`);
    //     commit("setCities", response.data);
    // }
};

const mutations = {
    setUser: (state, user) => (state.user = user)
};

export default {
    state,
    getters,
    actions,
    mutations
};
