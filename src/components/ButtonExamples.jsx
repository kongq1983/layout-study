import { useState } from 'react';
import {
  Badge,
  Button,
  Dropdown,
  Popconfirm,
  Space,
  Tooltip,
  Typography,
} from 'antd';
import {
  DeleteOutlined,
  DownOutlined,
  DownloadOutlined,
  PlusOutlined,
  SearchOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

const groupTitleStyle = { display: 'block', marginBottom: 8 };
const rowStyle = { marginTop: 8 };

const MORE_MENU_ITEMS = [
  { key: 'edit', label: '编辑' },
  { key: 'copy', label: '复制' },
  { key: 'delete', label: '删除' },
];

// 内容区的 antd Button 示例：从基础变体到组合用法（按钮组 / 徽标 / 二次确认 / 下拉 / 加载态）
const ButtonExamples = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    setSubmitting(true);
    setTimeout(() => setSubmitting(false), 1500);
  };

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Title level={4} style={{ margin: 0 }}>
        Button 示例
      </Title>

      <div>
        <Text type="secondary" style={groupTitleStyle}>
          primary 变体（类型 / 尺寸 / 状态）
        </Text>
        <Space wrap style={rowStyle}>
          <Button type="primary" onClick={() => console.log('primary')}>
            主要按钮
          </Button>
          <Button type="primary" icon={<PlusOutlined />}>
            带图标
          </Button>
          <Button type="primary" size="small">
            小尺寸
          </Button>
          <Button type="primary" size="large">
            大尺寸
          </Button>
          <Button type="primary" loading>
            加载中
          </Button>
          <Button type="primary" disabled>
            禁用
          </Button>
          <Button type="primary" danger>
            危险操作
          </Button>
        </Space>
      </div>

      <div>
        <Text type="secondary" style={groupTitleStyle}>
          其他类型
        </Text>
        <Space wrap style={rowStyle}>
          <Button>默认 default</Button>
          <Button type="dashed">虚线 dashed</Button>
          <Button type="link">链接 link</Button>
          <Button type="text">文字 text</Button>
        </Space>
      </div>

      <div>
        <Text type="secondary" style={groupTitleStyle}>
          语义化颜色（color + variant，antd 6 新写法）
        </Text>
        <Space wrap style={rowStyle}>
          <Button color="cyan" variant="solid">
            cyan solid
          </Button>
          <Button color="blue" variant="filled">
            blue filled
          </Button>
          <Button color="green" variant="outlined">
            green outlined
          </Button>
          <Button color="danger" variant="solid">
            danger solid
          </Button>
          <Button color="purple" variant="text">
            purple text
          </Button>
          <Button color="gold" variant="dashed">
            gold dashed
          </Button>
        </Space>
      </div>

      <div>
        <Text type="secondary" style={groupTitleStyle}>
          形状
        </Text>
        <Space wrap style={rowStyle}>
          <Button type="primary" shape="round">
            圆角 round
          </Button>
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          <Button shape="circle" icon={<SettingOutlined />} />
          <Button type="dashed" shape="circle" icon={<DownloadOutlined />} />
        </Space>
      </div>

      <div>
        <Text type="secondary" style={groupTitleStyle}>
          按钮组（Space.Compact，比已废弃的 Button.Group 推荐）
        </Text>
        <Space wrap style={rowStyle}>
          <Space.Compact>
            <Button>左</Button>
            <Button>中</Button>
            <Button>右</Button>
          </Space.Compact>
          <Space.Compact>
            <Button icon={<DownloadOutlined />} />
            <Button icon={<SettingOutlined />} />
          </Space.Compact>
        </Space>
      </div>

      <div>
        <Text type="secondary" style={groupTitleStyle}>
          链接型（href 会渲染成 a 标签）
        </Text>
        <Space wrap style={rowStyle}>
          <Button type="link" href="https://ant.design" target="_blank" rel="noreferrer">
            Ant Design 官网
          </Button>
          <Button href="https://react.dev" target="_blank" rel="noreferrer">
            普通按钮 + href
          </Button>
        </Space>
      </div>

      <div>
        <Text type="secondary" style={groupTitleStyle}>
          图标按钮（配 Tooltip 提示 / Badge 徽标）
        </Text>
        <Space wrap style={rowStyle}>
          <Tooltip title="搜索">
            <Button shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Tooltip title="设置">
            <Button type="primary" shape="circle" icon={<SettingOutlined />} />
          </Tooltip>
          <Badge count={5}>
            <Button>消息</Button>
          </Badge>
          <Badge dot>
            <Button shape="circle" icon={<SettingOutlined />} />
          </Badge>
        </Space>
      </div>

      <div>
        <Text type="secondary" style={groupTitleStyle}>
          危险操作（Popconfirm 二次确认）
        </Text>
        <Space wrap style={rowStyle}>
          <Popconfirm
            title="确认删除？"
            okText="删除"
            cancelText="取消"
            okButtonProps={{ danger: true }}
            onConfirm={() => console.log('deleted')}
          >
            <Button type="primary" danger icon={<DeleteOutlined />}>
              删除
            </Button>
          </Popconfirm>
        </Space>
      </div>

      <div>
        <Text type="secondary" style={groupTitleStyle}>
          下拉操作（Dropdown）
        </Text>
        <Space wrap style={rowStyle}>
          <Dropdown
            menu={{ items: MORE_MENU_ITEMS, onClick: ({ key }) => console.log(key) }}
          >
            <Button>
              更多 <DownOutlined />
            </Button>
          </Dropdown>
        </Space>
      </div>

      <div>
        <Text type="secondary" style={groupTitleStyle}>
          加载态（点击后 loading 1.5 秒）
        </Text>
        <Space wrap style={rowStyle}>
          <Button type="primary" loading={submitting} onClick={handleSubmit}>
            {submitting ? '提交中…' : '点击提交'}
          </Button>
        </Space>
      </div>

      <div>
        <Text type="secondary" style={groupTitleStyle}>
          块级（block，占满宽度）
        </Text>
        <Button type="primary" block style={rowStyle}>
          块级按钮 block
        </Button>
      </div>

      <div>
        <Text type="secondary" style={groupTitleStyle}>
          幽灵按钮（ghost，需深色底才看得见）
        </Text>
        <div style={{ background: '#001529', padding: 12, borderRadius: 6 }}>
          <Space wrap>
            <Button type="primary" ghost>
              primary ghost
            </Button>
            <Button ghost>default ghost</Button>
          </Space>
        </div>
      </div>
    </Space>
  );
};

export default ButtonExamples;
