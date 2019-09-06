const through = require("through2")
const babelCore = require("@babel-core")
const jsxPlugin = require("@babel/plugin-transform-react-jsx") 

module.exports = transformJsxPlugin

function transformJsxPlugin(options) {
    options = options || {}
    return through.obj(async (file, encoding, callback) {
        const result = await transformJsx(file)
        callback(null, result))
    })
}

async function transform_jsx(str) {
    const result = await babelCore.transformAsync(str, {
        plugins: [jsxPlugin]
        })
    return result.code
}
