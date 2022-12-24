import React, { FC, useState } from 'react';
import './sidebar.scss';
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import CreateIcon from '@mui/icons-material/Create';
import InfoIcon from '@mui/icons-material/Info';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import MailIcon from '@mui/icons-material/Mail';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ModalWindow from '../modalWindow/ModalWindow';
import { fetchPosts } from '../../store/reducers/posts/actionCreators';
import { useAppSelector } from '../../hooks';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const Sidebar: FC<{ homePage: boolean }> = ({ homePage }) => {
  const { isAuth } = useAppSelector((state) => state.auth);
  const { postsType } = useAppSelector((state) => state.posts);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleClick = (path: string) => {
    if (isAuth) {
      return navigate(`/${path}`);
    } else {
      setShowModal(true);
    }
  };
  const handleSelectPosts = (type: 'latest' | 'hot' | 'best') => {
    dispatch(fetchPosts({ type: type }));
  };

  return (
    <div className={'sidebar'}>
      <div className={'menu bottom'}>
        <ul>
          <Link to={'/'} className={'link'}>
            <li>
              <HomeIcon className={'sidebarIcon'} />
              <span>Trang chủ </span>
            </li>
          </Link>
          <li onClick={() => handleClick('profile')}>
            <PersonIcon className={'sidebarIcon'} />
            <span>Hồ sơ</span>
          </li>
          <Link to={'/tags'} className={'link'}>
            <li>
              <LocalOfferIcon className={'sidebarIcon'} />
              <span>Thẻ bài viết</span>
            </li>
          </Link>
          {/* <li onClick={() => handleClick('create')}>
            <CreateIcon className={'sidebarIcon'} />
            <span>Tạo bài viết</span>
          </li> */}
          <Link to={'about'} className={'link'}>
            <li>
              <InfoIcon className={'sidebarIcon'} />
              <span>Giới thiệu</span>
            </li>
          </Link>
          <Link to={'contact'} className={'link'}>
            <li>
              <MailIcon className={'sidebarIcon'} />
              <span>Thông tin liên hệ</span>
            </li>
          </Link>
        </ul>
      </div>
      <ModalWindow setShowModal={setShowModal} showModal={showModal} />
      {homePage && (
        <div className={'menu'}>
          <hr></hr>
          <ul>
            <li
              className={postsType === 'latest' ? 'sidebarItem' : ''}
              onClick={() => handleSelectPosts('latest')}
            >
              <AccessTimeIcon className={'sidebarIcon'} />
              <span>Mới nhất</span>
            </li>
            <li
              className={postsType === 'hot' ? 'sidebarItem' : ''}
              onClick={() => handleSelectPosts('hot')}
            >
              <LocalFireDepartmentIcon className={'sidebarIcon'} />
              <span>Phổ biến</span>
            </li>
            <li
              className={postsType === 'best' ? 'sidebarItem' : ''}
              onClick={() => handleSelectPosts('best')}
            >
              <StarIcon className={'sidebarIcon'} />
              <span>Hay </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
