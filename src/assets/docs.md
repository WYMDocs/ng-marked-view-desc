# 安装

```bash
npm i ng-marked-preview
```

```bash
npm i highlight.js --save
```

```bash
npm i katex --save
```

```bash
npm i marked --save
```

关于依赖安装，下个版本更新会加入依赖中，就不需要单独安装包

# 说明

> 当前最新版本：0.0.2，在线尝试示例[]()

# 引入样式

在`angular.json`中引入

```json
{
  "styles": [
    "node_modules/ng-marked-preview/style/theme/default.less"
  ]
}
```

在`style.less`中引入

```less
@import "~ng-marked-preview/style/theme/default.less";
```


在`style.css`中引入
```css
@import "~ng-marked-preview/style/theme/default.css";
```

在`style.less`，`style.css`中引入代码高亮样式

```css
@import "~highlight.js/styles/github.css";
```


# 引入组件模块

```TypeScript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgMarkedPreviewModule } from 'ng-marked-preview';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgMarkedPreviewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

# 页面使用
```html
<lib-ng-marked-preview [context]="content"></lib-ng-marked-preview>
```

> 我要看效果，[预览](/home)

### 属性
|属性|说明|类型|默认值|支持全局配置|
|-|-|-|-|-|
|context|值|`string`|空字符串|否|

## 以下是所有的主题色列表

- a11y-dark.css
- a11y-light.css
- agate.css
- an-old-hope.css
- androidstudio.css
- arduino-light.css
- arta.css
- ascetic.css
- atom-one-dark-reasonable.css
- atom-one-dark.css
- atom-one-light.css
- brown-paper.css
- codepen-embed.css
- color-brewer.css
- dark.css
- default.css
- devibeans.css
- docco.css
- far.css
- foundation.css
- github-dark-dimmed.css 
- github-dark.css
- github.css
- gml.css
- googlecode.css
- gradient-dark.css
- gradient-light.css
- grayscale.css
- hybrid.css
- idea.css
- ir-black.css
- isbl-editor-dark.css
- isbl-editor-light.css
- kimbie-dark.css
- kimbie-light.css
- lightfair.css
- lioshi.css
- magula.css
- mono-blue.css
- monokai-sublime.css
- monokai.css
- night-owl.css
- nnfx-dark.css
- nnfx-light.css
- nord.css
- obsidian.css
- paraiso-dark.css
- paraiso-light.css
- pojoaque.css
- purebasic.css
- qtcreator-dark.css
- qtcreator-light.css
- rainbow.css
- routeros.css
- school-book.css
- shades-of-purple.css
- srcery.css
- stackoverflow-dark.css
- stackoverflow-light.css
- sunburst.css
- tomorrow-night-blue.css
- tomorrow-night-bright.css
- vs.css
- vs2015.css
- xcode.css
- xt256.css