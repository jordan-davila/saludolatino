const state = {
    user: {
        isLoggedIn: false,
        isSubscribed: false
    },
    stars: [],
    starsloading: true,
    pagination: []
};

const getters = {
    auth: state => state.user
};

const actions = {
    async fetchStars({ commit }, { category, page = 1 }) {
        commit("setStarsLoading", true);
        const response = await axios.get(`/api/stars`, {
            params: {
                ...(category ? { category: category } : {}),
                ...(page ? { page: page } : {})
            }
        });
        commit("setStars", response.data.data);
        commit("setPagination", response.data.meta);
        commit("setStarsLoading", false);
    }
};

const mutations = {
    setUser: (state, user) => (state.user = user),
    setStars: (state, stars) => (state.stars = stars),
    setStarsLoading: (state, starsloading) => (state.starsloading = starsloading),
    setPagination: (state, pagination) => (state.pagination = pagination)
};

export default {
    state,
    getters,
    actions,
    mutations
};
