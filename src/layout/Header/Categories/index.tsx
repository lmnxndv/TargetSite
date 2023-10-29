import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Space } from "antd";
import headerData from "../../../data/headerCategoriesData";
import './style.css'

const Categories: React.FC = () => {
  
  
  return (
    <div className="categories">
      {headerData.sections.map((section) => (
        <Dropdown key={section.title} overlay={renderDropdownMenu(section.links)}>
          <Button type="text" className="custom-button">
            <Space>
              {section.title} <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      ))}
    </div>
  );
};

const renderDropdownMenu = (links) => (
  <Menu>
    {links.slice(0, 4).map((link) => (
      <Menu.Item key={link.url}>
        <a href={link.url}>{link.text}</a>
      </Menu.Item>
    ))}
  </Menu>
);

export default Categories;
