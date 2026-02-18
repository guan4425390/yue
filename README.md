# 肇庆医学院药学院 - 班级主页项目

这是一个基于 VitePress 构建的静态网站，专为班级主页设计。它具有以下特点：
- **移动端适配**：完美支持手机浏览。
- **简单易用**：通过编辑 Markdown 文件即可更新内容。
- **低成本部署**：可托管在 GitHub Pages、Netlify (帽子云?) 或 Vercel 上。
- **智能助手集成**：支持接入 Dify Agent。

## 1. 快速开始

如果你已经下载了代码，请按以下步骤在本地运行：

1.  **安装依赖**：
    打开终端（Terminal），确保安装了 Node.js，然后运行：
    ```bash
    npm install
    ```

2.  **启动本地预览**：
    ```bash
    npm run docs:dev
    ```
    启动后，浏览器会自动打开 `http://localhost:5173`，你可以实时预览修改效果。

## 2. 如何管理内容

所有内容都在 `docs` 目录下，文件格式为 Markdown（.md）。

- **修改首页**：编辑 `docs/index.md`。
- **发布公告**：编辑 `docs/notices/index.md`。
- **添加资源**：编辑 `docs/resources/index.md`。
- **更新活动**：编辑 `docs/activities/index.md`。
- **修改关于我们**：编辑 `docs/about/index.md`。

### 常用 Markdown 语法
- **标题**：`# 一级标题`, `## 二级标题`
- **链接**：`[链接文字](链接地址)`
- **图片**：`![图片描述](图片地址)`
- **加粗**：`**文字**`

## 3. 接入 Dify Agent (AI 助手)

1.  在 Dify 平台创建一个 Chatbot 应用。
2.  在 Dify 应用概览页找到“嵌入网站”代码。
3.  打开本项目中的 `docs/.vitepress/config.mts` 文件。
4.  找到 `head` 配置部分（已留有注释），将 Dify 提供的 `<script>` 代码粘贴进去。
    *注意：VitePress 的 head 配置格式为数组，请参考文件中的注释示例进行填写。*

## 4. 部署上线 (帽子云/Netlify/Vercel)

推荐使用 **Netlify** (即通常所说的"帽子云"或类似服务) 或 **Vercel** 进行部署，因为它们可以直接连接 GitHub 仓库，且免费额度足够班级使用。

### 步骤：
1.  **上传到 GitHub**：
    - 在 GitHub 上创建一个新仓库（Repository）。
    - 将本地代码推送到该仓库。

2.  **在 Netlify/Vercel 上部署**：
    - 注册并登录 Netlify 或 Vercel。
    - 点击 "Add new site" -> "Import from Git"。
    - 选择你刚才创建的 GitHub 仓库。
    - **Build Settings (构建设置)**：
        - **Build Command**: `npm run docs:build`
        - **Publish Directory** (输出目录): `docs/.vitepress/dist`
    - 点击 "Deploy"。

等待几分钟，部署完成后，你将获得一个免费的访问域名（如 `xxx.netlify.app`），学生即可访问。

## 5. 常见问题

- **如何修改网站标题？**
  编辑 `docs/.vitepress/config.mts` 中的 `title` 字段。

- **图片怎么上传？**
  建议将图片上传到图床（如 SM.MS）或 GitHub，然后使用链接。如果想放在本地，可以在 `docs` 下新建 `public` 文件夹，将图片放入，然后使用 `/图片名.jpg` 引用。

如有其他问题，请随时联系开发者。
