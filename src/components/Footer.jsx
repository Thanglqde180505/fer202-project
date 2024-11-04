import React from 'react';
import '../assets/styles/Footer.css';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assest';

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <h4>Giới thiệu</h4>
        <Link>
          <img src={assets.logo} alt="this is logo shop" className='logo_shop' />
        </Link>
        <ul>
          <li>
            <span>Công ty TNHH T.M.G</span> <br />
            <span>Mã Số Thuế: 0302966294</span>
          </li>
          <li>
            <span><b>Địa Chỉ:</b> 172 Nguyễn Trãi, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh</span>
          </li>
          <li>
            <span><b>Email:</b> daudinhvuotkeo03@gmail.com</span>
            <span><b>Hotline:</b> 0914 516 446 - 0906 954 368 </span>
          </li>
        </ul>
      </div>
      <div>
        <h4>Dành cho Khách Hàng</h4>
        <ul>
          <li>HỢP TÁC NHƯỢNG QUYỀN</li>
          <li>Ưu Đãi VIP MEMBER</li>
          <li>Đăng ký và kiểm tra thành viên</li>
          <li>Hướng dẫn thanh toán</li>
          <li>Giao hàng và phí vận chuyển</li>
          <li>
            Chính sách đổi trả
          </li>
          <li>
            Chính sách bảo mật
          </li>
          <li>
            Điều khoản và thanh toán
          </li>
          <li>Tuyển dụng</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;
