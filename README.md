# MINISO
# 1.项目概述
名称：MINISO（实在想不到好名字）
描述：仿MINISO的网站，主要做了首页、产品页、产品详情页三种页面。
## 1.1布局设计
#### 首页
模块|类名
:-:|:-:
导航栏|shortcut
轮播图|focus
返回顶部|slider-bar
简介合作|introduceNav
优选好品|goods
新闻中心|news
底部|footer1、footer2
#### 产品页
最顶部导航、返回顶部和底部同首页
模块|类名
:-:|:-:
导航栏|shortcut
第二个导航栏|goodsNav
轮播图|home_lunbo
返回顶部|slider-bar
商品展示|home
视频|vedio
底部|footer1、footer2
#### 产品详情页
最顶部导航、返回顶部和底部同首页
模块|类名
:-:|:-:
导航栏|shortcut
产品展示|firstimg
返回顶部|slider-bar
产品详情|cbanner
底部|footer1、footer2

## 1.2 三大标签
```html
<!-- title标题 -->
<title>MINISO</title>
<!-- description说明 -->
    <meta name="description" content="MINISO官方网站——加盟名创 加盟名创优品 名创官网 名创优品官网 名创中国！" />
<!-- keywords关键字 -->
    <meta name="keywords" content="加盟名创 加盟名创优品 名创官网 名创优品官网 名创中国" />
```

## 1.3开发工具
VS Code,Edge浏览器

## 1.4 改进与新增功能
在原网站基础上改变了导航栏、返回顶部按钮和底部样式，并变成滚动渐变式导航栏。

产品详情页增设放大镜功能

底部微博、微信图标做成玻璃片样式，更美观

（更多功能见PPT）

# 2.代码规范
## 2.1 命名规范
写类名遵循简洁、明了，尽量使用了英文词汇。
## 2.2书写规范
尽量遵循了书写规范

1. 布局定位属性：display、position、float、clear、visibility、overflow
2. 自身的属性：width、height、margin、padding、border、background
3. 文本属性：color、font、text-decoration、text-align、verttical-align、white-space、break-work
4. 其他属性：content、cursor、border-radius、box-shadow、text-shadow、background：linear-gradient
