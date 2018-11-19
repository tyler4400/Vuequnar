# vuequnar

> a vue-learning project which learned from [Vue2.5开发去哪儿网App 从零基础入门到实战项目_课程  ](https://coding.imooc.com/learn/list/203.html)

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

# run all tests
npm test
```
注意 端口只能是1080，要不然发送请求的时候转发会出错
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

1.首先要回退本地分支：
git reset --hard Obfafd

2.紧接着强制推送到远程分支：
git push -f origin master ## 这里假设只有一个master分支

<hr>
# 使用nginx转发，nodejs做后台服务器
1. webpack前端开发服务器 8080端口
2. 接口数据转发到8070端口，node后台服务器监听8070端口
