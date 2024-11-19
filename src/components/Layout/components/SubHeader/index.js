import classNames from "classnames/bind";
import styles from "./SubHeader.module.scss";
import { useEffect, useState } from "react";
import { fetchCategoryAPI } from "../../../../apis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faBarsStaggered,
  faChartBar,
  faFileInvoiceDollar,
  faPhone,
  faRectangleList,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Button, Dropdown, Menu } from 'antd';


const cx = classNames.bind(styles);


function SubHeader() {
    const [categories, setCategories] = useState([]); 
    const [dropdownType, setDropdownType] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const loadCategories = async () => {
        try {
            const data = await fetchCategoryAPI();
            setCategories(data);
        } catch (error) {
            console.log("Error fetching categories", error);
        }
        };
        loadCategories();
    }, []);

    const handleMouseEnter = (cat) => {
        setDropdownType(cat);
    };

    const handleMouseLeave = () => {
        setDropdownType(null);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?query=${searchTerm}`);
    };

    const handleCheckOrder = (e) => {
        e.preventDefault();
        navigate(`/checkorder`);
    };

    const items = [
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item
          </a>
        ),
      },
    ];

  return (
    <div className={cx("wrapper")}>
      <div className={cx("subHeader")}>
        <div className={cx('btn-category')}>
          <Dropdown menu={{ items }} placement="bottom">
              <Button><FontAwesomeIcon icon={faBarsStaggered}/>Danh mục sản phẩm</Button>
          </Dropdown>
        </div>
        {/* Product categories */}
        <div className={cx("productCatalog")}>
            <ul className={cx("categoryList")}>
              {categories.length > 0 ? (
                categories.map((cat) => {
                  // Tạo danh sách menu từ subcategories
                  const subcategoryMenu = (
                    <Menu>
                      {cat.subcategories.map((subcat, index) => (
                        <Menu.Item key={index}>{subcat.SupCategoryName || ""}</Menu.Item>
                      ))}
                    </Menu>
                  );

                  return (
                    <li key={cat.category_id} className={cx("categoryItem")}>
                      <Dropdown overlay={subcategoryMenu} trigger={["hover"]} placement="bottom">
                        <span className={cx("dropdownBtn")}>{cat.category_name}</span>
                      </Dropdown>
                    </li>
                  );
                })
              ) : (
                <p>Không có danh mục</p>
              )}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
