import img1 from '../imeges/img1.webp';
import img2 from '../imeges/img2.webp';
import img3 from '../imeges/img3.webp';
import img4 from '../imeges/img4.webp';
import img5 from '../imeges/img5.webp';
import img6 from '../imeges/img6.webp';

function Portfolio() {


    return <>
        <div id='Portfolio' className="container mx-auto d-flex flex-column justify-content-center align-items-center gap-4" 
            style={{color:'#2c3e50', minHeight:'90vh'}}>
            <h2 className="text-uppercase text-center">
                Product
            </h2>
            <div className="divider-custom divider-light d-flex justify-content-center align-items-center gap-3">
                    <div className="divider-custom-line"
                        style={{ width: '80px', height: '2px', background: '#2c3e50' }}></div>
                    <div className="divider-custom-icon">
                        <svg className="svg-inline--fa fa-star" aria-hidden="true"
                            focusable="false" data-prefix="fas" data-icon="star" role="img"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                            style={{ width: '24px' }}>
                            <path fill="#2c3e50" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                            </path></svg> <i class="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"
                        style={{ width: '80px', height: '2px', background: '#2c3e50' }}></div>
                </div>
                <div className='products d-flex flex-column justify-content-center align-items-center gap-3'>
                    
                </div>

        </div>
    </>
}
export default Portfolio;