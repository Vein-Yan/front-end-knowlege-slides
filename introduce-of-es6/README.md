# introduce-of-es6

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### VSCode settings for vue code fommater

```
//根据文件后缀名定义vue文件类型
  "files.associations": {
    "*.vue": "vue"
  },
  //配置 ESLint 检查的文件类型
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  //保存时eslint自动修复错误
  "eslint.autoFixOnSave": true,
  //保存自动格式化
  "editor.formatOnSave": true
```
