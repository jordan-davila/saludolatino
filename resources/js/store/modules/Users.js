const state = {
    user: {
        isLoggedIn: false,
        isSubscribed: false
    },
    stars: [],
    pagination: []
};

const getters = {
    auth: state => state.user
};

const actions = {
    async fetchStars({ commit }, { category, page = 1 }) {
        const response = await axios.get(`/api/stars`, {
            params: {
                ...(category ? { category: category } : {}),
                ...(page ? { page: page } : {})
            }
        });
        commit("setStars", response.data.data);
        commit("setPagination", response.data.meta);
    }
};

const mutations = {
    setUser: (state, user) => (state.user = user),
    setStars: (state, stars) => (state.stars = stars),
    setPagination: (state, pagination) => (state.pagination = pagination)
};

export default {
    state,
    getters,
    actions,
    mutations
};
