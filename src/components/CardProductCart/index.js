import classNames from "classnames/bind";
import styles from "./CardProductCart.module.scss";
import { useState, useRef } from "react";
import { formatCurrency } from "~/utils/format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import MessageNotification from "../Message";
import { deleteCartByIdAPI, updateProductQuantityAPI } from "~/apis";

const cx = classNames.bind(styles);

function CardProductCart({
  id_variation,
  id,
  FirstImage,
  SupCategoryName,
  productName,
  variationName,
  originalPrice,
  reducedPrice,
  discount,
  quantity,
  stock,
  totalPrice,
  isDelete,
  onSelectProduct,
  updateSelectedProduct,
}) {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const [isVisible, setIsVisible] = useState(true);
  const [isSelected, setIsSelected] = useState(false);

  const messageRef = useRef();
  const debounceTimeoutRef = useRef(null);

  const calculateTotalPrice = () => reducedPrice * currentQuantity;

  const handleSelect = (e) => {
    console.log("Props truyền vào:", {
      id_variation,
      id,
      FirstImage,
      SupCategoryName,
      productName,
      variationName,
      originalPrice,
      reducedPrice,
      discount,
      quantity,
      stock,
      totalPrice,
      isDelete,
    });

    setIsSelected(e.target.checked);
    onSelectProduct(
      id,
      e.target.checked,
      calculateTotalPrice(),
      id_variation,
      quantity,
      parseFloat(originalPrice),
      parseFloat(reducedPrice),
      discount
    );
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleDeleteProduct = async (id_cart) => {
    console.log("id_cart", id_cart);
    try {
      await deleteCartByIdAPI(id_cart);
      setIsVisible(false);
      messageRef.current.showSuccess("Sản phẩm đã được xóa khỏi giỏ hàng");
    } catch (error) {
      messageRef.current.showError("Lỗi khi xóa sản phẩm khỏi giỏ hàng");
    }
  };

  const handleQuantityChange = async (newQuantity) => {
    setCurrentQuantity(newQuantity);

    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
    debounceTimeoutRef.current = setTimeout(async () => {
      try {
        await updateProductQuantityAPI(id, newQuantity);
        const newTotalPrice = reducedPrice * newQuantity;
        updateSelectedProduct(id, newTotalPrice);
        onSelectProduct(
          id,
          isSelected,
          newTotalPrice,
          id_variation,
          newQuantity,
          parseFloat(originalPrice),
          parseFloat(reducedPrice),
          discount
        );
        messageRef.current.showSuccess("số lượng đã cập nhật thành công");
      } catch (error) {
        console.error("Lỗi khi cập nhật số lượng:", error);
      }
    }, 1000);
  };

  const handleIncrease = () => {
    if (currentQuantity < stock) {
      handleQuantityChange(currentQuantity + 1);
    } else {
      messageRef.current.showWarning("Số lượng vượt quá số lượng có sẵn");
    }
  };

  const handleDecrease = () => {
    if (currentQuantity > 1) {
      handleQuantityChange(currentQuantity - 1);
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={cx("card-product")}>
      <div className={cx("checkbox")}>
        <input type="checkbox" checked={isSelected} onChange={handleSelect} />
      </div>

      <div className={cx("image-product")}>
        <img src={FirstImage} alt={productName} />
      </div>

      <div className={cx("title-product")}>
        <p className={cx("name-category")}>{SupCategoryName}</p>
        <h2 className={cx("name-product")}>{productName}</h2>
        <p className={cx("size")}>{variationName}</p>
        <p className={cx("price")}>
          {discount === 0 ? (
            <>{formatCurrency(originalPrice)}</>
          ) : (
            <>
              {formatCurrency(reducedPrice)}{" "}
              <span className={cx("original-price")}>
                {formatCurrency(originalPrice)}
              </span>
            </>
          )}
        </p>
      </div>

      <div className="wrapper-control">
        <div className={cx("quantity-control")}>
          <button className={cx("decrease")} onClick={handleDecrease}>
            -
          </button>
          <span className={cx("quantity")}>{currentQuantity}</span>
          <button className={cx("increase")} onClick={handleIncrease}>
            +
          </button>
        </div>
        <div className={cx("total_Price")}>
          <p>Tổng: {formatCurrency(calculateTotalPrice())}</p>
        </div>
      </div>

      <div
        className={cx("Trash-control")}
        onClick={() => handleDeleteProduct(id)}
      >
        <FontAwesomeIcon icon={faTrash} className={cx("btn-faTrash")} />
      </div>

      <MessageNotification ref={messageRef} />
    </div>
  );
}

export default CardProductCart;
