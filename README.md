# @johnhom/eslint-config

对`airbnb-base`的一个封装

## 使用

### 安装

```
pnpm add -D eslint @johnhom/eslint-config
```

### 配置 `.eslintrc`

```
{
  "extends": "@johnhom"
}
```

### 添加脚本到package.json

示例：

```
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## ToDo

- [x] 引入对`vue`文件的支持
- [x] 引入对`.ts`文件的支持