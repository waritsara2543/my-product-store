const getProducts = async () => {
  return fetch(process.env.NEXT_PUBLIC_API_URL + "/products/api")
    .then((res) => res.json())
    .then((data) => data.product);
};

const productService = {
  getProducts,
};

export default productService;
