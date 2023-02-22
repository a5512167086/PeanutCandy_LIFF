import Nav from 'react-bootstrap/Nav';

const tmpTab = [
  { tabKey: '1', tabName: 'Test' },
  { tabKey: '2', tabName: 'Test' },
  { tabKey: '3', tabName: 'Test' },
  { tabKey: '4', tabName: 'Test' }
];

const CustomTab = () => (
  <Nav fill variant="tabs" defaultActiveKey="/home">
    {tmpTab.map((tab) => (
      <Nav.Item key={tab.tabKey}>
        <Nav.Link>{tab.tabName}</Nav.Link>
      </Nav.Item>
    ))}
  </Nav>
);

export default CustomTab;
