import React, { useState, useEffect } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {
  FaHome ,
  FaUsers,
  FaCog,
  FaChartBar,
  FaSignOutAlt,
  FaBars,
} from 'react-icons/fa';
import './Sidebar.css';
import img from "../../assets/images/profail.jpg"


function CustomSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleCollapse = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <Sidebar
      collapsed={collapsed}
      backgroundColor="var(--light-color)"
      transitionDuration={500}
      className="min-h-screen relative flex flex-col"
    >
      {!collapsed && (
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={toggleCollapse}
            className="text-[var(--text-color)] text-lg p-2 hover:bg-gray-100 rounded-full transition"
          >
            <FaBars />
          </button>
        </div>
      )}

      {!collapsed && (
        <div style={{padding:"50px"}}  className="flex-grow flex flex-col justify-center items-center">
          <div className="flex items-center gap-3 px-4">
            <div className="w-12 h-12 rounded-full border-2 border-[var(--text-color)] overflow-hidden">
              <img
                src={img}
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[var(--text-color)] font-semibold text-sm">
              John Doe
            </p>
          </div>
        </div>
      )}

      <hr className='opacity-25' />
      <div className="pb-6">
        <Menu className="mt-2 p-25">
          {collapsed && (
            <MenuItem
              icon={<FaBars />}
              onClick={toggleCollapse}
              style={{ color: 'var(--text-color)' }}
              className="mb-2"
            />
          )}

          <MenuItem
            icon={<FaHome  />}
            style={{ color: 'var(--text-color)' }}
          >
            Hospital Dashboard
          </MenuItem>

          <SubMenu
            label="Emergency "
            icon={<FaUsers />}
            style={{ color: 'var(--text-color)' }}
          >
            <MenuItem style={{ color: 'var(--text-color)' }}>
              --
            </MenuItem>
            <MenuItem style={{ color: 'var(--text-color)' }}>
              --
            </MenuItem>
          </SubMenu>

          <MenuItem
            icon={<FaChartBar />}
            style={{ color: 'var(--text-color)' }}
          >
            Analytics
          </MenuItem>

          <MenuItem
            icon={<FaCog />}
            style={{ color: 'var(--text-color)' }}
          >
            Settings
          </MenuItem>

          <MenuItem
            icon={<FaSignOutAlt />}
            style={{ color: 'var(--text-color)' }}
          >
            Logout
          </MenuItem>
        </Menu>
      </div>
    </Sidebar>
  );
}

export default CustomSidebar;
