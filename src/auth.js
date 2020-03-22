
export default {
    //deprecated
    getToken () {
        return localStorage.token
    },

    //deprecated
    getID() {
        return localStorage.id
    },

    logout (cb) {
        delete localStorage.token
        delete localStorage.id
        if (cb) cb()
        this.onChange(false)
    },

    //deprecated, use !!localStorage.token
    loggedIn () {
        return !!localStorage.token
    },

    onChange () {}
}
