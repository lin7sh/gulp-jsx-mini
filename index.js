const through = require("through2")
const babelCore = require("@babel/core")
const jsxPlugin = require("@babel/plugin-transform-react-jsx") 
const { StringDecoder } = require("string_decoder")

const stringDecoder = new StringDecoder()
module.exports = transformJsxPlugin

function transformJsxPlugin(options) {
    options = options || {}
    return through.obj(async function (file, encoding, next) {
        const buffer = file.contents
        const text = stringDecoder.end(buffer)
        const result = await transformJsx(text)
        file.contents = Buffer.from(result)
        this.push(file)
        next()
    })
}

async function transformJsx(str) {
    const result = await babelCore.transformAsync(str, {
        plugins: [jsxPlugin]
        })
    return result.code
}
