const state = {
    star: {},
    stars: [],
    starsloading: true,
    pagination: []
};

const getters = {
    stars: state => state.stars,
    star: state => state.star
};

const actions = {
    async fetchStars({ commit }, { category, limit = false, page = 1 }) {
        commit("setStarsLoading", true);
        const response = await axios.get(`/api/stars`, {
            params: {
                ...(category ? { category: category } : {}),
                ...(page ? { page: page } : {}),
                ...(limit ? { limit: limit } : {})
            }
        });
        commit("setStars", response.data.data);
        commit("setPagination", response.data.meta);
        commit("setStarsLoading", false);
    },

    async fetchStar({ commit }, id) {
        commit("setStarsLoading", true);
        const response = await axios.get(`/api/star/${id}`);
        commit("setStar", response.data.data);
        commit("setStarsLoading", false);
    }
};

const mutations = {
    setStar: (state, star) => (state.star = star),
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
