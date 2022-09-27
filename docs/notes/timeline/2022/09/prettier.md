# vscode插件学习: Prettier

[Prettier](https://prettier.io/) 是一个opinionated代码格式化程序。它将你的代码解析并重新赋予自己的规则，包括在必要时进行行的最长长度限制和分割，使其代码风格一致。

## 安装

通过VS Code 扩展。搜索`Prettier - Code formatter`

[Visual Studio Code Market Place: Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

也可以通过VS Code安装：运行 VS Code快速打开(Ctrl + P),粘贴以下指令并回车。

```
ext install esbenp.prettier-vscode
```

### 默认代码格式化程序

请确保在你的VS Code设置当中将本程序设置为默认格式化程序，以使用本程序格式化代码。可以给所有语言设置或单独某个语言设置。

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

如果想针对某个语言单独关闭Prettier，创建`.prettierignore`，或使用VS Code设置`editor.defaultFormatter`。

如下代码会对除Javascript外的所有语言使用Prettier

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "<another formatter>"
  }
}
```

如下代码只会对Javascript使用Prettier

```json
{
  "editor.defaultFormatter": "<another formatter>",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

另外，如果你不想针对某个语言使用自动格式化，你可以使用如下配置关闭在保存时格式化功能。

```json
{
  "[javascript]": {
    "editor.formatOnSave": false
  }
}
```

### Prettier Resolution

This extension will use prettier from your project's local dependencies (recommended). When the `prettier.resolveGlobalModules` is set to `true` the extension can also attempt to resolve global modules. Should prettier not be installed locally with your project's dependencies or globally on the machine, the version of prettier that is bundled with the extension will be used.

To install prettier in your project and pin its version [as recommended](https://prettier.io/docs/en/install.html), run:

```
npm install prettier -D --save-exact
```

> NOTE: You will be prompted to confirm that you want the extension to load a Prettier module. This is done to ensure that you are not loading a module or script that is not trusted.

### 插件

This extension supports [Prettier plugins](https://prettier.io/docs/en/plugins.html) when you are using a locally or globally resolved version of prettier. If you have Prettier and a plugin registered in your `package.json`, this extension will attempt to register the language and provide automatic code formatting for the built-in and plugin languages.

## 配置

通过本扩展有很多方式来配置Prettier。你可以使用[VS Code 设置](#Prettier-设置)，[prettier 配置文件](https://prettier.io/docs/en/configuration.html)，或`.editorconfig`文件。VS Code中的设置被用来作为一种兜底方案，一般只用来给不在项目中的文件使用。**推荐在你的项目中始终包含prettier设置文件**。这将确保不管运行Prettier的方式是怎样（从扩展，CLI或其他集成Prettier的IDE），都使用相同的设定。

推荐使用[Prettier 配置文件](https://prettier.io/docs/en/configuration.html)来配置格式化选项。选项是从正在格式化的文件中递归向下搜索的，因此，如果要将Prettier的设置应用于整个项目，只需在根目录中设置配置即可。设置也可以通过VS Code来配置，但这些设定将仅在扩展插件运行时生效，通过命令行运行时不会生效。

### 配置默认设置

有些用户可能不希望为每个项目创建一个新的Prettier配置文件或使用VS Code设置。设置[`prettier.configPath`](https://github.com/prettier/prettier-vscode#prettierconfigpath)来配置默认配置文件的路径。但是，请注意，如果设置了此值，则将始终使用此值，并且将忽略本地配置文件。

### Visual Studio Code 设定

You can use [VS Code settings](#prettier-settings) to configure prettier. Settings will be read from (listed by priority):

1. [Prettier configuration file](https://prettier.io/docs/en/configuration.html)
1. `.editorconfig`
1. Visual Studio Code Settings (Ignored if any other configuration is present)

> NOTE: If any local configuration file is present (i.e. `.prettierrc`) the VS Code settings will **NOT** be used.

## 使用

### 使用命令行 (CMD/CTRL + Shift + P)

```
1. CMD + Shift + P -> 格式化文档
OR
1. 选择需要格式化的代码片段
2. CMD + Shift + P -> 格式化选择的片段
```

### 快捷键

Visual Studio Code 提供[默认代码格式化](https://code.visualstudio.com/docs/getstarted/keybindings#_keyboard-shortcuts-reference)设置用于代码格式化 . 你可以在[VS Code文档](https://code.visualstudio.com/docs/getstarted/keybindings#_keyboard-shortcuts-reference)中了解每个平台的快捷键 .

If you don't like the defaults, you can rebind `editor.action.formatDocument` and `editor.action.formatSelection` in the keyboard shortcuts menu of vscode.

如果你不喜欢使用默认值，你可以

### 在保存时格式化

遵守`editor.formatOnSave`设定

通过嵌套填写设置，来实现针对某个语言使用保存时格式化

```json
// 设为默认
"editor.formatOnSave": false,
// 针对某个语言单独启用
"[javascript]": {
    "editor.formatOnSave": true
}
```

### 格式化片段

格式化片段在Preiiter支持的一些语言中生效。目前支持以下语言：

```
javascript
javascriptreact
typescript
typescriptreact
json
graphql
handlebars
```

### 格式化文档 (强制)

如果你想要格式化被Prettier忽略的文档（可能是命中`.prettierignore`，或在某个被忽略的路径中如`node_modules`)，你可以执行**Format Document (Forced)**命令来强制格式化文档。Forced mode will also ignore any config for `requirePragma` allowing you to format files without the pragma comment present.

## Linter 集成

与Linter集成推荐的方式是使用Prettier来格式化，并配置linter不处理格式化规则，你可以在Prettier文档网站来找到如何配置各种linter的指南。设置后，你就可以使用各种你需要的linting插件了。更多细节请参考[Prettier 文档](https://prettier.io/docs/en/integrating-with-linters.html)

## 信任工作区

本插件使用VS Code [Workspace Trust](https://code.visualstudio.com/docs/editor/workspace-trust)功能。当在不受信任的工作区运行此扩展时，只会使用prettier的内建版本。不支持使用插件，本地或全局模块。另外，有一些设置也收到限制，具体请查看其设置。

## 设置

### Prettier 设置

所有prettier的设置都可以直接在插件中配置。当你的项目当中没有配置文件的时候，这些设置将发挥作用，去[配置](#配置)部分查看更多细节。设置参考请查看[prettier 文档](https://prettier.io/docs/en/options.html)

> 这些配置的默认值始终为Prettier 2.0 默认值。为了使用Prettier早期版本的默认值，您必须使用VS Code设置或本地项目配置手动设置它们。

```
prettier.arrowParens
prettier.bracketSpacing
prettier.endOfLine
prettier.htmlWhitespaceSensitivity
prettier.insertPragma
prettier.singleAttributePerLine
prettier.bracketSameLine
prettier.jsxBracketSameLine
prettier.jsxSingleQuote
prettier.printWidth
prettier.proseWrap
prettier.quoteProps
prettier.requirePragma
prettier.semi
prettier.singleQuote
prettier.tabWidth
prettier.trailingComma
prettier.useTabs
prettier.vueIndentScriptAndStyle
prettier.embeddedLanguageFormatting
```

### 扩展设置

以下设置是专为VS Code设计的，需要在VS Code设置文件中设定，具体设置方法查看[文档](https://code.visualstudio.com/docs/getstarted/settings)。

#### prettier.enable (default: `true`)

控制prettier是否启用。当你改变设置后，你需要重启VS Code

#### prettier.requireConfig (default: `false`)

使用prettier设置文件来个格式化文档。未命名文件仍将通过VS Code Prettier设置来格式化，即使设定为`true`

#### prettier.ignorePath (default: `.prettierignore`)

提供忽略处理的文件路径，如`.gitignore`或`.prettierignore`。符合条件的文件将不会被格式化。设为`null`不读取忽略文件。


**注意,如果开启设置，这里的值将始终被使用，本地设置为需要忽略的文件将被忽略。**

**在不信任的工作区关闭**

#### prettier.configPath

提供prettier配置文件的自定义路径

**注意,如果开启设置，这里的值将始终被使用，本地设置为需要忽略的文件将被忽略。 设置全局默认值更好的做法是在你的home目录下放置`~/.prettierrc`文件。**

**在不信任的工作区关闭**

#### prettier.prettierPath

Supply a custom path to the prettier module. This path should be to the module folder, not the bin/script path. i.e. `./node_modules/prettier`, not `./bin/prettier`.

**在不信任的工作区关闭**

#### prettier.resolveGlobalModules (default: `false`)

开启时，如果本地模块找不到，扩展将尝试使用全局npm或yarn的模块

> 注意：这个设置会对性能造成影响，特别是在挂载了网络磁盘的Windows设备上。请仅在必须使用全局模块时打开。尽可能始终使用本地模块。

**Note: Disabling a language enabled in a parent folder will prevent formatting instead of letting any other formatter to run**

**在不信任的工作区关闭**

#### prettier.documentSelectors

A list of [glob patterns](https://code.visualstudio.com/api/references/vscode-api#GlobPattern) to register Prettier formatter. Typically these will be in the format of `**/*.abc` to tell this extension to register itself as the formatter for all files with the `abc` extension. This feature can be useful when you have [overrides](https://prettier.io/docs/en/configuration.html#configuration-overrides) set in your config file to map custom extensions to a parser.


```json
{
  "prettier.documentSelectors": ["**/*.abc"]
}
```

告诉prettier如何格式化`.abc`格式的文件。可以在prettier设置中书写如下配置来使用`babel`解析器格式化。

```json
{
  "overrides": [
    {
      "files": "*.abc",
      "options": {
        "parser": "babel"
      }
    }
  ]
}
```

**在不信任的工作区关闭**

#### prettier.useEditorConfig (default: `true`)
解析设置时是否使用`.editorconfig`。查看更多[prettier.resolveConfig docs](https://prettier.io/docs/en/api.html#prettierresolveconfigfilepath--options)。

**在不信任的工作区关闭 (always false)**

#### prettier.withNodeModules (default: `false`)

是否处理`node_modules`文件夹中的文件

**在不信任的工作区关闭**

## 错误信息

**Failed to load module. If you have prettier or plugins referenced in package.json, ensure you have run `npm install`**

当项目中包含`package.json`文件并且包含Prettier，插件，或linter资料库，本插件将尝试从`node_module`文件夹读取这些模块。如果出现这个错误，你可能需要执行`npm install`或`yarn install`来安装`package.json`中的模块。

**Your project is configured to use an outdated version of prettier that cannot be used by this extension. Upgrade to the latest version of prettier.**

你需要升级Prettier新版本。

**This workspace is not trusted. Using the bundled version of prettier.**
