This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Chelizi 官方网站

这是一个基于 Next.js 和 Tailwind CSS 构建的现代化响应式网站，展示公司的产品、课程和服务。

## 功能特点

- 响应式设计，适配各种屏幕尺寸
- 现代化 UI 界面，支持动画效果
- 首页产品、课程和服务卡片展示
- 卡片支持点击跳转到详细页面
- 联系悬浮按钮

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 常见问题解决

### npm 安装权限问题

如果在运行 `npm install` 时遇到权限相关的错误，可以尝试以下步骤：

1. 清理 npm cache 并修复权限：
   ```bash
   sudo npm cache clean -f
   sudo chown -R $USER:$GROUP ~/.npm
   sudo chown -R $USER:$GROUP ~/.config
   ```

2. 重新运行安装命令：
   ```bash
   npm install
   ```

如果问题仍然存在，可以参考 [npm 文档](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) 获取更多帮助。
