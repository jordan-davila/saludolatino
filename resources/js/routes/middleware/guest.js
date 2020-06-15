export default function guest({ next, Store }) {
    if (Store.getters.auth.isLoggedIn) {
        return next({
            // If auth then redirect to dashboard
            name: "dashboard"
        });
    }

    return next();
}
