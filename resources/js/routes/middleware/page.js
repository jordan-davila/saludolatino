export default function({ next, to, Store }) {
    // go tell the store to update the page
    Store.commit("setPage", to.name);
    return next();
}
