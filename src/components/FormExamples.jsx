import { useState } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  Space,
  Switch,
  Typography,
} from 'antd';

const { Title, Text } = Typography;

const groupTitleStyle = { display: 'block', marginBottom: 8 };

const CITY_OPTIONS = [
  { value: 'bj', label: '北京' },
  { value: 'sh', label: '上海' },
  { value: 'gz', label: '广州' },
];

// 内容区的 antd Form 示例：校验提交 / 实例方法 / 布局切换 / 常用控件
const FormExamples = () => {
  const [form] = Form.useForm();
  const [layout, setLayout] = useState('horizontal');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(null);

  const handleFinish = (values) => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(values);
    }, 800);
  };

  const handleReset = () => {
    form.resetFields();
    setSubmitted(null);
  };

  const handleFill = () => {
    form.setFieldsValue({ username: 'admin', email: 'admin@example.com' });
  };

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Title level={4} style={{ margin: 0 }}>
        Form 示例
      </Title>

      <div>
        <Text type="secondary" style={groupTitleStyle}>
          基础表单（校验规则 / 提交 / 重置 / form 实例方法）
        </Text>
        <Form
          form={form}
          layout="vertical"
          style={{ maxWidth: 480, marginTop: 8 }}
          onFinish={handleFinish}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              { required: true, message: '请输入用户名' },
              { min: 3, message: '至少 3 个字符' },
            ]}
          >
            <Input placeholder="请输入用户名" allowClear />
          </Form.Item>

          <Form.Item
            label="邮箱"
            name="email"
            rules={[
              { required: true, message: '请输入邮箱' },
              { type: 'email', message: '邮箱格式不正确' },
            ]}
          >
            <Input placeholder="请输入邮箱" allowClear />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          <Form.Item>
            <Space wrap>
              <Button type="primary" htmlType="submit" loading={submitting}>
                提交
              </Button>
              <Button onClick={handleReset}>重置</Button>
              <Button type="link" onClick={handleFill}>
                填入示例数据
              </Button>
            </Space>
          </Form.Item>
        </Form>

        {submitted && (
          <pre
            style={{
              background: '#f5f5f5',
              padding: 12,
              borderRadius: 6,
              maxWidth: 480,
              overflow: 'auto',
            }}
          >
            {JSON.stringify(submitted, null, 2)}
          </pre>
        )}
      </div>

      <div>
        <Text type="secondary" style={groupTitleStyle}>
          布局（horizontal / vertical / inline）
        </Text>
        <Space direction="vertical" style={{ width: '100%', marginTop: 8 }}>
          <Radio.Group value={layout} onChange={(event) => setLayout(event.target.value)}>
            <Radio.Button value="horizontal">horizontal</Radio.Button>
            <Radio.Button value="vertical">vertical</Radio.Button>
            <Radio.Button value="inline">inline</Radio.Button>
          </Radio.Group>

          <Form layout={layout} style={{ maxWidth: 640 }}>
            <Form.Item label="姓名">
              <Input placeholder="姓名" style={{ width: 160 }} />
            </Form.Item>
            <Form.Item label="城市">
              <Select placeholder="请选择" style={{ width: 160 }} options={CITY_OPTIONS} />
            </Form.Item>
            <Form.Item>
              <Button type="primary">查询</Button>
            </Form.Item>
          </Form>
        </Space>
      </div>

      <div>
        <Text type="secondary" style={groupTitleStyle}>
          常用控件（Select / Radio / Checkbox / Switch / TextArea）
        </Text>
        <Form
          layout="vertical"
          style={{ maxWidth: 480, marginTop: 8 }}
          initialValues={{ role: 'user', notify: true }}
        >
          <Form.Item label="角色" name="role">
            <Select
              options={[
                { value: 'admin', label: '管理员' },
                { value: 'user', label: '普通用户' },
              ]}
            />
          </Form.Item>

          <Form.Item label="性别" name="gender">
            <Radio.Group>
              <Radio value="male">男</Radio>
              <Radio value="female">女</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="兴趣" name="hobbies">
            <Checkbox.Group options={['阅读', '运动', '音乐']} />
          </Form.Item>

          <Form.Item label="接收通知" name="notify" valuePropName="checked">
            <Switch />
          </Form.Item>

          <Form.Item label="备注" name="remark">
            <Input.TextArea rows={3} placeholder="请输入备注" />
          </Form.Item>
        </Form>
      </div>
    </Space>
  );
};

export default FormExamples;
