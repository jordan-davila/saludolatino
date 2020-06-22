const state = {
    stars: [],
    starsloading: true,
    pagination: []
};

const getters = {
    stars: state => state.stars
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
