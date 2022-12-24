import React, { FC } from 'react';
import './about.scss';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useTitle } from '../../hooks';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const About: FC = () => {
  useTitle('About');
  return (
    <div className={'aboutWrapper'}>
      <div className={'about'}>
        <h1>Giới thiệu </h1>
        <div className={'aboutInfo'}>
          <div className={'aboutFeatures'}>
            <div className={'aboutFeaturesLeft'}>
              <h4>Tính năng ứng dụng:</h4>
              <ul className={'dashed'}>
                <li>Tạo bài viết</li>
                <li>Sửa thông tin người dùng </li>
                <li>Xem danh sách bài viết</li>
                <li>Xem bài viết</li>
                <li>Xem bài viết mới nhất</li>
                <li>Sắp xếp bài viết</li>
                <li>Tạo bài viết</li>
                <li>Tương tác bài viết</li>
              </ul>
            </div>
          </div>
          <h4 className={'aboutStack'}>Công nghệ sử dụng</h4>
          <p>
            React, NestJS, Redux, PostgreSQL, SCSS, TypeScript, Axios, Postman,
            JWT
          </p>
          <h3>Liên Hệ </h3>
          <div className={'aboutSocials'}>
            <div className={'aboutSocialsItem'}>
              <MailOutlineIcon className={'socialIcon'} />
              <span className={'socialItemSpan'}>nkien6962@gmail.com</span>
            </div>
            <div className={'aboutSocialsItem'}>
              <LocationOnIcon className={'socialIcon'} />
              <span className={'socialItemSpan'}>VietNam</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
