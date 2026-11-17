# Driflow 巴西达人管理系统

面向巴西 FMCG 达人运营的静态网站 MVP，可直接部署到 GitHub Pages。项目不依赖构建工具、npm 包或外部 API。

## 当前可用功能

- CSV 导入达人名单，按 TikTok handle 去重；支持中英文及常见葡语字段名。
- 按品类、巴西受众比例、语言、州、播放量、合作方式和匹配度筛选达人。
- 查看规则评分拆解与证据说明，收藏候选人并生成巴西葡语联系草稿。
- 新建和编辑达人档案，跟踪联系状态与合作履约阶段。
- 创建建联批次，记录渠道、已联系、已回复、正向意向人数和批次状态。
- 创建跟进任务，关联达人，标记完成或删除。
- 查看随档案和批次数据变化的工作台指标、履约看板和效果图表。
- 在当前浏览器保存数据，导出达人 CSV、备份或恢复完整 JSON。
- 可选择载入演示资料，体验后可一键清除。

## 数据与匹配说明

本版本是本地单用户 MVP。达人资料、批次和任务保存在浏览器 IndexedDB 中，数据不会上传到 GitHub Pages 或任何服务器。换浏览器、清除浏览器数据或换设备前，请从“达人库”导出 JSON 备份；恢复备份也需要在目标浏览器中手动操作。

“AI 达人匹配”目前使用可解释的前端规则分数（品类、受众、互动、播放和资料完整性等信号），不调用大模型，也不会联网抓取 TikTok 资料。评分适合原型验证和人工排序，不能当成外部平台核验结果。

建联中心只生成葡语话术草稿并记录执行结果，不会自动访问 TikTok 或发送私信。普通 TikTok 账号的批量触达受平台账号能力和规则约束；上线真实团队版前，需要接入经授权的官方渠道，并实现服务端账号、权限、审计、同步、备份及隐私管理。

## 本地预览

可以直接打开 `index.html`。推荐用本地静态服务器预览，避免浏览器对本地文件存储的限制：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 上传到 GitHub Pages

1. 新建一个 GitHub repository。
2. 将本目录中的所有文件和 `js/` 文件夹放到仓库根目录并提交。
3. 在仓库 **Settings → Pages** 选择 **Deploy from a branch**，分支选 `main`，目录选 `/ (root)`，保存。
4. 等待 GitHub Pages 部署完成后，从 Pages 页面打开站点。

GitHub Pages 官方说明：[配置 GitHub Pages 发布源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

## 项目结构

```text
index.html       页面结构
styles.css       响应式样式
js/app.js        匹配、档案、批次、任务和报表交互
js/storage.js    IndexedDB 本地读写
examples/        CSV 导入模板
```

## CSV 字段模板

见 [`examples/creators-template.csv`](examples/creators-template.csv)。`handle` 是必填项。可以按需要添加 `name`、`city`、`state`、`category`、`language`、`followers`、`views`、`engagement`、`brazilAudience`、`contact` 和 `tags`。粉丝与播放数字段接受常见千位分隔格式。

## 隐私建议

只录入业务所需且适当公开的达人资料。不要把真实个人名单或备份 JSON 提交到公开 GitHub 仓库。`.gitignore` 已排除常见本地备份文件名，但建议在上传前再次检查仓库内容。
