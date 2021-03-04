import React, { useState } from 'react';
import { Header, SideDrawer } from '../';

interface INavigation {

}

export const Navigation = ({

}: INavigation) => {
  
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }
  return (
    <div>
      <Header isDrawerOpen={isDrawerOpen} handleDrawerToggle={toggleDrawer} />
      <SideDrawer isDrawerOpen={isDrawerOpen} />
    </div>
  )
}