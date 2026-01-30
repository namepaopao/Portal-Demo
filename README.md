# Portal-Demo

乐美包装官网演示 - Lamipak Packaging Portal Demo

## 🌐 在线预览

访问 GitHub Pages: https://namepaopao.github.io/Portal-Demo/

## 📁 项目结构

```
Portal-Demo/
├── docs/                           # GitHub Pages 发布目录
│   ├── index.html                  # 主页
│   ├── customization-request.html  # 客制化需求提交页面
│   ├── app.js                      # 主页脚本
│   ├── customization-request.js    # 客制化页面脚本
│   └── main.css                    # 共享样式
├── images/                         # 图片资源
└── README.md                       # 项目说明
```

## ✨ 功能特性

### 主页 (index.html)
- 🎨 现代化设计，支持明暗主题切换
- 🌍 中英文双语支持
- 📱 完全响应式布局
- 🔍 智能溯源演示（一包一码）
- 📦 产品展示（无菌砖、环保包、异形定制）

### 客制化需求提交页面 (customization-request.html)
- 📋 三步式表单设计
  - 步骤1: 选择包材类型（4种包材可选）
  - 步骤2: 填写配方需求
  - 步骤3: 提交小样申请信息
- ✅ 完整的表单验证
- 📧 数据收集（可集成后端API）

## 🚀 本地开发

### 方式1: 使用 Python HTTP 服务器
```bash
cd docs
python -m http.server 8080
```
然后访问: http://localhost:8080/

### 方式2: 使用 Node.js HTTP 服务器
```bash
cd docs
npx http-server -p 8080
```

### 方式3: 使用 VS Code Live Server
1. 安装 "Live Server" 扩展
2. 右键点击 `docs/index.html`
3. 选择 "Open with Live Server"

## 📤 部署到 GitHub Pages

### 1. 启用 GitHub Pages
1. 进入仓库的 Settings
2. 找到 "Pages" 选项
3. 在 "Source" 下选择 `main` 分支
4. 在 "Folder" 下选择 `/docs`
5. 点击 "Save"

### 2. 推送更新
```bash
git add .
git commit -m "Update portal demo"
git push origin main
```

### 3. 访问网站
等待几分钟后，访问: https://namepaopao.github.io/Portal-Demo/

## 🛠️ 技术栈

- **HTML5** - 语义化标记
- **CSS3** - 现代样式（使用 Tailwind CSS CDN）
- **JavaScript (ES6+)** - 交互逻辑
- **Google Fonts** - Plus Jakarta Sans + Noto Sans SC

## 📝 待办事项

- [ ] 后端API集成（表单提交）
- [ ] 邮件通知功能
- [ ] CRM系统集成
- [ ] 文件上传功能
- [ ] 订单跟踪系统

## 📄 许可证

© 2026 乐美包装 Lamipak Packaging. All rights reserved.
