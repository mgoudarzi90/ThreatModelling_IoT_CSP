import React, { useState, useEffect } from 'react';
import {
  FileTextOutlined,
  QuestionCircleOutlined,
  TableOutlined,
  InfoCircleOutlined,
  ToolOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Table, Modal, Tag } from 'antd';

import tables from './data/table';
import Iframe from 'react-iframe';

import UNSW_LOGO from './assets/UNSW-Logo-no-background.png';
import Cisco_LOGO from './assets/Cisco-Logo-no-background.png';
import CSCRC_LOGO from './assets/CSCRC-Logo-no-background.png';

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
    return [
      getItem('Data Consumer', `${label}-data consumer`, <TableOutlined />),
      getItem('Data', `${label}-data`, <TableOutlined />),
    ];
  } else if (key === '2') {
    return [
      getItem('Hardware', `${label}-hardware`, <TableOutlined />),
      getItem('Transmission', `${label}-Transmission`, <TableOutlined />),
      getItem('OS/Firmware', `${label}-OS/Firmware`, <TableOutlined />),
      getItem('Application', `${label}-Application`, <TableOutlined />),
    ];
  }
  return [getItem('Virtualization', `${label}-Virtualization`, <TableOutlined />)];
}

const items = [
  getItem('Overview', 'Welcome-Overview', <InfoCircleOutlined />),
  getItem('Threat Monitoring Framework', 'Questionnaire-', <QuestionCircleOutlined />, [
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
  getItem('Threat Analysis Tool', 'Tool', <ToolOutlined />, [
    getItem(
      'Data  Consumer and Data Components',
      'Tool-Data',
      <TableOutlined />,
      get_components_item('1', 'Tool-Data')
    ),

    getItem(
      'Hardware, Transmission, OS/Firmware, and Application Components',
      'Tool-Hardware',
      <TableOutlined />,
      get_components_item('2', 'Tool-Hardware')
    ),

    getItem(
      'Virtualization Component',
      'Tool-Virtualization',
      <TableOutlined />,
      get_components_item('3', 'Tool-Virtualization')
    ),
  ]),
  getItem('Report', 'Report-', <FileTextOutlined />, [
    getItem(
      'Data  Consumer and Data Components',
      'Report-Data',
      <FileTextOutlined />,
      get_components_item('1', 'Report-Data')
    ),

    getItem(
      'Hardware, Transmission, OS/Firmware, and Application Components',
      'Report-Hardware',
      <FileTextOutlined />,
      get_components_item('2', 'Report-Hardware')
    ),

    getItem(
      'Virtualization Component',
      'Report-Virtualization',
      <FileTextOutlined />,
      get_components_item('3', 'Report-Virtualization')
    ),

    getItem('Overview', 'Report-overview', <FileTextOutlined />),
  ]),
];

const App = () => {
  const [currentTable, setCurrentTable] = useState('Questionnaire-Data');
  const [currentComponent, setCurrentComponent] = useState('Data Consumer');
  const [currentData, setCurrentData] = useState([]);
  const [currentLink, setCurrentLink] = useState('');

  let reportData = tables;

  const [yesSelected, setYesSelected] = useState([]);
  const [noSelected, setNoSelected] = useState([]);
  const [inProcessSelected, setInProcessSelected] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState({});

  const [firstLevel, setFirstLevel] = useState('Welcome');

  useEffect(() => {
    document.title = 'IoT Threat Analysis Tool';
  }, []);

  const iframe_height = window.innerHeight * 0.7;
  const iframe_width = window.innerWidth * 0.7;

  const [showModal, setShowModal] = useState(false);

  const [showToolModal, setShowToolModal] = useState(false);

  const [isOverview, setIsOverview] = useState(true);

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
          const link = `https://attack.mitre.org/techniques/${title}/`;
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
    console.log(key);
    const titles = key.split('-');

    setFirstLevel(titles[0]);

    if (titles[1] === 'Data') {
      setCurrentTable('table1');
      setIsOverview(false);
      setCurrentData(structureData('table1', titles[2]));
    } else if (titles[1] === 'Hardware') {
      setCurrentTable('table2');
      setIsOverview(false);
      setCurrentData(structureData('table2', titles[2]));
    } else if (titles[1] === 'Virtualization') {
      setCurrentTable('table3');
      setIsOverview(false);
      setCurrentData(structureData('table3', titles[2]));
    } else if (titles[1] === 'Overview') {
      setIsOverview(true);
    }
    setCurrentComponent(titles[2]);
  };

  const computeStatus = (record) => {
    // Loop through the selected records and check if the record is in the selected records
    // Check the actual value
    const checkGreen = yesSelected.find((item) => item.category === record.category && item.title === record.title);
    if (checkGreen) {
      return 'green';
    }

    const checkRed = noSelected.find((item) => item.category === record.category && item.title === record.title);
    if (checkRed) {
      return 'red';
    }

    const checkYellow = inProcessSelected.find(
      (item) => item.category === record.category && item.title === record.title
    );
    if (checkYellow) {
      return 'yellow';
    }
    return 'white';
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
      render: (text, record) => {
        if (text === 'Not Available') {
          return <Tag color="red">{text}</Tag>;
        }
        return (
          <a
            onClick={() => {
              console.log(yesSelected);
              console.log(record);
              if (firstLevel === 'Tool') {
                setShowToolModal(true);
                setCurrentLink(record.link);
              } else {
                setShowModal(true);
                setCurrentLink(record.link);
              }
              setSelectedRecord(record);
            }}
            style={{ background: `${computeStatus(record)}`, display: 'inline-block', padding: '5px' }}
          >
            {text}
          </a>
        );
      },
    },
  ];

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh', display: 'flex' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} width={'20vw'}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['Welcome-Overview']}
          defaultOpenKeys={['Welcome-Overview']}
          mode="inline"
          items={items}
          onClick={handleMenuClick}
        />
      </Sider>

      <Layout style={{ flex: 1, overflow: 'hidden' }}>
        <Content style={{ margin: '16px', overflow: 'auto' }}>
          {isOverview === false ? (
            <Table dataSource={currentData} columns={columns} bordered pagination={false} />
          ) : (
            <div className="h-full w-full flex flex-row">
              <div className="w-full flex justify-between">
                <div className="flex flex-col">
                  <div className="text-xl text-gray-600">Welcome to </div>
                  <div className="text-2xl font-bold  ">IoT Threat Analysis Tool</div>
                </div>
                {/* LOGOs */}
                <div className="flex absolute top-5 right-12 gap-6 items-center justify-center">
                  <img src={UNSW_LOGO} alt="UNSW-Logo" width={70} />
                  <img src={Cisco_LOGO} alt="Cisco-Logo" width={70} />
                  <img src={CSCRC_LOGO} alt="CSCRC-Logo" width={55} />
                </div>
              </div>
            </div>
          )}
        </Content>
      </Layout>

      <Modal
        centered
        footer={null}
        onOk={() => setShowModal(false)}
        onCancel={() => setShowModal(false)}
        open={showModal}
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

      <Modal
        centered
        footer={null}
        onOk={() => setShowToolModal(false)}
        onCancel={() => setShowToolModal(false)}
        open={showToolModal}
        width={'90vw'}
        height={'90vh'}
        title="Threat Analysis Tool"
      >
        <div className="w-full h-full flex flex-col justify-center items-center">
          {/* Add a question ask do you consider this attack?  */}
          <div className="w-full ml-8">
            <div className="">
              Is this threat considered in your IoT platform/solution?{' '}
              <span className=" font-semibold ">Please select an appropriate option</span>
            </div>

            {/* Add three button as radio button, YES/NO/In-process */}
            <div className=" w-fit flex justify-between my-4 pl-8 gap-5">
              <button
                onClick={() => {
                  const newYesSelected = [...yesSelected];
                  newYesSelected.push(selectedRecord);
                  setYesSelected(newYesSelected);
                  setShowToolModal(false);
                }}
                className="bg-green-500 text-white px-2 py-2 rounded-lg"
              >
                Yes
              </button>

              <button
                onClick={() => {
                  const newNoSelected = [...noSelected];
                  newNoSelected.push(selectedRecord);
                  setNoSelected(newNoSelected);
                  setShowToolModal(false);
                }}
                className="bg-red-500 text-white px-2 py-2 rounded-lg"
              >
                No
              </button>

              <button
                onClick={() => {
                  const newInProcessSelected = [...inProcessSelected];
                  newInProcessSelected.push(selectedRecord);
                  setInProcessSelected(newInProcessSelected);
                  setShowToolModal(false);
                }}
                className="bg-yellow-500 text-white px-2 py-2 rounded-lg"
              >
                In-process
              </button>
            </div>
          </div>
          <Iframe
            url={currentLink}
            width={iframe_width}
            height={iframe_height - 100}
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
