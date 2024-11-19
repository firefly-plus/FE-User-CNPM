import classNames from "classnames/bind";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import style from "./Home.module.scss";
import images from "~/assets/images";
import icons from "~/assets/icons";
import FormProductSale from "~/components/FormProductSale";
import FormNewProduct from "~/components/FormNewProduct";

const cx = classNames.bind(style);

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};

function Home() {
    return ( 
        <div className={cx('wrapper', 'container')}>
            <Slider {...settings} className={cx('banner')}>
                <div>
                    <img src={images.banner1} alt="Banner 1" />
                </div>
                <div>
                    <img src={images.banner2} alt="Banner 2" />
                </div>
                <div>
                    <img src={images.banner3} alt="Banner 3" />
                </div>
            </Slider>

            <div className={cx('form-action')}>
                <div className={cx('form-option')}>
                    <img src={icons.newProduct} alt="new product"/>
                    <span>HÀNG  MỚI VỀ</span>
                </div>
                <div className={cx('form-option')}>
                    <img src={icons.hotSale} alt="new product"/>
                    <span>BÁN CHẠY</span>
                </div>
                <div className={cx('form-option')}>
                    <img src={icons.precent} alt="new product"/>
                    <span>GIẢM GIÁ</span>
                </div>
                <div className={cx('form-option')}>
                    <img src={icons.orderSearch} alt="new product"/>
                    <span>TRA CỨU ĐƠN HÀNG</span>
                </div>
            </div>
            <hr></hr>

            <section className={cx('section__product-sale')}>
                <div className={cx('form-sale')}>
                    <FormProductSale/>
                </div>
            </section>

            <hr></hr>
            <section className={cx('section__category')}>
                <div className={cx('title')}>
                    <h3>DANH MỤC HOT</h3>
                </div>
               <div className={cx('box-category')}>
                    <div className={cx('box__category-hot')}>
                        <p className={cx('box__category-img')}>
                            <img src="https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2023/01/vong-deo-tay-pandora-moments-moon-stars-open-bangle-599120c01-mau-bac-63be2e9ade540-11012023103554.jpg" alt=""/>
                        </p>
                        <span>Vòng tay</span>
                    </div>
                    <div className={cx('box__category-hot')}>
                        <p className={cx('box__category-img')}>
                            <img src="https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2023/01/vong-deo-tay-pandora-moments-moon-stars-open-bangle-599120c01-mau-bac-63be2e9ade540-11012023103554.jpg" alt=""/>
                        </p>
                        <span>Vòng tay</span>
                    </div>
                    <div className={cx('box__category-hot')}>
                        <p className={cx('box__category-img')}>
                            <img src="https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2023/01/vong-deo-tay-pandora-moments-moon-stars-open-bangle-599120c01-mau-bac-63be2e9ade540-11012023103554.jpg" alt=""/>
                        </p>
                        <span>Vòng tay</span>
                    </div>
                    <div className={cx('box__category-hot')}>
                        <p className={cx('box__category-img')}>
                            <img src="https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2023/01/vong-deo-tay-pandora-moments-moon-stars-open-bangle-599120c01-mau-bac-63be2e9ade540-11012023103554.jpg" alt=""/>
                        </p>
                        <span>Vòng tay</span>
                    </div>
                    <div className={cx('box__category-hot')}>
                        <p className={cx('box__category-img')}>
                            <img src="https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2023/01/vong-deo-tay-pandora-moments-moon-stars-open-bangle-599120c01-mau-bac-63be2e9ade540-11012023103554.jpg" alt=""/>
                        </p>
                        <span>Vòng tay</span>
                    </div>
                    <div className={cx('box__category-hot')}>
                        <p className={cx('box__category-img')}>
                            <img src="https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2023/01/vong-deo-tay-pandora-moments-moon-stars-open-bangle-599120c01-mau-bac-63be2e9ade540-11012023103554.jpg" alt=""/>
                        </p>
                        <span>Vòng tay</span>
                    </div>
               </div>
            </section>
            <hr></hr>

            <section className={cx('section__newproduct')}>
                <div className={cx('form-new')}>
                    <FormNewProduct />
                </div>
               
            </section>
        </div>
     );
}

export default Home;