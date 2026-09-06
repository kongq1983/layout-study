# layout-study

用 Vite + React + Ant Design 学习**布局**的最小项目：只有结构，没有业务样式。

## 技术栈

| 依赖 | 版本 |
| --- | --- |
| Vite | 8.x |
| React / React DOM | 19.x |
| Ant Design | 6.x |
| 包管理器 | pnpm |

## 环境要求

- Node.js **20.19+ 或 22.12+**（Vite 8 要求，推荐 22 LTS）
- pnpm 9+（没有就先装：`npm i -g pnpm`）

## 启动

```bash
cd E:\reactjs\layout-study

# 1. 安装依赖（首次）
pnpm install

# 2. 启动开发服务器
pnpm dev
```

终端会输出访问地址，默认是 <http://localhost:5173>。修改 `src/` 下代码会自动热更新。

## 命令

| 命令 | 作用 |
| --- | --- |
| `pnpm dev` | 启动开发服务器（默认 5173） |
| `pnpm build` | 生产构建，产物在 `dist/` |
| `pnpm preview` | 预览构建产物（默认 4173） |
| `pnpm lint` | oxlint 代码检查 |

## 关闭

### 1. 正常关闭

在运行 `pnpm dev` 的终端按：

```
Ctrl + C
```

提示 `终止批处理操作吗(Y/N)?` 时输入 `Y` 回车。

### 2. 换端口启动

```bash
pnpm dev -- --port 3000
pnpm dev -- --host          # 允许局域网/手机访问，会额外输出 Network 地址
```

### 3. 端口被占用 / 进程没退干净（Windows）

```powershell
netstat -ano | findstr :5173     # 最后一列是 PID
taskkill /PID 12345 /F           # 换成实际 PID
```

## 当前布局

```
┌──────────────────────────────────────────┐
│ Layout（外层，横向）                       │
│ ┌────────┐ ┌───────────────────────────┐ │
│ │        │ │ Layout（内层，纵向）        │ │
│ │ Sider  │ │ ┌───────────────────────┐ │ │
│ │ 200px  │ │ │ Header                │ │ │
│ │        │ │ ├───────────────────────┤ │ │
│ │        │ │ │ Content               │ │ │
│ │        │ │ ├───────────────────────┤ │ │
│ │        │ │ │ Footer                │ │ │
│ │        │ │ └───────────────────────┘ │ │
│ └────────┘ └───────────────────────────┘ │
└──────────────────────────────────────────┘
```

`src/App.jsx` 负责组装外层 `Layout` + `AppSider` + 内层 `Layout`（Header/Content/Footer），并持有菜单选中状态。结构如下：

```jsx
import { useState } from 'react';
import { Layout } from 'antd';
import AppSider, { FLAT_MENU_ITEMS } from './components/AppSider.jsx';
import AppFooter from './components/AppFooter.jsx';

const { Header, Content } = Layout;

const App = () => {
  const [selectedKey, setSelectedKey] = useState('org');
  const currentLabel = FLAT_MENU_ITEMS.find((item) => item.key === selectedKey)?.label;
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppSider selectedKey={selectedKey} onSelect={setSelectedKey} />
      <Layout>
        <Header>Header</Header>
        <Content>Content{currentLabel ? ` · ${currentLabel}` : ''}</Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
};
```

布局相关的具体组件已抽到 `src/components/`：
- `AppSider.jsx`：侧边 `Sider` + 深色 `Menu`（**受控**组件，选中项由 `App` 通过 `selectedKey` 传入，点击回调 `onSelect`）。导出 `MENU_ITEMS`（嵌套菜单树）和 `FLAT_MENU_ITEMS`（展平的一级映射，供 `App` 按 key 取标题）。
- `AppFooter.jsx`：展示型 `Footer`，含版权文字。

## 学习要点

1. **导入方式**：`Header` / `Sider` / `Content` / `Footer` 都挂在 `Layout` 上，要解构；
   直接 `import { Sider } from 'antd'` 在部分版本拿不到组件。
2. **主轴方向**：`Layout` 是 flex 容器，默认纵向；子元素里检测到 `Sider` 就自动变成横向。
   所以「Sider + 右侧内容」的写法是：**Sider 外面套一个 Layout，右侧再套一个内层 Layout**。
3. **`minHeight: '100vh'` 是唯一加在外层的结构性样式**：不加的话内容少时布局撑不满屏幕，Footer 会飘在中间。
4. **默认样式**（antd token）：Sider 宽 200、背景 `#001529`；Header 高 64；Footer 背景 `#f5f5f5`、padding `24px 50px`；Content 没有背景色。
5. **Sider 必须是 Layout 的直接子元素**：中间套 `div` 会导致横向排列失效。
6. **`Layout` 可以嵌套 `Layout`**：这是实现「侧边 + 上下结构」的关键，而不是靠 CSS 硬拼。
7. **受控 Menu**：选中状态上提到 `App`，`AppSider` 本身不持有状态；`onSelect` 回调把 key 传回，由 `App` 派生 `currentLabel` 显示在 `Content`。

## 目录结构

```
layout-study/
├─ index.html          # 入口 HTML
├─ package.json        # 依赖与脚本
├─ vite.config.js      # Vite 配置
├─ .oxlintrc.json      # oxlint 配置（react/oxc 插件）
├─ public/             # 静态资源（favicon.svg、icons.svg）
└─ src/
   ├─ main.jsx         # 挂载 React + antd/dist/reset.css
   ├─ App.jsx          # 外层布局 + 菜单选中状态
   ├─ index.css        # 极简全局 reset
   ├─ components/      # AppSider.jsx、AppFooter.jsx
   └─ assets/          # hero.png、react.svg、vite.svg
```

## 常见问题

| 问题 | 处理 |
| --- | --- |
| 页面没样式 / 元素挤在一起 | 检查 `src/main.jsx` 是否引入 `antd/dist/reset.css` |
| 布局没铺满全屏 | 最外层 `<Layout>` 补 `minHeight: '100vh'` |
| Sider 和 Content 竖着排 | `Sider` 必须是 `Layout` 的**直接**子元素 |
| 端口被占用 | `pnpm dev -- --port 3000`，或用 `netstat` + `taskkill` |
| `pnpm` 不存在 | `npm i -g pnpm` |
| 装依赖慢 | `pnpm config set registry https://registry.npmmirror.com` |

## 下一步

想加菜单、折叠、响应式、固定头，见 `E:\reactjs\default-layout`（同一套结构的完整版）以及笔记
`Learning_Gaps/reactjs/default-laytou.md`。
