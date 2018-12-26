# bhs

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 整站使用rem相对长度单位，设计稿以750px为基准，页面元素为其设计稿的 （px值/100）rem

############################### 公共方法 ####################################

# ￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥

# this.$global.myAjax(this, 'post', 'ucenter/wx/appLogin', data, '成功回执', '失败回执')  异步请求数据 一级接口（不需登录）
# this.$global.myAjax2(this, 'post', 'ucenter/wx/appLogin', data, '成功回执', '失败回执')  异步请求数据 二级接口（需要登录）
# this.$global.myAjaxLogin(this, 'post', 'ucenter/wx/appLogin', data, '成功回执', '失败回执')  异步请求数据 登录接口触发

# this.$global.setCookie('test', 1111)                  设置cookie缓存
# this.$global.getCookie('test')                        获取cookie缓存
# this.$global.delCookie('test')                        清除cookie缓存

# this.$global.setStorage('test', 1111)                 设置local storage缓存
# this.$global.getStorage('test')                       获取local storage缓存

# this.$global.enCode(text)                             code编码
# this.$global.unCode(text)                             code解码

# this.$global.getAesKey(16)                            生成随机数
# this.$global.getEncryptKey(this, aesKey)              生成密钥
# this.$global.getEncryptData(this, '', aesKey)         AES加密数据-微信授权登录
# this.$global.getSign(this, message, key)              生成签名

# this.$global.aesData (word, key)                      AES加密数据
# this.$global.deAesData (this, word)                   AES解密数据

# this.$global.getAgent()                               获取当前设备agent
# this.$global.getUrlString(text)                       获取url中参数值
# this.$global.changeLoading(this, type)                loading 弹窗控制 type 0隐藏 1显示
# this.$global.showToast(this, text)                    toast 弱提示弹窗控制 text 提示文案

# this.$global.showLoginbox (this, type)                登录弹窗控制 0 关闭 1 开启
# this.$global.changeFootTab (this, type)               底部主导航控制 index nearby cart mine

# npm install vue-wechat-title --save  设置页面标题

# vue中后退操作如何刷新页面
# 开启keep-alive的时候，页面第一次进入，钩子的触发顺序created-> mounted-> activated，退出时触发deactivated。当再次进入（前进或者后退）时，只触发activated。把列表页获取数据的接口请求由放在mounted里改为放在activated即可。

################################### 常用规范 ###################################
################### 提交代码前，务必使用useEslint检测全部通过 ##################

###### 命名规则
    ### （文件名）
        全部采用小写方式， 以下划线分隔。
    	例：account_model.js、retina_sprites.css、detail_report.html、company_logo.png
    ### (class属性名)
        全小写，用中杠“-”做分隔符
        例：<view class="hello-world">...</view>
    ### (id属性名)
        **驼峰式命名**，命名语义化, 尽可能利用英文单词或其缩写
        例：<text class="myDialog">...</text>
    ### (js变量名)
        **驼峰式命名**，要求变量集中声明, 避免全局变量。
        例：let infoId36 = "";

###### html 语法规则
    1. 缩进使用soft tab（4个空格）
    2. 嵌套的节点应该缩进；
    3. 属性全部使用双引号 “”；
    4. 属性名全小写，用中杠“-”做分隔符；
        例：<h1 class="hello-world">...</h1>
    5. 自动闭合标签不使用斜线；
        例：<img src="images/company_logo.png" alt="Company">
            <input type="text">
    6. 属性顺序
        class > id > name > data-*	> (src、type、href、value、max-length) > (placeholder、title、alt) > (readonly、disabled)
        例：<a class="hello-world" id="my-name" data-modal="toggle" href="/post/" title="你好">内容</a>
    7. boolean属性不需声明取值的属性
        checked、selected、disabled、readonly、autocomplete、autoplay、loop、muted、preload、autofocus、required、open
        例：<input type="text" disabled>
    8. html代码应尽量避免多余的父节点，用尽量小的复杂度和尽量少的标签来解决问题。

