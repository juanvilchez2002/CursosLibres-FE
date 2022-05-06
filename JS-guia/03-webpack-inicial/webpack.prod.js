const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const CssMinimizer = require("css-minimizer-webpack-plugin");
const Terser = require("terser-webpack-plugin");

// configuración de webpack
// esto se ha de exportar
module.exports = {
    mode: 'production',

    output:{
        clean: true,
        filename: 'main.[contenthash].js'
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
            },
            {
                // imagen
                test: /\.(jpg?e|gif|png)/,
                use: 'file-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    },

    optimization:{
        minimize: true,
        minimizer: [
            new CssMinimizer(),
            new Terser(),
        ]
    },

    plugins:[
        new HtmlWebPack({
            title: 'Mi Webpack App', // cambiamos el titulo
            template: './src/index.html'
        }),

        new MiniCssExtract({
            filename: '[name].[fullhash].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns:[
            { from: 'src/assets', to: 'assets/' }
            ]}
          )
    ],
}