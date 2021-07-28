import React from 'react'
import * as s from './App.styles'

//components
import Sidebar from './components/Sidebar/Sidebar'
import MainView from "./components/Mainview/MainView"

function App() {
  const backgroundImage = 'images/mountain.jpg';
  const sidebarHeader = {
    fullName: 'Mission Travel',
    shortName: 'Miss'
  };
  const menuItems =[
    {name: 'Home', to: '/', icon: 'icons/home.svg', subMenuItems: []},
    {name: 'About', to: '/about', icon: 'icons/about.svg', subMenuItems: []},
    {name: 'Destinations', to: '/destinations', icon: 'icons/destinations.svg', 
    subMenuItems: [
      {name: 'Canada', to: '/canada'},
      {name: 'Cambodia', to: '/cambodia'},
      {name: 'China', to: '/china'},
      {name: 'Australia', to: '/australia'},
      {name: 'Kenya', to: '/kenya'},
      {name: 'Brazil', to: '/brazil'}
    ]},
    {name: 'Blog', to: '/blog', icon: 'icons/blog.svg', subMenuItems: []},
    {name: 'Services', to: '/services', icon: 'icons/services.svg', subMenuItems: []},
    {name: 'Contacts', to: '/contacts', icon: 'icons/contacts.svg', subMenuItems: []}
  ];
    
  const fonts = {
    header: 'ZCOOL Kuaile',
    menu: 'Poppins'
  }
  return (
    <s.App>
      <Sidebar 
      backgroundImage={backgroundImage}
      sidebarHeader={sidebarHeader}
      menuItems={menuItems}
      fonts={fonts}
      />
      <MainView/>
    </s.App>
  );
}

export default App;
