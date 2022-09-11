const ProductsData = () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '00e66eae0fmshd01640b19545f6cp1397e1jsn84d156a82183',
      'X-RapidAPI-Host': 'amazon-product-reviews-keywords.p.rapidapi.com'
    }
  };
  
  fetch('https://amazon-product-reviews-keywords.p.rapidapi.com/product/reviews?asin=B07XQXZXJC&country=US&variants=1&top=0', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

ProductsData();

export default ProductsData;