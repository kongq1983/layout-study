import { useState } from 'react';
import { Layout } from 'antd';
import AppSider, {
  FLAT_MENU_ITEMS,
  BUTTON_DEMO_KEY,
  FORM_DEMO_KEY,
  INPUT_DEMO_KEY,
} from './components/AppSider.jsx';
import AppHeader from './components/AppHeader.jsx';
import AppFooter from './components/AppFooter.jsx';
import ButtonExamples from './components/ButtonExamples.jsx';
import FormExamples from './components/FormExamples.jsx';
import InputExamples from './components/InputExamples.jsx';

const { Content } = Layout;

// 菜单 key → 内容区要渲染的示例组件
const DEMO_COMPONENTS = {
  [BUTTON_DEMO_KEY]: ButtonExamples,
  [FORM_DEMO_KEY]: FormExamples,
  [INPUT_DEMO_KEY]: InputExamples,
};

const App = () => {
  const [selectedKey, setSelectedKey] = useState('org');
  const [collapsed, setCollapsed] = useState(false);

  const currentLabel = FLAT_MENU_ITEMS.find((item) => item.key === selectedKey)?.label;
  const DemoComponent = DEMO_COMPONENTS[selectedKey];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppSider selectedKey={selectedKey} onSelect={setSelectedKey} collapsed={collapsed} />
      <Layout>
        <AppHeader collapsed={collapsed} onToggleCollapse={() => setCollapsed((prev) => !prev)} />
        <Content style={{ padding: 24 }}>
          {DemoComponent ? (
            <DemoComponent />
          ) : (
            <>Content{currentLabel ? ` · ${currentLabel}` : ''}</>
          )}
        </Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default App;
