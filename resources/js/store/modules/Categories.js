const state = {
    categories: []
};

const getters = {
    categories: state => state.categories
};

const actions = {
    async fetchCategories({ commit }, limit) {
        const response = await axios.get(`/api/categories`, {
            params: {
                ...(limit ? { limit: limit } : {})
            }
        });
        commit("setCategories", response.data.data);
    }
};

const mutations = {
    setCategories: (state, categories) => (state.categories = categories)
};

export default {
    state,
    getters,
    actions,
    mutations
};
