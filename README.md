# gulp-jsx-mini
gulp jsx plugin with no extra dependencies

## Example:
transform jsx file in jsx folder to js file in js folder
```javascript
const jsxPlugin = require("gulp-jsx-mini")

function jsx() {
    return src("jsx/*.jsx")
        .pipe(jsxPlugin())
        .pipe(renamePlugin((path)=> {
            path.extname = ".js"
        }))
        .pipe(dest("js"))
}

```
