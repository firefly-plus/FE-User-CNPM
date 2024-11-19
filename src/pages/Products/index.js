import { useEffect, useState } from "react";
import { fecthPorductAPI } from "~/apis";
import classNames from "classnames/bind";

import CardProduct from "~/components/CardProduct";
import style from "./Products.module.scss";
import HeaderSale from "~/components/FormProductSale";
import FormProductSale from "~/components/FormProductSale";
import FormNewProduct from "~/components/FormNewProduct";
import FormBestSaleProduct from "~/components/FormBestSaleProduct";
import FormProductByCategory from "~/components/FormProductByCategory";

const cx = classNames.bind(style);

function Products({ selectedCategories, selectedPrice }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await fecthPorductAPI();

        const updatedProducts = data.map((product) => ({
          ...product,
          minPrice: parseFloat(product.min_price),
          maxPrice: parseFloat(product.max_price),
          discount: product.discount || 0,
        }));

        setProducts(updatedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const filterProducts = () => {
    let filteredProducts = products;

    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedCategories.includes(product.category_name)
      );
    }

    if (selectedPrice) {
      filteredProducts = filteredProducts.filter((product) => {
        const minPrice = product.minPrice;
        switch (selectedPrice) {
          case "Dưới-100k":
            return minPrice < 100000;
          case "100k-200k":
            return minPrice >= 100000 && minPrice < 200000;
          case "200k-300k":
            return minPrice >= 200000 && minPrice < 300000;
          case "300k-400k":
            return minPrice >= 300000 && minPrice < 400000;
          case "400k-500k":
            return minPrice >= 400000 && minPrice < 500000;
          case "Trên-500k":
            return minPrice >= 500000;
          default:
            return true;
        }
      });
    }

    return filteredProducts;
  };

  const filteredProducts = filterProducts();

  return (
    <div className={cx("wrapper")}>
      <section className={cx("section-productByCategory")}>
        <FormProductByCategory/>
      </section>
    </div>
  );
}

export default Products;
