React 选择控件（支持拼音搜索）
===

[JedWatson](https://github.com/JedWatson) 写的 [react-select] 挺好用的，但是不支持拼音搜索。

[react-select-pinyin] 基于 [react-select] 开发，添加了如下特性：

- 支持输入全拼匹配（如 beijingshi, beijing, beij, b 会匹配北京市）
- 支持输入声母匹配（如 bjs, bj, b 会匹配北京市）
- 支持非开始位置的匹配（如 jingshi, ijins, eij 会匹配北京市）
- ***不支持***子串匹配（如 beishi ***不会***匹配北京市）

## Live Demo

[http://xcatliu.github.io/react-select-pinyin/](http://xcatliu.github.io/react-select-pinyin/)

## 使用方式

和 [react-select] 的使用方式一样：

```js
var Select = require('react-select-pinyin');

var options = [
  { value: '110100', label: '北京市' },
  { value: '120100', label: '天津市' }
];

function logChange(val) {
  console.log("选择了: " + val);
}

<Select
  name="form-field-name"
  value="one"
  options={options}
  onChange={logChange}
/>
```

更多使用方式请参考：[react-select#usage](https://github.com/JedWatson/react-select#usage)

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
3. 执行 `git push && git push --tags` 提交到 [GitHub](https://github.com/xcatliu/react-select-pinyin)
4. 执行 `npm publish` 提交到 [npmjs.com](https://www.npmjs.com/)
5. 更新 `public` 中的内容到 `gh-pages` 分支

[react-select]: https://github.com/JedWatson/react-select
[react-select-pinyin]: https://github.com/xcatliu/react-select-pinyin

