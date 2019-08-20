const path = require('path');
//entry -> output

//тут нужно сказать webpack'у что ему транслировать(интерпритировать? компилировать?) и куда

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },
    watch: true,

    module:{
        rules:[{
            //дружу webpack с babel
            //говорю ему: хэй, вебпак,
            loader: 'babel-loader', //через такую штуку
            test: /\.js$/, //бабли такие файлы
            exclude: /node_modules/ //но кроме тех, которые лежат здесь
        }]
    },
    //для удобного дебага в браузере(вместо моего кода не билеберда вебпаковская),
    //для продакшена не пойдет, ибо медленное
    devtool: 'cheap-module-eval-source-map',
    mode: "development",
    //удобный сервак, который сразу запускает webpack
    //но при этом bundle у него не физический, т.е. лежит в оперативе, а не в файле, чтобы быстрее работало
    devServer: {
        contentBase: path.join(__dirname, '/public')
    },
};