const style = {
  containerBoxSideBar: (isCollapsed:boolean) => ({
    display: "flex",
    width: isCollapsed ? "70px" : "265px",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "space-between",
    borderRight: "1px solid  #E5E5E5",
    transition: 'width 0.3s ease-in-out',
    paddingTop: '0.5rem',
    borderSizing: 'border-box',
  }),
  containerBoxSideBarTop: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  childTransition: (isCollapsed:boolean) => ({
    display: "flex",
    gap: !isCollapsed ? '12px' : '0px',
    alignItems: 'center',
    padding: !isCollapsed ? "12px 16px" : '12px 4px 12px 16px',
    transition: 'all 0.6s ease',
    height: '30px'
  }),
  logoTypo: (isCollapsed:boolean) => ({
    fontSize: isCollapsed? '0px': "24px",
    width: isCollapsed? '0px' : 'auto',
    fontWeight: 700,
    // lineHeight: "33px",
    transition: 'all 0.4s ease',
  }),
  childCTransition: (isCollapsed:boolean) => ({
    cursor: "pointer",
    display: "flex",
    width: '100%',
    alignItems: 'center',
    gap: !isCollapsed ? '10px' : '0px',
    padding: !isCollapsed ? "12px 16px" : '12px 4px 12px 16px',
    transition: 'all 0.6s ease',
  }),
  collapseTypo: (isCollapsed:boolean) => ({
    color: "#676E85",
    fontWeight: 500,
    lineHeight: isCollapsed?'0px':"23px",
    fontSize: isCollapsed?'0px':'1rem',
    width: isCollapsed? '0px' : 'auto',
    transition: 'all 0.4s ease',
  }),
  menuItemTypo: (isActive:boolean, isCollapsed:boolean) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    padding: isCollapsed ? '12px 4px 12px 16px': "12px 16px",
    background: isActive ? "#E6ECFF" : "",
    borderRadius: "12px",
    transition: 'all 0.4s ease',
  }),
};

export default style;
