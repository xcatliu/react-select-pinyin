React Select Pinyin | React 选择控件（支持拼音搜索）
===

[JedWatson](https://github.com/JedWatson) 写的 [react-select](https://github.com/JedWatson/react-select) 挺好用的，但是不支持拼音搜索。

[react-select-pinyin](https://github.com/xcatliu/react-select-pinyin) 基于 [react-select](https://github.com/JedWatson/react-select) 开发，添加了如下特性：

- 支持输入全拼匹配（如 beijingshi, beijing, beij, b 会匹配北京市）
- 支持输入声母匹配（如 bjs, bj, b 会匹配北京市）
- 支持非开始位置的匹配（如 jingshi, ijins, eij 会匹配北京市）
- ***不***支持子串匹配（如 beishi ***不会***匹配北京市）

## Live Demo

[http://xcatliu.github.io/react-select-pinyin/](http://xcatliu.github.io/react-select-pinyin/)

## 开发

clone 之后，进入本项目，执行：

```shell
npm install
npm start
```

打开 [http://localhost:8000](http://localhost:8000) 查看示例。

编辑 `src` 进行开发。

## 发布新版本流程

1. 执行 `npm run build`，将 `src` 中的 `jsx` 编译成 `lib` 中的 `js`
2. 执行 `npm version [<newversion> | major | minor | patch | prerelease | preminor | premajor ]`，升级版本号
3. 执行 `git push --all` 提交到 [GitHub](https://github.com/xcatliu/react-select-pinyin)
4. 执行 `npm publish` 提交到 [npmjs.com](https://www.npmjs.com/)
5. 执行 `gh-pages` 分支
