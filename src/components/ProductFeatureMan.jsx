import React from 'react'
import '../assets/styles/ProductFeatureMan.css';
import { Link } from 'react-router-dom';
const ProductFeatureMan = () => {
    return (
        <>
            <div className='container-feature d-flex gap-3 p-5 align-items-center justify-content-center'>
                {/* Right Side */}
                <div className='left-side'>
                    <Link to='/collection'>
                        <img src="https://file.hstatic.net/1000402464/file/jh_hinh_con_web__banner_vuong.jpg" alt="this is banner" />
                    </Link>
                </div>
                {/* Left Side */}
                <div className='right-side d-flex flex-column gap-2'>
                    <div className='d-flex gap-3'>
                        <Link to='/collection'>
                            <img src="https://file.hstatic.net/1000402464/file/jh_hinh_con_web__banner_vuong_menu_3.jpg" alt="this is image feature for man" />
                        </Link>
                        <Link to='/collection'>
                            <img src="https://file.hstatic.net/1000402464/file/jh_hinh_con_web__banner_vuong_menu_1.jpg" alt="this is image feature for man" />
                        </Link>
                    </div>

                    <div className='d-flex gap-3'>
                        <Link to='/collection'>
                            <img src="https://file.hstatic.net/1000402464/file/jh_hinh_con_web__banner_vuong_menu_2.jpg" alt="this is image feature for man" />
                        </Link>
                        <Link to='/collection'>
                            <img src="https://file.hstatic.net/1000402464/file/jh_hinh_con_web__banner_vuong_menu_4.jpg" alt="this is image feature for man" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='btn-show-all text-center p-4'>
                <button>
                    <Link to='/collection'>Xem Tất Cả Các Sản Phẩm</Link>
                </button>
            </div>

        </>

    )
}

export default ProductFeatureMan;
