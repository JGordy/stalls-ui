module.exports = {
    env: {
        test: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        modules: 'commonjs',
                        debug: false
                    }
                ],
                '@babel/preset-flow',
                '@babel/preset-react'
            ],
            plugins: [
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-optional-chaining'
            ]
        },
        production: {
            presets: [
                ['@babel/preset-env', { modules: false }],
                '@babel/preset-flow',
                '@babel/preset-react',
            ],
            plugins: [
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-optional-chaining'
            ]
        },
        development: {
            presets: [
                ['@babel/preset-env', { modules: false }],
                '@babel/preset-flow',
                '@babel/preset-react'
            ],
            plugins: [
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-optional-chaining'
            ]
        }
    }
};