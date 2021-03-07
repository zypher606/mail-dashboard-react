import React, { useState } from 'react';
import { Header, SideDrawer } from '../';

interface INavigation {
  handleDrawerToggle: (state: boolean) => void;
  profile: any,
}

export const Navigation = ({
  handleDrawerToggle,
  profile,
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
      <SideDrawer profile={profile} isDrawerOpen={isDrawerOpen} />
    </div>
  )
}