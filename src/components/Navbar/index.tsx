import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import './styles.css'
import { IonIcon } from '@ionic/react'
import NAV_ROUTES from '@/constants/nav_routes'

interface NavbarProps {
  title: string;
  showBackButton?: boolean;
  showMenuButton?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ title, showBackButton = true, showMenuButton = true }) => {
  const history = useHistory();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const pathname = location.pathname;
    const currentTab = pathname.split('/')[1] || 'home';
    setActiveTab(currentTab);
  }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    history.push(`/${tab}`);
  };

  return (
    <nav className="navbar">
      {Object.values(NAV_ROUTES).map((route) => (
        <a
          key={route.route}
          className={`nav-item ${activeTab === route.route && !route.noEffect ? 'active' : ''}`}
          onClick={() => handleTabClick(route.route)}
        >
          <IonIcon icon={route.icon} />
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
