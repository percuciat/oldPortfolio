const path = require('path'); // инициализируем метод path для упрощения поиска ПУТИ для файла

const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // инициализируем плагин для перенос CSS в отдельный ФАЙЛ

const HTMLWebpackPlugin = require('html-webpack-plugin'); // инициализируем установленный плагин HTML

const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // инициализируем установленный плагин JS

const CopyWebpackPlugin = require('copy-webpack-plugin'); // инициализируем плагин для статических данных

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // инициализируем плагин для сжатия CSS

const TerserPlugin = require('terser-webpack-plugin'); // инициализируем плагин для сжатия JS

const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer'); // инициализируем плагин для анализа webpack bundle

const autoprefixer = require('autoprefixer');

const isDev = process.env.NODE_ENV === 'development'; // проверка на режим сборки для hot module replacement (hmr)
const isProd = !isDev; // для улучшения взаимодействия в конфиге

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`; // функция фильтра по хэшу убирает в режиме dev

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all" // оптимизация скриптов (соединение общих библиотек - jquery), создание vendor
        }
    };
    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin()
        ]
    }
    return config
};

const plugins = () => { // добавление webpack-analyzer только в моде production
    const base = [
        new HTMLWebpackPlugin({
            template: "./index.html",
            minify: {
                collapseWhitespace: isProd // сжать если включен режим build
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'), // откуда копируем фавИконку
                    to: path.resolve(__dirname, 'public')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ];
    if (isProd) {
        base.push(new BundleAnalyzerPlugin())
    }
    return base
};

const babelOption = preset => { // оптимизация добавления пресета в babel как в CSS
    const options = {
        presets: [
            '@babel/preset-env',
        ],
        plugins: [
            'babel-plugin-styled-components',
            '@babel/plugin-proposal-class-properties',
        ],
    };
    if (preset) {
        options.presets.push(preset)
    }
    return options
};

const jsLoader = () => { // оптимизация добавления eslint только в режиме разработки для расширения .js
    const loaders = [
        {
            loader: 'babel-loader',
            options: babelOption()
        }
    ];
    return loaders
};

const cssLoader = extensions => { // функция для компактности кода, добавляет loader в зависимости от препроцессора
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: isDev, // изменение сущности без перезагрузки страницы
                reloadAll: true
            },

        },
        'css-loader'
    ];

    if (extensions) {
        loaders.push(extensions)
    }
    return loaders
};


module.exports = {
    context: path.resolve(__dirname, 'src'),

    mode: "development", // указываем мод сборки (production - сжимает все)

    optimization: optimization(),

    devtool: isDev ? 'source-map' : '', // отображает map

    entry: { // входной файл
        main: ['@babel/polyfill', './index.js'],
    },

    output: {
        filename: filename('js'), // название выходного файл
        path: path.resolve(__dirname, 'public')  // путь до папки с выходным файлом
    },

    resolve: {
        extensions: ['.js', '.json', '.png', '.jpg'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@': path.resolve(__dirname, 'src')
        }

    },
    plugins: plugins(),

    devServer: {
        port: 4200,
        historyApiFallback: true, // для правильной работы роутера (менять адрес вручную)
        hot: isDev
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(otf|ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.css$/,
                use: cssLoader()
            },
            /*{
                test: /\.s[ac]ss$/, // устанавливаем модуль для scss и sass
                use: cssLoader('sass-loader')
            },*/
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev, // изменение сущности без перезагрузки страницы
                            reloadAll: true
                        },
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers:['ie >= 8', 'last 4 version']
                                })
                            ],
                        }
                    },
                    {
                        loader: 'sass-loader',
                    }
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, // папка исключения для компилятора
                use: jsLoader()
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/, // папка исключения для компилятора
                loader: {
                    loader: 'babel-loader',
                    options: babelOption('@babel/preset-react')
                }
            }
            /*{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }*/
        ]
    },
};