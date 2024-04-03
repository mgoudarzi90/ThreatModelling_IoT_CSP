import React, { useState } from 'react';
import { FileTextOutlined, QuestionCircleOutlined, TableOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Table, Modal } from 'antd';

import tables from './data/table';
import Iframe from 'react-iframe';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

function get_components_item(key, label) {
  if (key === '1') {
    return [getItem('Data Consumer', `${label}-data consumer`), getItem('Data', `${label}-data`)];
  } else if (key === '2') {
    return [
      getItem('Hardware', `${label}-Hardware`),
      getItem('Transmission', `${label}-Transmission`),
      getItem('OS/Firmware', `${label}-OSFirmware`),
      getItem('Application', `${label}-Application`),
    ];
  }
  return [getItem('Virtualization', `${label}-Virtualization`)];
}

const items = [
  getItem('Risk Questionnaire', 'Questionnaire-', <QuestionCircleOutlined />, [
    getItem(
      'Data  Consumer and Data Components',
      'Questionnaire-Data',
      <TableOutlined />,
      get_components_item('1', 'Questionnaire-Data')
    ),

    getItem(
      'Hardware, Transmission, OS/Firmware, and Application Components',
      'Questionnaire-Hardware',
      <TableOutlined />,
      get_components_item('2', 'Questionnaire-Hardware')
    ),

    getItem(
      'Virtualization Component',
      'Questionnaire-Virtualization',
      <TableOutlined />,
      get_components_item('3', 'Questionnaire-Virtualization')
    ),
  ]),

  getItem('Report', 'Report-', <FileTextOutlined />, [
    getItem(
      'Data  Consumer and Data Components',
      'Report-Data',
      <TableOutlined />,
      get_components_item('1', 'Report-Data')
    ),

    getItem(
      'Hardware, Transmission, OS/Firmware, and Application Components',
      'Report-Hardware',
      <TableOutlined />,
      get_components_item('2', 'Report-Hardware')
    ),

    getItem(
      'Virtualization Component',
      'Report-Virtualization',
      <TableOutlined />,
      get_components_item('3', 'Report-Virtualization')
    ),
  ]),
];

const App = () => {
  const [currentTable, setCurrentTable] = useState('Questionnaire-Data');
  const [currentComponent, setCurrentComponent] = useState('Data Consumer');
  const [currentData, setCurrentData] = useState([]);
  const [currentLink, setCurrentLink] = useState('');

  // Get the 90vw and 90vh size
  const iframe_height = window.innerHeight * 0.7;
  const iframe_width = window.innerWidth * 0.7;

  const [showModal, setShowModal] = useState(false);

  const handleMenuClick = (e) => {
    changeTable(e.key);
  };

  const structureData = (tableId, Component) => {
    const target = [];
    const table = tables[tableId];
    const keys = Object.keys(table);
    keys.forEach((key) => {
      const techniques = table[key][Component];
      // const consumerRowCount = typeof techniques === 'string' ? 1 : techniques.length;
      if (typeof techniques === 'string') {
        target.push({
          category: key,
          title: techniques,
          consumerRowCount: 1,
        });
      } else {
        for (let i = 0; i < techniques.length; i++) {
          const title = techniques[i][0];
          const link = techniques[i][1];
          target.push({
            category: key,
            title,
            link,
          });
        }
      }
    });
    return target;
  };

  const changeTable = (key) => {
    const titles = key.split('-');
    if (titles[1] === 'Data') {
      setCurrentTable('table1');
      setCurrentData(structureData('table1', titles[2]));
    } else if (titles[1] === 'Hardware') {
      setCurrentTable('table2');
      setCurrentData(structureData('table2', titles[2]));
    } else {
      setCurrentTable('table3');
      setCurrentData(structureData('table3', titles[2]));
    }
    setCurrentComponent(titles[2]);
  };

  const columns = [
    {
      title: 'Category',
      dataIndex: 'category',
      onHeaderCell: (column) => {
        return {
          style: { textAlign: 'center' },
        };
      },
      render: (text, record, index) => {
        const rowSpan = currentData.filter((item) => item.category === text).length;
        if (index === 0 || (index > 0 && currentData[index - 1].category !== text)) {
          return {
            children: text,
            props: {
              rowSpan: rowSpan,
            },
          };
        } else {
          return {
            children: '',
            props: {
              rowSpan: 0,
            },
          };
        }
      },
    },
    {
      title: currentComponent,
      dataIndex: 'title',
      render: (text, record) => (
        <a
          target="_blank"
          onClick={() => {
            setShowModal(true);
            setCurrentLink(record.link);
          }}
        >
          {text}
        </a>
      ),
    },
  ];

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh', display: 'flex' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} width={'20vw'}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['Questionnaire-']}
          defaultOpenKeys={['Questionnaire-']}
          mode="inline"
          items={items}
          onClick={handleMenuClick}
        />
      </Sider>

      <Layout style={{ flex: 1, overflow: 'hidden' }}>
        <Content style={{ margin: '16px', overflow: 'auto' }}>
          <Table dataSource={currentData} columns={columns} bordered pagination={false} />
        </Content>
      </Layout>

      <Modal
        title="Vertically centered modal dialog"
        centered
        open={showModal}
        onOk={() => setShowModal(false)}
        onCancel={() => setShowModal(false)}
        width={'90vw'}
        height={'90vh'}
      >
        <div className="w-full h-full flex justify-center items-center">
          <Iframe
            url={currentLink}
            width={iframe_width}
            height={iframe_height}
            loading="lazy"
            display="block"
            position="relative"
            styles={{ border: '3px solid gray', borderRadius: '8px' }}
          />
        </div>
      </Modal>
    </Layout>
  );
};
export default App;
