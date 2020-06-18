const state = {
    user: {
        isLoggedIn: false,
        isSubscribed: false
    },
    estrellas: []
};

const getters = {
    auth: state => state.user
};

const actions = {
    async fetchEstrellas({ commit }) {
        const response = await axios.get(`/api/estrellas`);
        commit("setEstrellas", response.data.data);
    }
};

const mutations = {
    setUser: (state, user) => (state.user = user),
    setEstrellas: (state, estrellas) => (state.estrellas = estrellas)
};

export default {
    state,
    getters,
    actions,
    mutations
};
