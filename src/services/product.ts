const getProducts = async () => {
  return fetch("http://localhost:3000/products/api")
    .then((res) => res.json())
    .then((data) => data.product);
};

const productService = {
  getProducts,
};

export default productService;
