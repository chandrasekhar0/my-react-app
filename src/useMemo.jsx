import { useEffect, useMemo } from "react";
import { useState } from "react";

function ProductsPage() {
  const [products, setProducts] = useState([{name:"iphone",id:1},{name:"samsung",id:2}]);
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const filteredProducts = useMemo(()=>products.filter(product => {
    console.log("Filtering...");
    return product.name
      .toLowerCase()
      .includes(search.toLowerCase());
  }),[products,search]);

  return (
    <>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <button
        onClick={() => setCartCount(prev => prev + 1)}
      >
        Cart: {cartCount}
      </button>

      {filteredProducts.map(product => (
        <p key={product.id}>{product.name}</p>
      ))}
    </>
  );
}

export default ProductsPage;