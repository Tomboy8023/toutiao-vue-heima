module.exports = {
    // 配置要使用的postcss插件
    plugins: {
        // 配置使用postcss-pxtorem插件
        'postcss-pxtorem': {
            // lib-flexible的REM适配方案：把一行分为10份，每份就是十分之一
            // 所以rootValue应该设置为设计稿宽度的十分之一（设计稿一般是基于iPhone SE width: 375）
            // 如果我们的设计稿是750，那么也要设置为37.5，因为vant建议设置37.5，vant基于37.5编写
            // 缺点：使用750的设计稿，尺寸都需要去除 2
            // 怎么实现直接写宽高尺寸，不用手动除 2
            // vant的样式用37.5来渲染，我们自己的样式用75来渲染
            // 通过查阅文档，我们发现rootValue支持两种类型：Number | Function(动态返回)
            // rootValue: 37.5,
            rootValue({ file }) {  // 参数解构
                // PostCSS-pxtorem处理每个CSS文件时都会来调用这个函数
                // PostCSS-pxtorem会把被处理的css文件的相关信息通过参数传递给rootValue()
                return file.indexOf("node_modules\\vant") !== -1 ? 37.5: 75
            },
            // 配置要转换的CSS属性
            // *表示所有
            propList: ['*'],
        },
    },
    // 配置autoprefixer：生成浏览器CSS样式规则前缀
    // 'autoprefixer': {
        // 配置要兼容的环境信息
        // browsers: ['Android >= 4.0', 'iOS >= 8.0']
    // }
    // Vue CLI内部已经配置了autoprefixer插件，这里我们不注释的话，就配置重复，冲突了
};