import classNames from "classnames/bind";
import styles from './ModalFeedback.module.scss';
import React, { useState } from "react";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Input, message, Upload, Rate, Button } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles);
const { TextArea } = Input;

// Hàm để chuyển file sang Base64
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

// Hàm kiểm tra file trước khi upload
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('Bạn chỉ có thể tải lên file JPG/PNG!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Hình ảnh phải nhỏ hơn 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

// Thành phần chính của ModalFeedback
const ModalFeedback = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [value, setValue] = useState(0);

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const desc = ['Rất tệ', 'Tệ', 'Bình thường', 'Tốt', 'Tuyệt vời'];

  return (
    <div className={cx('wrapper')}>
        <div className={cx('feedback-product')}>
            <TextArea 
            className="content-feedback"
            rows={5} 
            placeholder="Mời bạn chia sẻ một số cảm nhận về sản phẩm......." 
            maxLength={200} 
            />
        <div className={cx('picture')}>
            <Upload
            name="avatar"
            listType="picture-card"
            className= {cx('img-feedback')}
            showUploadList={false}
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            beforeUpload={beforeUpload}
            onChange={handleChange}
            >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
        </div>
        
        <div className={cx('rate')}>
            <div className={cx('title-rate')}>
                <p>Bạn cảm thấy thế nào về sản phẩm? (Chọn sao)</p>
            </div>
           <div className={cx('form-star')}>
                <Rate 
                    tooltips={desc}
                    onChange={setValue} 
                    value={value} 
                    character={<span className={cx('custom-star')}>
                        <FontAwesomeIcon className={cx('icon-star')} icon={faStar}/>
                    </span>}
                    className= {cx('rate-feedback')} />
                
           </div>
        </div>

        <Button className={cx('btn-send')}>GỬI ĐÁNH GIÁ</Button>
      </div>
    </div>
  );
};

export default ModalFeedback;
