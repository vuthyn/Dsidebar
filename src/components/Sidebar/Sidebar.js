import React, {useState, useEffect} from 'react'
import * as s from './Sidebar.styles'

export default function Sidebar(props) {
    const {backgroundImage = '', 
        sidebarHeader = {
            fullName: '',
            shortName: ''
        }, 
        menuItems = [],
        fonts = {
            header: '',
            menu: ''
        }
    } = props;

    // State Hooks
    const [selected, setSelected] = useState(menuItems[0].name);
    const [isSideBarOpen, setSideBarOpen] = useState(true);
    const [header, setHeader] = useState(sidebarHeader.fullName);
    // Effect
    useEffect(() =>{
        isSideBarOpen ? setTimeout(() => setHeader(sidebarHeader.fullName), 200) : setHeader(sidebarHeader.shortName)
    }, [isSideBarOpen])
    const handleClick = name =>{
        setSelected(name);
    }

    const menuItemJSX = menuItems.map((item, index)=>{
        const isItemSelected = selected === item.name;
        // console.log(`${item.name} selected ? ${isItemSelected}`)
        return(
            <s.MenuItem 
            key={index} 
            font={fonts.menu}
            selected={isItemSelected}
            onClick={()=>handleClick(item.name)}
            isSideBarOpen={isSideBarOpen}
            >
            <s.Icon isSideBarOpen={isSideBarOpen} src={item.icon}/>
            <s.Text isSideBarOpen={isSideBarOpen}>{item.name}</s.Text>
            </s.MenuItem>
        )
    });
        
    return (
        <s.SidebarContainer backgroundImage={backgroundImage} isSideBarOpen={isSideBarOpen}>
            <s.SidebarHeader font={fonts.header}>{header}</s.SidebarHeader>
            <s.MenuItemContainer>{menuItemJSX}</s.MenuItemContainer>
            <s.TogglerContainer onClick={()=>setSideBarOpen(!isSideBarOpen)}>
                <s.Toggler/>
            </s.TogglerContainer>
        </s.SidebarContainer>
    )
}
