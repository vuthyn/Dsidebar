import styled from '@emotion/styled'

export const SidebarContainer = styled.div`
    width:${props=>props.isSideBarOpen ? '20%' : '5%'};
    max-width: 250px;
    min-width: 80px;
    background-image: linear-gradient(
        315deg,
        rgba(252, 82, 150, 0.8) 0%,
        rgba(246, 112, 90, 0.8) 74%
    ),
    url(${props=>props.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    color: #fff;
    position: relative; // toggler
    transition: .2s ease-in all;
    `;
export const SidebarHeader = styled.h3`
    padding: 20px 0;
    text-align: center;
    marging-bottom: 10px;
    letter-spacing: 0.3rem;
    font-family: ${props=>props.font};
    `;
export const MenuItemContainer = styled.div`
    
    `;
export const MenuItem = styled.div`
    ${props=>!props.isSideBarOpen && `text-align: center;`}
    padding: 6px 20px;
    color: ${props=>props.selected ? 'rgba(255, 255, 255)' : 'rgba(19, 15, 64)'};
    font-family: ${props=>props.font};
    &:after {
        content: '';
        border: 1px solid ${props=>props.selected ? 'rgba(255, 255, 255)' : 'rgba(255, 112, 85)'};
        display: block;
        margin: 8px 0 4px;
    };
    &:hover{
        color: rgba(255, 255, 255);
        transition: .1s ease-in all;
        cursor: pointer;
    };

    // conditional render
    ${props=>!props.selected &&`
        &:hover{
            &:after{
                border: 1px solid rgba(255, 255, 255, 0.2);
                transition: .1s ease-in all;
            }
        }
    `}
    `;

export const Text = styled.p`
    display: ${props=>props.isSideBarOpen ? 'inline' : 'none'};

`;

export const Icon = styled.img`
    ${props=>props.isSideBarOpen &&`
    padding-right: 20px;
    `}
    height: 16px;
    width: 16px;
`;


//Toggler-----------------------------
export const TogglerContainer = styled.div`
    position: absolute;
    width: 30%;
    bottom: 10%;
    left: 0;
    right: 0;
    margin: 0 auto;
`;

export const Toggler = styled.div`
    height: 40px;
    cursor: pointer;
    // border: 1px solid #333;
    positive: relative; // horizontal lines

    &:after{
        content: '';
        position: absolute;
        left: 0;
        top: .25em;
        height: .1em;
        width: 100%;
        background: #fff;
        box-shadow:
            0 .75em 0 0 #fff,
            0 1.5em 0 0 #fff
    }
`;