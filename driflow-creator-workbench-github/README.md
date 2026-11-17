# Driflow Creator Workbench Prototype

静态网站原型，可直接作为 GitHub 仓库内容上传，并通过 GitHub Pages 发布。

## 文件

- `index.html`：网站入口。HTML、CSS 与 JavaScript 均已内嵌，无需构建工具或额外依赖。
- `.nojekyll`：告知 GitHub Pages 按普通静态文件发布。

## 上传到 GitHub

1. 在 GitHub 创建一个仓库。
2. 将本目录中的文件上传到仓库根目录，确认 `index.html` 位于根目录。
3. 打开仓库 **Settings → Pages**，在 **Build and deployment** 中选择 **Deploy from a branch**。
4. 选择发布分支（通常是 `main`）和目录 `/(root)`，保存。GitHub Pages 会从该分支根目录发布网站。

官方说明：[Configuring a publishing source for GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 原型说明

这是前端演示原型，不连接生产数据库、TikTok、邮件或 WhatsApp。页面中的达人资料和业务指标用于展示交互，不代表真实业务数据或系统人数上限。正式公开发布前，请确认页面没有客户隐私、真实达人个人信息或其他不宜公开的业务内容。GitHub Pages 发布的网站可能可被互联网用户访问。
