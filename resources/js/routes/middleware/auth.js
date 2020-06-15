export default function auth({ next, Store }) {
    if (!Store.getters.auth.loggedIn) {
        return next({
            // If not auth, redirect to login page
            name: "login"
        });
    }

    return next();
}
