export default function isSubscribed({ next, Store }) {
    if (!Store.getters.auth.isSubscribed) {
        return next({
            name: "dashboard"
        });
    }

    return next();
}
