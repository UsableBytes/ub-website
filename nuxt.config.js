module.exports = {

    build: {
    /*
     ** Run ESLint on save
     */
        extend(config, ctx) {
            if (ctx.dev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
                // config.module.rules.push({
                //     enforce: 'pre',
                //     test: /\.html$/,
                //     loader: 'html-loader',
                //     query: {
                //         attrs: 'img:srcset'
                //     }
                // });
            }
        }
        // loaders: [{
        //     test: /\.html$/,
        //     loader: 'vue-html-loader',
        //     query: {
        //         attrs: 'img:src img:srcset'
        //     }
        // },
        // {
        //     test: /\.(png|jpg)$/,
        //     loader: 'file-loader'
        // }]
        // vue: {
        //     html: {
        //         query: { attrs: 'img:src img:srcset' }
        //     },
        //     loaders: 'html-loader'
        // }
    },
    loading: {
        name: 'circle',
        color: 'black',
        backgrround: 'white'
    },
    srcDir: 'src/views/',
    head: {
        titleTemplate: '%s - Usable Bytes',
        meta: [{
            charset: 'utf-8'
        },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
        }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Lato'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Roboto'
        }]
    },
    css: [
        '@/../assets/css/main.scss'
    ]
};
