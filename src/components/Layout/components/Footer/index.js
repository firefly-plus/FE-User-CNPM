import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import images from "~/assets/images";
// import Map from '~/components/Map';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("footer-wrapper", "container-fill")}>
      <footer className={cx("footer", "row")}>
        <div className={cx("footer-column", "col-md-3")}>
            <Link Link to="/"  className={cx('logo')}>
              <img src={images.logo} alt="logo" />
            </Link>
          <p>
            Địa chỉ: Số 2 ngách 43/59 phố Chùa Bộc, Phường Khương Thượng, Quận
            Đống đa, Thành phố Hà Nội, Việt Nam
          </p>
          <p>Hotline: 0987654321 - Zalo: 0965645127</p>
          <h3>Giờ làm việc</h3>
          <p>Từ thứ 2 đến Chủ nhật, 8h00 đến 21h00</p>
          {/* <img src="https://cdn1.vieclam24h.vn/upload/files_cua_nguoi_dung/logo/2018/04/02/1522656822_640.jpg" alt="Logo"/> */}
        </div>
        <div className={cx("footer-column", "col-md-1")}>
          <h3>KHÁM PHÁ</h3>
          <ul>
            <li>Charms</li>
            <li>Vòng tay</li>
            <li>Dây chuyền</li>
            <li>Hoa tai</li>
            <li>Nhẫn</li>
          </ul>
        </div>
        <div className={cx("footer-column", "col-md-2")}>
          <h3>CHĂM SÓC KHÁCH HÀNG</h3>
          <ul>
            <li>Câu hỏi thường gặp</li>
            <li>Chính sách bảo mật</li>
            <li>Chính sách thanh toán</li>
            <li>Chính sách giao nhận</li>
            <li>Chính sách đổi hàng</li>
            <li>Cách thức bảo quản</li>
          </ul>
        </div>

        <div className={cx("footer-column", "col-md-1")}>
          <h3>DỊCH VỤ GIAO HÀNG</h3>
          <ul>
            <li>Giao hàng tiết kiệm</li>
            <li>Ahamove</li>
            <li>Kiểm tra đơn hàng</li>
          </ul>
        </div>

        <div className={cx("footer-column", "col-md-2")}>
          <h3>HỆ THỐNG CỬA HÀNG</h3>
          <ul>
            <li>Cừa hàng toàn quốc</li>
          </ul>
        </div>

        <div className={cx("footer-column", "col-md-1")}>
          <h3>VỀ CHÚNG TÔI</h3>
          <ul>
            <li>Về Pandora</li>
            <li>Câu chuyện Pandora</li>
            <li>Về Tập Đoàn Norbreeze</li>
            <li>Tuyển dụng</li>
            <li>Liên hệ</li>
          </ul>
        </div>
        <div className={cx("footer-column", "col-md-2")}>
          <h3 className={cx("title-social")}>MẠNG XÃ HỘI</h3>
          <div className={cx("social-icons")}>
            {/* <Map/> */}
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img
                src="https://news.khangz.com/wp-content/uploads/2023/05/DOI-TEN-FACEBOOK-1.jpg"
                alt="Facebook"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
