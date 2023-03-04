const EnvVariables = require("../config/env.config");



function getSkip(limit, page) {
    if (page && page < 1) page = EnvVariables.PAGE
    page = page ? page : parseInt(EnvVariables.PAGE)
    limit = limit ? limit : parseInt(EnvVariables.LIMIT)
    return (page - 1) * limit
}

function getLimit(limit) {
    if (limit < 1) limit = 1
    limit = limit ? limit : parseInt(EnvVariables.LIMIT)
    return limit
}


module.exports = { getSkip, getLimit }