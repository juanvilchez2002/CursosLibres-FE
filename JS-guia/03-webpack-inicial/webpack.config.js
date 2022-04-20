const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");

// configuración de webpack
// esto se ha de exportar
module.exports = {
    mode: 'development',

    output:{
        clean: true
    },

    module:{
        // reglas
        rules:[
            // apuntar los archivos html y llevarlo a la carpeta dist
            {
                test: /\.html$/, // expresión regular q busca archivos html
                loader: 'html-loader',
                options:{
                    sources: false
                }
            },
            {
                // regla para el css
                test: /\.css$/, // expresión regular q busca archivos css
                exclude: /style.css$/, 
                use: ['style-loader', 'css-loader']
            },
            {
                //
                test: /style.css$/,
                use: [MiniCssExtract.loader, 'css-loader']
            }
        ]
    },

    optimization:{},

    plugins:[
        new HtmlWebPack({
            title: 'Mi Webpack App', // cambiamos el titulo
            template: './src/index.html'
        }),

        new MiniCssExtract({
            filename: '[name].css',
            ignoreOrder: false
        })
    ],
}