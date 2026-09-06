import { Layout, Typography, Flex } from 'antd';

const { Footer } = Layout;
const { Text } = Typography;

const SITE_INFO = {
  name: 'Layout Study',
};

const AppFooter = () => (
  <Footer
    style={{
      backgroundColor: '#001529', // 深色底，贴近常见官网页脚
    }}
  >
    {/* 底部：版权信息 */}
    <Flex justify="center" align="center" wrap gap={16}>
      <Text style={{ color: 'rgba(255, 255, 255, 0.45)' }}>
        © {new Date().getFullYear()} {SITE_INFO.name} · 仅供学习交流
      </Text>
    </Flex>
  </Footer>
);

export default AppFooter;
