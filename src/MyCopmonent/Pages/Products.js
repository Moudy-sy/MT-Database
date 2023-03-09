import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Products.css"; // import your CSS file

function Products() {
    const [query, setQuery] = useState("");
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Product 1",
            price: 10.99,
            quantity: 5,
            description: "This is product 1",
            img:
                "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK033?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1623349320000",
            SrcLink: "www.Aliexpress.com",
        },
        {
            id: 2,
            name: "Product 2",
            price: 24.99,
            quantity: 3,
            description: "This is product 2",
            img:
                "https://cdn.shopify.com/s/files/1/0077/5513/7083/products/16522a60-8211-4aa3-a747-6401baab7073_1600x.jpg?v=1630936643",
            SrcLink: "www.Aliexpress.com",
        },
        {
            id: 3,
            name: "iPhone 13 Pro",
            price: 949.00,
            quantity: 8,
            description: "Memory 126GB",
            img:
                "https://www.pngmart.com/files/22/iPhone-14-Pro-Max-PNG.png",
            SrcLink: "www.apple.com",
        },
        {
            id: 4,
            name: "AirPods Pro2",
            price: 219.99,
            quantity: 2,
            description: "This is product 4",
            img:
                "https://ss7.vzw.com/is/image/VerizonWireless/apple-airpods-pro-2nd-generation-mqd83am-a-iset?$acc-lg$",
            SrcLink: "www.apple.com",
        },
        {
            id: 5,
            name: "iPhone 14 Pro Max",
            price: 1199.00,
            quantity: 10,
            description: "Memory 265GB",
            img:
                "https://cdn.so-sure.com/images/rebrand/phones/apple/so-sure_hero-iphone-14-pro.png",
            SrcLink: "www.apple.com",
        },
        {
            id: 6,
            name: "Apple TV 4K",
            price: 129.99,
            quantity: 1,
            description: "This is product 6",
            img:
                "https://www.wearesync.co.uk/wp-content/uploads/2022/12/category-tv-accessories.png",
            SrcLink: "www.apple.com",
        },
    ]);

    const handleSearch = (event) => {
        setQuery(event.target.value);
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="products-container">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search products"
                    value={query}
                    onChange={handleSearch}
                />
            </div>
            <div className="products-list">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="product-image">
                            <img src={product.img} alt={product.name} />
                        </div>
                        <div className="product-details">
                            <h2>{product.name}</h2>
                            <p>Price: £{product.price}</p>
                            <p>Quantity: {product.quantity}</p>
                            <p>Source: {product.SrcLink}</p>
                        </div>
                        <button className="button">Edit Description</button>
                        <button className="button">Add to the Store</button>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Products;

ReactDOM.render(<Products />, document.getElementById('root'));

