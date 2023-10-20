import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Space } from "antd";

const Deals = () => {
  const items = [
    {
      label: "1st menu item",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "2nd menu item",
      key: "2",
      icon: <UserOutlined />,
    },
    {
      label: "3rd menu item",
      key: "3",
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: "4th menu item",
      key: "4",
      icon: <UserOutlined />,
      disabled: true,
    },
  ];

  const menu = (
    <Menu>
      {items.map((item) => (
        <Menu.Item
          key={item.key}
          icon={item.icon}
          disabled={item.disabled}
        >
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <div>
      <Dropdown overlay={menu}>
        <Button type="text" className="custom-button">
          <Space>
            Deals <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </div>
  );
};

export default Deals;
