/**
 * eslint配置项
 * root：限定配置文件的使用范围
 * extends：指定eslint规范
 * parser：指定eslint的解析器
 * parserOptions：设置解析器选项
 * env：指定代码运行的宿主环境
 * plugins：引用第三方的插件
 * globals：声明在代码中的自定义全局变量
 * rules：启用额外的规则或覆盖默认的规则
 */

/**
 * rule 中规则的开启关闭
 * off 或 0： 关闭规则
 * warn 或 1： 开启规则
 * error 或 2： 开启规则
 */

module.exports = {
    root: true,
    extends: 'airbnb',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            "jsx": true
        }
    },
    env: {
        es6: true,
        node: true,
        browser: true
    },
    plugins: [
        'react'
    ],
    rules: {
        'eqeqeq': 'warn', // 提示 === 与 ==
        'no-loop-func': 'off',
        'array-callback-return': 'off', // 箭头函数必须一个返回值
        'no-control-regex': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'no-multi-spaces': 'warn',
        'jsx-quotes': 'warn',
        'no-undef': 'error', // 不能有未定义的变量
        'no-unused-vars': 'off',
        'no-restricted-globals': 'warn', // 验证是否是全局变量
        'no-const-assign': 'error', // 禁止修改const声明的变量
        'no-delete-var': 'error', // 不能对var声明的变量使用delete操作符
        'no-dupe-keys': 'error', // 在创建对象字面量时不允许键重复 {a:'warn',a:'warn'}
        'no-dupe-args': 'error', // 函数参数不能重复
        'no-duplicate-case': 'error',// switch中的case标签不能重复
        'no-func-assign': 'error', // 禁止重复的函数声明
        'no-invalid-regexp': 'error', // 禁止无效的正则表达式
        'no-multiple-empty-lines': [1, {'max': 2}], // 空行最多不能超过2行
        'default-case': 'off', // switch语句最后必须有default
        'jsx-a11y/alt-text': 'off', //  img 必须有一个alt
        'no-script-url': 'off', // 无效的URL引用
        'radix': 'off', //  parseInt Missing radix parameter
        'react/jsx-tag-spacing': 'warn', // 总是在自动关闭的标签前加一个空格，正常情况下也不需要换行
        'react/jsx-closing-bracket-location': 'warn', // 遵循JSX语法缩进/格式
        'react/jsx-boolean-value': 'warn', // 如果属性值为 true, 可以直接省略
        'react/no-string-refs': 'off', // 总是在Refs里使用回调函数
        'react/jsx-key': 'warn', // map key值
        'react/jsx-uses-vars': 'warn', // 引用的组件没有使用
        'jsx-a11y/anchor-has-content': 'off', // 锚链节必须有内容
        'no-console': 'warn', // 对打印日志的检索
        'react-hooks/exhaustive-deps': 'off',
        '@typescript-eslint/no-namespace': 'off',
        "@typescript-eslint/consistent-type-assertions": 'off'
    }
}
