import { Layout, Avatar, Button, Dropdown, Space, Typography } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Text } = Typography;

// 当前登录用户（示例数据：后续可替换为接口返回或全局状态里的用户信息）
const CURRENT_USER = {
  name: '张三',
  role: '系统管理员',
  avatar: '', // 传入图片地址时展示图片，为空则显示姓名首字
};

// 头像右侧下拉菜单：个人中心 / 账号设置 / 退出登录
const USER_MENU_ITEMS = [
  { key: 'profile', label: '个人中心' },
  { key: 'settings', label: '账号设置' },
  { type: 'divider' },
  { key: 'logout', label: '退出登录' },
];

// 收缩按钮由 Header 提供：collapsed 为当前折叠状态，onToggleCollapse 切换它
const AppHeader = ({ collapsed, onToggleCollapse }) => (
  <Header
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: '#fff',
      borderBottom: '1px solid #f0f0f0',
      paddingLeft: 8,
      paddingRight: 24,
    }}
  >
    <Space size={4}>
      <Button
        type="text"
        aria-label={collapsed ? '展开菜单' : '收起菜单'}
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={onToggleCollapse}
        style={{ width: 32, height: 32, fontSize: 16 }}
      />
      <Text strong style={{ fontSize: 16 }}>
        后台管理系统
      </Text>
    </Space>

    <Dropdown placement="bottomRight" menu={{ items: USER_MENU_ITEMS }}>
      <Space size={12} style={{ cursor: 'pointer' }}>
        <Avatar src={CURRENT_USER.avatar || undefined} style={{ backgroundColor: '#1677ff' }}>
          {CURRENT_USER.name.slice(0, 1)}
        </Avatar>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.25 }}>
          <Text>{CURRENT_USER.name}</Text>
          <Text type="secondary" style={{ fontSize: 12 }}>
            {CURRENT_USER.role}
          </Text>
        </div>
      </Space>
    </Dropdown>
  </Header>
);

export default AppHeader;
