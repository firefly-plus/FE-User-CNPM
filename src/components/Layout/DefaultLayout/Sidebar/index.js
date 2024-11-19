import classNames from "classnames/bind";

import style from "./Sidebar.module.scss"
import { useState, useEffect } from "react";
import { fetchCategoryAPI } from "~/apis";
import { Slider, Switch } from 'antd';

const cx = classNames.bind(style);

function Sidebar({ selectedCategories, setSelectedCategories, selectedPrice, setSelectedPrice }) {
    const [categories, setCategories] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [sliderValue, setSliderValue] = useState([0, 1000000]);

    useEffect(() => {
        const fetchCategories = async () => {
            try{
                const data = await fetchCategoryAPI();
                setCategories(data);
            } catch(error){
                console.error("Error fetching categories", error)
            }
        };
        fetchCategories();
    }, [])

    const handlePriceChange = (e) => {
        const priceValue = e.target.value;
        setSelectedPrice(priceValue);
        console.log(priceValue); // Kiểm tra giá trị cập nhật
    };

    const handleCategoriesChange = (e) => {
        const value = e.target.value;
        setSelectedCategories((prev) =>
            prev.includes(value)
                ? prev.filter((category) => category !== value)
                : [...prev, value]
        );
    };
    const onChange = (checked) => {
        setDisabled(checked);
    };
    const handleSliderChange = (value) => {
        setSliderValue(value);
        // Optionally, update the selectedPrice based on the slider range
        const priceRange = `Từ ${value[0]} - ${value[1]}`;
        setSelectedPrice(priceRange);
    };
    return(
    <div className={cx('wrapper')}>
        <div className={cx('sidebar')}>
            <div className={cx('slide')}>
                <div className={cx('silde-price')}>
                <h3 className={cx('tittle-price')}>LỌC THEO GIÁ</h3>
                    <div className={cx('silder-price')}>
                        <Slider
                            range
                            min={1} 
                            max={99999999999} 
                            defaultValue={[1, 1000000]}
                            disabled={disabled}
                            onChange={handleSliderChange}
                            value={sliderValue}
                        />
                    </div>
                    <div className={cx('content-price')}>
                        <h3 className={cx('label-price')}>Giá từ: {sliderValue[0]}đ - {sliderValue[1]}đ</h3>
                        <button className={cx('btn-filter')}>LỌC</button>
                    </div>
                </div>
            </div> 
            <div className={cx('formSelectPrice')}>
                <h3>Khoảng giá</h3>
                {["", "Dưới-100k", "100k-200k", "200k-300k", "300k-400k", "400k-500k", "Trên-500k"].map((priceRange) => (
                    <div key={priceRange}>
                        <label>
                            <input
                                type="radio"
                                value={priceRange}
                                checked={selectedPrice === priceRange}
                                onChange={handlePriceChange}
                            />
                            {priceRange === "" ? "Tất cả" : `Từ ${priceRange}`}
                         </label>
                    </div>
                    ))}
            </div>

            <div className={cx('formCategory')}>
                <h3>Loại sản phẩm</h3>
                {categories.map((category) =>(
                    <div key={category._id}>
                        <label>
                            <input
                                type="checkbox"
                                value={category.category_name}
                                checked = {selectedCategories.includes(category.category_name)}
                                onChange={handleCategoriesChange}
                            />
                            {category.category_name}
                        </label>
                    </div>
                ))}
            </div>

        </div>
    </div>
    );
}

export default Sidebar;