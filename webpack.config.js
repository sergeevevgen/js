const path = require("path");

module.exports = {
    //mode - разработка (еще есть продакшн)
    mode: "development",
    //вход
    entry: "./src/index.js",
    //выход - где хранится мэйн js
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },

    //для разработки (порт)
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 9000,
    },
};