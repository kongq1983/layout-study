import { Input, InputNumber, Space, Tooltip, Typography } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { TextArea } = Input;

const groupTitleStyle = { display: 'block', marginBottom: 8 };
const rowStyle = { marginTop: 8 };
const inputWidth = { width: 200 };

// 内容区的 antd Input 示例：基础 / 尺寸 / 变体 / 状态 / 前后缀 / 密码 / 搜索 / 多行 / 数字
const InputExamples = () => (
  <Space direction="vertical" size="large" style={{ width: '100%' }}>
    <Title level={4} style={{ margin: 0 }}>
      Input 示例
    </Title>

    <div>
      <Text type="secondary" style={groupTitleStyle}>
        基础用法（placeholder / allowClear / 前后缀图标 / 字数限制）
      </Text>
      <Space wrap style={rowStyle}>
        <Input placeholder="基础输入框" style={inputWidth} />
        <Input placeholder="可一键清空" allowClear style={inputWidth} />
        <Input placeholder="用户名" prefix={<UserOutlined />} style={inputWidth} />
        <Input
          placeholder="带说明后缀"
          suffix={
            <Tooltip title="这里是说明文字">
              <InfoCircleOutlined />
            </Tooltip>
          }
          style={inputWidth}
        />
        <Input placeholder="最多 10 字" maxLength={10} showCount style={inputWidth} />
      </Space>
    </div>

    <div>
      <Text type="secondary" style={groupTitleStyle}>
        尺寸（large / default / small）
      </Text>
      <Space wrap style={rowStyle}>
        <Input size="large" placeholder="large" style={inputWidth} />
        <Input placeholder="default" style={inputWidth} />
        <Input size="small" placeholder="small" style={inputWidth} />
      </Space>
    </div>

    <div>
      <Text type="secondary" style={groupTitleStyle}>
        变体（variant，已取代废弃的 bordered）
      </Text>
      <Space wrap style={rowStyle}>
        <Input variant="outlined" placeholder="outlined" style={inputWidth} />
        <Input variant="filled" placeholder="filled" style={inputWidth} />
        <Input variant="borderless" placeholder="borderless" style={inputWidth} />
      </Space>
    </div>

    <div>
      <Text type="secondary" style={groupTitleStyle}>
        状态（status / 禁用 / 只读）
      </Text>
      <Space wrap style={rowStyle}>
        <Input status="error" placeholder="error" style={inputWidth} />
        <Input status="warning" placeholder="warning" style={inputWidth} />
        <Input placeholder="禁用" disabled style={inputWidth} />
        <Input defaultValue="只读内容" readOnly style={inputWidth} />
      </Space>
    </div>

    <div>
      <Text type="secondary" style={groupTitleStyle}>
        前后缀组合（用 Space.Compact，addonBefore / addonAfter 已废弃）
      </Text>
      <Space.Compact style={{ ...rowStyle, width: 360 }}>
        <Input defaultValue="https://" style={{ width: 90 }} />
        <Input defaultValue="ant.design" />
      </Space.Compact>
    </div>

    <div>
      <Text type="secondary" style={groupTitleStyle}>
        密码框（Input.Password，默认带可见切换）
      </Text>
      <Space wrap style={rowStyle}>
        <Input.Password placeholder="请输入密码" style={inputWidth} />
        <Input.Password placeholder="不显示切换图标" visibilityToggle={false} style={inputWidth} />
      </Space>
    </div>

    <div>
      <Text type="secondary" style={groupTitleStyle}>
        搜索框（Input.Search）
      </Text>
      <Space direction="vertical" style={rowStyle}>
        <Input.Search
          placeholder="输入后回车或点搜索"
          allowClear
          enterButton="搜索"
          style={{ width: 320 }}
          onSearch={(value) => console.log('search:', value)}
        />
        <Input.Search placeholder="图标式搜索按钮" enterButton style={{ width: 320 }} />
      </Space>
    </div>

    <div>
      <Text type="secondary" style={groupTitleStyle}>
        多行文本（TextArea：固定行 / 自适应 / 字数统计）
      </Text>
      <Space direction="vertical" style={{ ...rowStyle, width: '100%', maxWidth: 480 }}>
        <TextArea rows={3} placeholder="固定 3 行" />
        <TextArea autoSize={{ minRows: 2, maxRows: 6 }} placeholder="自适应高度（2~6 行）" />
        <TextArea showCount maxLength={100} placeholder="带字数统计（最多 100 字）" />
      </Space>
    </div>

    <div>
      <Text type="secondary" style={groupTitleStyle}>
        数字输入（InputNumber）
      </Text>
      <Space wrap style={rowStyle}>
        <InputNumber min={1} max={10} defaultValue={3} />
        <InputNumber step={0.5} precision={1} defaultValue={1.5} />
        <InputNumber size="small" defaultValue={1} />
        <InputNumber disabled defaultValue={99} />
      </Space>
    </div>
  </Space>
);

export default InputExamples;
