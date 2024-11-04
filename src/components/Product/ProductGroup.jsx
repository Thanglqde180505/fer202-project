import React from 'react'
import { assets } from '../../assets/assest'
import { Link } from 'react-router-dom'
import '../../assets/styles/ProductGroup.css';
const ProductGroup = () => {
    return (
        <div className='product_group container d-flex flex-column align-items-center'>
            <Link to='/'><img className='logo' src={assets.logo} alt="this is logo shop" /></Link>
            <p className='content text-center'>
                Với thiết kế đơn giản nhưng tinh tế, đồng thời trang phục <b className='name-shop'>ASIN</b> mang đến cho người mặc những ưu điểm vượt bậc:
                Được tạo kiểu để khéo léo che đi những khuyết điểm trên cơ thể . Có thể mix-match biến hóa nhiều kiểu mặc chỉ từ những items quen thuộc .
                Luôn thời trang và không bao giờ lỗi mốt . Giá hợp lý cho sản phẩm chất lượng tuyệt vời .
                Tiết kiệm thời gian trong việc giặt ủi, phối đồ, cực dễ mặc và phù hợp với mọi phong cách Một <b className='name-shop'>ASIN</b> HOÀN TOÀN MỚI đang chờ bạn khám phá!
            </p>
            <div className='feature-product d-flex align-items-center gap-3 p-5'>
                <Link to="/collection" className='item'>
                    <img src="https://file.hstatic.net/1000402464/file/fl_hinh_con_web_banner_fl_1.jpg" className='product_img' alt="this is product feature 1" />
                </Link>
                <Link to="/collection" className='item'>
                    <img src="https://file.hstatic.net/1000402464/file/fl_hinh_con_web_banner_fl_2.jpg" className='product_img' alt="this is product feature 2" />
                </Link>
                <Link to="/collection" className='item'>
                    <img src="https://file.hstatic.net/1000402464/file/fl_hinh_con_web_banner_fl_3.jpg" className='product_img' alt="this is product feature 3" />
                </Link>
                <Link to="/collection" className='item'>
                    <img src="https://file.hstatic.net/1000402464/file/fl_hinh_con_web_banner_fl_4.jpg" className='product_img' alt="this is product feature 4" />
                </Link>
            </div>
        </div>
    )
}

export default ProductGroup
