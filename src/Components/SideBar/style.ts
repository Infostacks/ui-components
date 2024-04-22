const TRANSITION_TIME = '0.3s'

const style = {
  containerBoxSideBar: (isCollapsed:boolean) => ({
    display: "flex",
    width: isCollapsed ? "70px" : "265px",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "space-between",
    borderRight: "1px solid  #E5E5E5",
    transition: `width ${TRANSITION_TIME} ease-in-out`,
    paddingTop: '0.5rem',
    boxSizing: 'border-box',
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
    py: '12px',
    pl: 'clamp(4px, 2vw, 16px)',
    pr: isCollapsed ? '0px' : 'clamp(4px, 2vw, 16px)',
    transition: `all ${TRANSITION_TIME} ease`,
    height: '30px',
    cursor:'pointer',
  }),
  logoTypo: (isCollapsed:boolean) => ({
    fontSize: '24px',
    width: 'auto',
    maxWidth: isCollapsed ? '0%': '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontWeight: 700,
    transition: `all ${TRANSITION_TIME} linear`,
  }),
  childCTransition: (isCollapsed:boolean) => ({
    cursor: "pointer",
    display: "flex",
    width: '100%',
    alignItems: 'center',
    gap: !isCollapsed ? '10px' : '0px',
    py: '12px',
    pl: 'clamp(4px, 2vw, 16px)',
    pr: isCollapsed ? '0px' : 'clamp(4px, 2vw, 16px)',
    transition: `all ${TRANSITION_TIME} linear`,
  }),
  collapseTypo: (isCollapsed:boolean) => ({
    color: "#676E85",
    fontWeight: 500,
    lineHeight: "23px",
    fontSize: '1rem',
    width: 'auto',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    maxWidth: isCollapsed ? '0%': '100%',
    transition: `all ${TRANSITION_TIME} linear`,
  }),
  menuItemTypo: (isActive:boolean, isCollapsed:boolean) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    py: '12px',
    pl: 'clamp(4px, 2vw, 16px)',
    pr: isCollapsed ? '0px' : 'clamp(4px, 2vw, 16px)',
    background: isActive ? "#E6ECFF" : "",
    borderRadius: "12px",
    transition: `all ${TRANSITION_TIME} linear`,
  }),
};

export default style;
