React Select Pinyin | React 选择控件（支持拼音搜索）
===

[JedWatson](https://github.com/JedWatson) 写的 [react-select](https://github.com/JedWatson/react-select) 挺好用的，但是不支持拼音搜索。

[react-select-pinyin] 基于 [react-select] 开发，添加了如下特性：

- 支持输入全拼匹配（如 beijingshi, beijing, beij, b 会匹配北京市）
- 支持输入声母匹配（如 bjs, bj, b 会匹配北京市）
- 支持非开始位置的匹配（如 jingshi, ijins, eij 会匹配北京市）
- **不**支持子串匹配（如 beishi **不会**匹配北京市）
