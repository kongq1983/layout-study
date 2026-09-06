import { useState } from 'react';
import { Layout } from 'antd';
import AppSider, { FLAT_MENU_ITEMS } from './components/AppSider.jsx';
import AppHeader from './components/AppHeader.jsx';
import AppFooter from './components/AppFooter.jsx';

const { Content } = Layout;

const App = () => {
  const [selectedKey, setSelectedKey] = useState('org');
  const [collapsed, setCollapsed] = useState(false);

  const currentLabel = FLAT_MENU_ITEMS.find((item) => item.key === selectedKey)?.label;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppSider selectedKey={selectedKey} onSelect={setSelectedKey} collapsed={collapsed} />
      <Layout>
        <AppHeader collapsed={collapsed} onToggleCollapse={() => setCollapsed((prev) => !prev)} />
        <Content>Content{currentLabel ? ` · ${currentLabel}` : ''}</Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default App;
