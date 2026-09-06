import { Layout, Menu } from 'antd';
import {
  ApartmentOutlined,
  ExperimentOutlined,
  SettingOutlined,
  TeamOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

// 「Button 示例」菜单的 key：导出供 App 判断内容区该渲染什么
export const BUTTON_DEMO_KEY = 'button-demo';

// 左侧菜单：机构管理 / 用户管理 / 系统配置（基本参数、系统参数）/ Button 示例
export const MENU_ITEMS = [
  { key: 'org', label: '机构管理', icon: <ApartmentOutlined /> },
  { key: 'user', label: '用户管理', icon: <TeamOutlined /> },
  {
    key: 'system',
    label: '系统配置',
    icon: <SettingOutlined />,
    children: [
      { key: 'system-basic', label: '基本参数' },
      { key: 'system-param', label: '系统参数' },
    ],
  },
  { key: BUTTON_DEMO_KEY, label: 'Button 示例', icon: <ExperimentOutlined /> },
];

// 展平成一级映射，供外部按 key 取菜单标题
export const FLAT_MENU_ITEMS = MENU_ITEMS.flatMap((item) => item.children ?? item);

// 受控组件：选中项与折叠状态由外部传入，点击时通过 onSelect 回调通知
const AppSider = ({ selectedKey, onSelect, collapsed }) => (
  <Sider collapsed={collapsed} width={208} style={{ backgroundColor: '#001529' }}>
    <div
      style={{
        height: 32,
        margin: 16,
        color: '#fff',
        fontSize: 16,
        fontWeight: 600,
        lineHeight: '32px',
        textAlign: collapsed ? 'center' : 'left',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      {collapsed ? 'LS' : 'Layout Study'}
    </div>

    <Menu
      theme="dark"
      mode="inline"
      items={MENU_ITEMS}
      selectedKeys={[selectedKey]}
      defaultOpenKeys={['system']}
      onClick={({ key }) => onSelect?.(key)}
    />
  </Sider>
);

export default AppSider;
