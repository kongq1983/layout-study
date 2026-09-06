import { Space, Button, Typography } from 'antd';
import { DownloadOutlined, PlusOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const groupTitleStyle = { display: 'block', marginBottom: 8 };
const rowStyle = { marginTop: 8 };

// 内容区的 antd Button 示例：按「primary 变体 / 其他类型 / 形状 / 块级 / ghost」分组
const ButtonExamples = () => (
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

export default ButtonExamples;
