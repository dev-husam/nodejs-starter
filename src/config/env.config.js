const EnvVariables = {
    PORT: process.env.PORT || 3001,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    MONGO_URI: process.env.MONGO_URI,
    MONGO_USERNAME: process.env.MONGO_USERNAME,
    MONGO_PASS: process.env.MONGO_PASS,
    NODE_ENV: process.env.NODE_ENV,
    PAGE: process.env.PAGE,
    LIMIT: process.env.LIMIT
}

module.exports = EnvVariables