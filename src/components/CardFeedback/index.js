import classNames from "classnames/bind";
import styles from './CardFeedback.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function CardFeedback() {
    return ( 
        <div className={cx("wrapper")}>
        
        <div className={cx("contentFeedback")}>
            <div className={cx("username")}>
                <span>Hà Thị Minh Thư</span>
            </div>
            <div className={cx("image-start")}>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
            </div>

            <div className={cx("content")}>
                <p>Nội dung đánh giá,Nội dung đánh giá,Nội dung đánh giá,Nội dung đánh giá,
                Nội dung đánh giá,Nội dung đánh giá,Nội dung đánh giá,Nội dung đánh giá.
                </p>
            </div>
            <div className={cx("time")}>
            <span>6:19 - 04/10/2024</span>
            </div>
        </div>

        <div className={cx("orderFeedback")}>
          <img src = "https://sf-static.tiktokcdn.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png"/>
        </div>
      </div>
     );
}

export default CardFeedback;