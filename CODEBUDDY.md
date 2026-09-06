# CODEBUDDY.md

本文件为 CodeBuddy Code 在本仓库工作时提供指引。

## 这个项目是什么

一个用 Vite + React 19 + Ant Design 6 搭建的**布局学习**最小项目。它唯一的目的就是演示 Ant Design 的 `Layout` 组合（Sider + Header/Content/Footer 嵌套）以及一个受控的侧边 `Menu`。刻意没有业务逻辑和后端。

## 命令

包管理器是 **pnpm**（9+）。Node 需要 20.19+ 或 22.12+（Vite 8 要求）。

| 命令 | 作用 |
| --- | --- |
| `pnpm dev` | 启动 Vite 开发服务器（默认 http://localhost:5173）。`-- --port 3000` 换端口，`-- --host` 允许局域网访问。 |
| `pnpm build` | 生产构建，产物在 `dist/`。 |
| `pnpm preview` | 预览构建产物 `dist/`（默认 http://localhost:4173）。 |
| `pnpm lint` | 运行 **oxlint**（见 `.oxlintrc.json`）。本项目没有配置测试运行器或格式化工具。 |

要单独运行某个组件/页面，只能启动整个开发服务器——没有按文件运行的测试或 watch 命令。

## 架构

入口（标准 Vite React 应用）：
- `index.html` → 挂载 `#root`，加载 `/src/main.jsx`。
- `src/main.jsx` → `createRoot` 渲染，先引入 `antd/dist/reset.css`（antd 基础样式必需），再引入 `./index.css`。
- `src/index.css` → 极简全局 reset（`box-sizing`、满高 `html/body/#root`、去掉 margin、系统字体）。

### 布局组合（`src/App.jsx`）

页面是一个 Ant Design `Layout`。关键模式（也是本项目的核心）：

```
<Layout style={{ minHeight: '100vh' }}>      // 外层，含 Sider 时自动横向
  <AppSider />                                 // Sider 必须是 Layout 的直接子元素
  <Layout>                                     // 内层，纵向（Header/Content/Footer）
    <Header />
    <Content />
    <AppFooter />
  </Layout>
</Layout>
```

代码所依赖的 Ant Design `Layout` 重要规则：
- `Layout` 是 flex 容器：默认纵向，检测到有 `Sider` 子元素时自动变横向。`Sider` **必须**是 `Layout` 的直接子元素——中间套 `div` 会导致横向排列失效。
- `Header`/`Sider`/`Content`/`Footer` 是从 `Layout` 上解构出来的（`const { Header, Sider, Content, Footer } = Layout`），不是单独 import。`Menu` 从 `antd` 单独引入。
- 外层 `Layout` 上的 `minHeight: '100vh'` 是让布局铺满视口的唯一结构性样式；不加的话 `Footer` 会飘在屏幕中间。

### 状态与受控 Menu

`src/App.jsx` 持有菜单选中状态并上提，以便 `Content` 能反映当前选中项：
- `App` 内 `const [selectedKey, setSelectedKey] = useState('org')`。
- `AppSider` 是**受控**组件：接收 `selectedKey`，点击时通过 `onSelect(key)` 回调通知，自身不持有选中状态。
- `App` 内用 `FLAT_MENU_ITEMS`（由 `AppSider` 导出）派生出 `currentLabel`，显示在 `Content` 中。

### 组件（`src/components/`）

- `AppSider.jsx` — 渲染 `Sider` + 深色 `Menu`。导出：
  - `MENU_ITEMS` — 嵌套菜单树（`org`、`user`、`system` → `system-basic`/`system-param`）。
  - `FLAT_MENU_ITEMS` — 展平为一级的菜单映射，供其它模块按 key 取 label。
  - 默认导出 `AppSider` — props：`{ selectedKey, onSelect }`。
  - `defaultOpenKeys={['system']}` 让子菜单初始展开。
- `AppFooter.jsx` — 展示型 `Footer`，含版权文字（用 `Typography.Text` 和 `Flex`）。

### 静态资源

- `public/` 放 `favicon.svg`、`icons.svg`（以站点根路径提供）。
- `src/assets/` 放 `hero.png`、`react.svg`、`vite.svg`（可从 JS 中 import）。

## 代码检查规范

`.oxlintrc.json` 启用了 `react` 和 `oxc` 插件，规则：
- `react/rules-of-hooks`：`error`
- `react/only-export-components`：`warn`（允许导出常量，因此 `AppSider` 同时导出 `MENU_ITEMS`/`FLAT_MENU_ITEMS` 是合规的）。

## 给后续工作的提醒

- 这套布局更完整的版本（菜单、折叠、响应式、固定头）在 `E:\reactjs\default-layout`。


# 编码
按重构思维编程，每个方法代码不要超过50行，每个文件不要超过1000行

# 布局
尽量组件化，组件之间不要有依赖关系，组件之间通过props传递数据