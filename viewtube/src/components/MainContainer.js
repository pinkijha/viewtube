import React, { useEffect } from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu, toggleMenu } from '../utils/appSlice';

const MainContainer = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen); // Assuming your Redux store has isMenuOpen

  useEffect(() => {
    dispatch(toggleMenu());
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div>
      <div 
        style={{
          scrollbarWidth: "none",        // Firefox
          msOverflowStyle: "none"        // IE and Edge
        }}
        className="w-[84rem] space-x-3 overflow-x-scroll scrollbar-hide"
      >
        <div className={isMenuOpen ? '' : 'ml-20'}> <ButtonList /></div>
      </div>
      
      <div className={isMenuOpen ? '' : 'ml-20'}>
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
