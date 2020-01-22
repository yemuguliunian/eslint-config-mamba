module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        // 支持ES6语法
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            modules: true,
        },
    },
    plugins: ['@typescript-eslint'],
    // 以当前目录为根目录，不再向上查找 .eslintrc.js
    root: true,
    // http://eslint.cn/docs/rules/
    rules: {
        /**
         * 禁止函数的循环复杂度超过 20
         */
        complexity: [
            'error',
            {
                max: 20
            }
        ],
        /**
         * constructor 中必须有 super
         */
        'constructor-super': 'error',
        /**
         * switch 语句必须有 default
         */
        'default-case': 'warn',
        /**
         * 必须使用 === 或 !==，禁止使用 == 或 !=
         */
        eqeqeq: ['error', 'always'],
        /**
         * 禁止方向错误的 for 循环
         */
        'for-direction': 'error',
        /**
         * 代码块嵌套的深度禁止超过 5 层
         */
        'max-depth': ['error', 5],
        /**
         * 函数的参数禁止超过 3 个
         */
        'max-params': ['error', 3],
        /**
         * 禁止对已定义的 class 重新赋值
         */
        'no-class-assign': 'error',
        /**
         * 禁止条件表达式中出现赋值操作符
         */
        'no-cond-assign': 'error',
        /**
         * 禁止将常量作为分支条件判断中的测试表达式，但允许作为循环条件判断中的测试表达式
         */
        'no-constant-condition': [
            'error',
            {
                checkLoops: false
            }
        ],
        /**
         * 禁止对使用 const 定义的常量重新赋值
         */
        'no-const-assign': 'error',
        /**
         * 禁止 function 定义中出现重名参数
         */
        'no-dupe-args': 'error',
        /**
         * 禁止重复定义类的成员
         */
        'no-dupe-class-members': 'error',
        /**
         * 禁止对象字面量中出现重复的 key
         */
        'no-dupe-keys': 'error',
        /**
         * 禁止重复导入模块
         */
        'no-duplicate-imports': 'error',
        /**
         * 禁止出现空语句块
         */
        'no-empty': 'error',
        /**
         * 禁止解构赋值中出现空 {} 或 []
         */
        'no-empty-pattern': 'error',
        /**
         * 禁止使用 eval
         */
        'no-eval': 'error',
        /**
         * 禁止不必要的布尔转换
         */
        'no-extra-boolean-cast': 'error',
        /**
         * switch 的 case 内必须有 break, return 或 throw，空的 case 除外
         */
        'no-fallthrough': 'error',
        /**
         * 禁止对 function 声明重新赋值
         */
        'no-func-assign': 'error',
        /**
         * 禁止对全局变量赋值
         */
        'no-global-assign': 'error',
        /**
         * 禁止使用 label
         */
        'no-labels': 'error',
        /**
         * 禁止使用 new 来生成 String, Number 或 Boolean
         */
        'no-new-wrappers': 'error',
        /**
         * 禁止把全局对象作为函数调用
         */
        'no-obj-calls': 'error',
        /**
         * 禁止对函数的参数重新赋值
         */
        'no-param-reassign': 'error',
        /**
         * 禁止在 return 语句里赋值
         */
        'no-return-assign': ['error', 'always'],
        /**
         * 禁止在 return 语句里使用 await
         */
        'no-return-await': 'error',
        /**
         * 禁止将自己赋值给自己
         */
        'no-self-assign': 'error',
        /**
         * 禁止将自己与自己比较
         */
        'no-self-compare': 'error',
        /**
         * 禁止在数组中出现连续的逗号
         */
        'no-sparse-arrays': 'error',
        /**
         * 禁止在普通字符串中出现模版字符串里的变量形式
         */
        'no-template-curly-in-string': 'error',
        /**
         * 禁止在 super 被调用之前使用 this 或 super
         */
        'no-this-before-super': 'error',
        /**
         * 禁止 throw 字面量，必须 throw 一个 Error 对象
         */
        'no-throw-literal': 'error',
        /**
         * 禁止使用未定义的变量
         */
        'no-undef': 'error',
        /**
         * 禁止将 undefined 赋值给变量
         */
        'no-undef-init': 'error',
        /**
         * 禁止在 return, throw, break 或 continue 之后还有代码
         */
        'no-unreachable': 'error', 
        /**
         * 禁止在 in 或 instanceof 操作符的左侧变量前使用感叹号
         */
        'no-unsafe-negation': 'error',
        /**
         * 已定义的变量必须使用
         */
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'none',
                ignoreRestSiblings: false,
                caughtErrors: 'none'
            }
        ],
        /**
         * 变量必须先定义后使用
         */
        'no-use-before-define': [
            'error',
            {
                variables: false,
                functions: false,
                classes: false
            }
        ],
        /**
         * 禁止出现没必要的计算键名
         */
        'no-useless-computed-key': 'error',
        /**
         * 禁止出现没必要的字符串连接
         */
        'no-useless-concat': 'error',
        /**
         * 禁止解构赋值时出现同样名字的的重命名，比如 let { foo: foo } = bar;
         */
        'no-useless-rename': 'error',
        /**
         * 禁止使用 var
         */
        'no-var': 'error',
        /**
         * 必须使用模版字符串而不是字符串连接
         */
        'prefer-template': 'warn',
        /**
         * async 函数中必须存在 await 语句
         */
        'require-await': 'warn',
    },
}