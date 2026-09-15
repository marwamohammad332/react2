import React, {useEffect , useState} from 'react'
import axios from 'axios'


export default function Api() {
    const [products , setProducts] =useState([]);
    const getProducts =async ()=>{
        const response = await axios.get('https://dummyjson.com/products')
            setProducts (response.data.products);
            console.log (response.data.products);
    }
    useEffect ( ()=>{
        getProducts();
    } , [])
    return <>
        <div className="container my-4">
            <div className="row g-4">
                {products.map((product) => (
                    <div key={product.id} className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm border-0">
                            <img
                                src={product.thumbnail}
                                className="card-img-top p-3"
                                alt={product.title}
                                style={{ height: '200px', objectFit: 'contain' }}
                            />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h5 className="card-title text-truncate">{product.title}</h5>
                                    <p className="card-text text-muted small" style={{ minHeight: '40px' }}>
                                        {product.description}
                                    </p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <span style={{ color: '#2c3e50' }} className="fw-bold fs-5">${product.price}</span>
                                    <button style={{ color: '#fff', background: '#2c3e50' }} className="btn btn-sm">عرض التفاصيل</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
            
}