###### css 语法规则
    1. 缩进使用soft tab（4个空格）；
    2. 每个属性声明末尾都要加分号；
    3. 空格的使用：
        ● 属性值前
        ● 选择器'>', '+', '~'前后
        ● '{'前、
        ● 属性值中的','后
        ● 注释'/*'后和'*/'前
        ● !important '!'前需加空格
        例：
            .element > .dialog {
                color: red !important;
                background-color: #fff;
            }
            /* good css */
    4. 换行的使用：
        ● '{'后和'}'前
        ● 每个属性独占一行
        ● 当一个 rule 包含多个 selector 时每个选择器声明必须独占一行
        例：
            .post,
            .page,
            .comment {
                color: red;
                background-color: #000;
            }
    5. 引号的使用：
        ● 最外层统一使用双引号；
        ● 属性选择器中的属性值使用双引号；
        ● font-family属性中有空格时需用双引号包起；
        ● url的内容不加引号；(不加，不加，不加)；
        ● 文本内容必须用双引号包围；
        例：
            li[data-type="single"] {
                content: "";
                background-image: url(logo.png);
                font-family: "Microsoft YaHei", Arial, sans-serif;
            }
    6. 空行的使用：
        ● 文件最后保留一个空行
        ● '}'后最好跟一个空行
        ● 属性之间需要适当的空行，规则见下面7
    7. 属性书写顺序
        按功能进行分组排序： Formatting Model（布局方式、位置） > Box Model（尺寸） > Typographic（文本相关） > Visual（视觉效果）组之间建议有一个空行。
        ● Formatting Model：position、top、right、bottom、left、float、display、overflow
        ● Box Model：border、margin、padding、width、height
        ● Typographic：font 、line-height、text-align、word-wrap
        ● Visual：background、color、transition、list-style
    8. 强制
        ● 选择器的嵌套层级不大于 5 级；
        ● 当数值为 0 - 1 之间的小数时，省略整数部分的 0
            例：opacity: .8;
        ● 长度为 0 时须省略单位
            例：padding: 0 5px;
        ● 颜色值必须使用十六进制小写字母，带有alpha的颜色可以使用 rgba()，每个逗号后必须保留一个空格
            例：box-shadow: 0 0 2px rgba(0, 128, 0, .3);
                    border-color: #008000;
        ● 颜色值可以缩写时，必须使用缩写形式
            例：background-color: #f00;
        ● 颜色值不允许使用命名色值(red、black、white) 不允许、不允许、不允许
        ● 需要在 Windows 平台显示的中文内容，其字号不小于 12px
        ● 不允许有空的规则；
            .element {
            }
        ●
        ●

    9. 建议
        ● 可以使用缩写的情况下，尽量使用属性缩写
            例：font: 12px/1.5 arial, sans-serif;
                    border: 1px solid #fff;
                    margin: 0 auto;
                    padding: 5px 0 8px;
        ● 不使用 !important 声明
        ● 带私有前缀的兼容性属性由长到短排列，按冒号位置对齐，且无前缀的标准属性应该写在有前缀的属性后面；
                    -webkit-box-sizing: border-box;
                        -moz-box-sizing: border-box;
                                   box-sizing: border-box;
        ● 用 border: 0; 代替 border: none;
        ● 尽量少用'*'选择器
    10. 命名
        ● class 类名使用小写字母，以中划线分隔 例：.element-content
        ● id采用驼峰式命名 例：#myDialog
    11. 媒体查询
        媒体查询的规则不得单独编排，必须与相关的规则一起定义
        例：
        /* main styles */
        @media (...) {
            /* main styles */
        }

###### JavaScript 规范

    1. 文件编码统一为 **utf-8**，书写过程过，每行代码结束必须有分号。
    2. 引入JS库：若需引入第三方库, 须与团队其他人员讨论决定;
    3. 变量命名：**驼峰式命名**，命名语义化, 尽可能利用英文单词或其缩写，如 **infoId36**。JQuery封装后的变量使用 “$”开头，如 **$searchKeyInput**； 另外，要求变量集中声明, 避免全局变量。
    4. 代码结构明了, 加适量注释. 提高函数重用率;