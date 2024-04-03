import React, { useState } from 'react';
import { FileTextOutlined, QuestionCircleOutlined, TableOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

function get_mitre_tactic_item(key) {
  const Mitre_tactics = [
    getItem('Reconnaissance', `${key}1`),
    getItem('Resource Development', `${key}2`),
    getItem('Initial Access', `${key}3`),
    getItem('Execution', `${key}4`),
    getItem('Persistence', `${key}5`),
    getItem('Privilege Escalation', `${key}6`),
    getItem('Defense Evasion', `${key}7`),
    getItem('Credential Access', `${key}8`),
    getItem('Discovery', `${key}9`),
    getItem('Lateral Movement', `${key}10`),
    getItem('Collection', `${key}11`),
    getItem('Command and Control', `${key}12`),
    getItem('Exfilteration', `${key}13`),
    getItem('Inhibit Response', `${key}14`),
    getItem('Impair Control', `${key}15`),
    getItem('Impact', `${key}16`),
  ];

  return Mitre_tactics;
}

function get_components_item(key, label) {
  if (key === '1') {
    return [getItem('Data Consumer', `${label}1`), getItem('Data', `${label}2`)];
  } else if (key === '2') {
    return [
      getItem('Hardware', `${label}1`),
      getItem('Transmission', `${label}2`),
      getItem('OS/Firmware', `${label}3`),
      getItem('Application', `${label}4`),
    ];
  }
  return [getItem('Virtualization', `${label}1`)];
}

const items = [
  getItem('Risk Questionnaire', '1', <QuestionCircleOutlined />, [
    getItem('Data  Consumer and Data Components', '11', <TableOutlined />, get_components_item('1', '11')),
    getItem(
      'Hardware, Transmission, OS/Firmware, and Application Components',
      '12',
      <TableOutlined />,
      get_components_item('2', '12')
    ),
    getItem('Virtualization Component', '13', <TableOutlined />, get_components_item('3', '13')),
  ]),

  getItem('Report', '2', <FileTextOutlined />, [
    getItem('Data  Consumer and Data Components', '21', <TableOutlined />, get_components_item('1', '21')),
    getItem(
      'Hardware, Transmission, OS/Firmware, and Application Components',
      '22',
      <TableOutlined />,
      get_components_item('2', '22')
    ),
    getItem('Virtualization Component', '23', <TableOutlined />, get_components_item('3', '23')),
  ]),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} width={'20vw'}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} defaultOpenKeys={['1']} mode="inline" items={items} />
      </Sider>

      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />

        <Content
          style={{
            margin: '0 16px',
          }}
        >
          {/* <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          {/* <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Bill is a cat.
          </div> */}
        </Content>

        <Footer
          style={{
            textAlign: 'center',
          }}
        ></Footer>
      </Layout>
    </Layout>
  );
};
export default App;
