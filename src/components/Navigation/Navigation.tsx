import React, { useState } from 'react';
import { Header, SideDrawer } from '../';

interface INavigation {
  handleDrawerToggle: (state: boolean) => void;
}

export const Navigation = ({
  handleDrawerToggle,
}: INavigation) => {
  
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    const newState = !isDrawerOpen;
    setIsDrawerOpen(newState);
    handleDrawerToggle(newState);
  }
  return (
    <div>
      <Header isDrawerOpen={isDrawerOpen} handleDrawerToggle={toggleDrawer} />
      <SideDrawer isDrawerOpen={isDrawerOpen} />
    </div>
  )
}