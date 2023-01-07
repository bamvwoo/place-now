const createUniqueId = () => {
    return Number(Math.random()).toString(32).substring(2);
}

module.exports = {
    createUniqueId
}