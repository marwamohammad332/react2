
import React, {useEffect , useState} from 'react'
import axios from 'axios'


export default function Api() {
    const [products , setProducts] =useState([]);
    const [isLoader, setIsLoader] = useState(true);
    const [error, setError] = useState('');
    const getProducts =async ()=>{
        try {
            const response = await axios.get('https://dummyjson.com/products')
            setProducts (response.data.products);
            console.log (response.data.products)
        }catch (e){
            setError('error to load data');
        }finally {
            setIsLoader(false);
        }
        }
        useEffect (()=>{
            getProducts();
        } , [])
        if (isLoader)
            return <div className=''>Loading...</div>
        if (error)
            return <div >{error}</div>

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
                            <div className="card-body d-flex flex-column g-4 justify-content-between">

                                <h5 className="card-title text-truncate">{product.title}</h5>
                                <p className="card-text text-muted small" style={{ minHeight: '40px' }}>
                                    {product.description}
                                </p>
                                <span style={{ color: '#2c3e50' }} className="fw-bold fs-5 mb-5">${product.price}</span>
                                <button style={{ color: '#fff', background: '#2c3e50' }} className="btn btn-sm">ADD TO CART </button>


                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>

    }