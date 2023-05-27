import { NavigationLink } from '../NavigationLink/NavigationLink';
import './NavBar.css';

export const NavBar = () => {
  return (
    <nav className="navigation-bar">
      <NavigationLink 
        to={'/myArticles'} 
        title="My articles" 
      />

      <NavigationLink 
        to={'/newArticles'} 
        title="New articles" 
      />
    </nav>
  );
};