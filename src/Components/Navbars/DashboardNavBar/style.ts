const style = {
  navBarContainer: {
    width: "100%",
    bgcolor: "",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #E5E5E5",
    px: { xs: "5px", md: "16px" },
    boxSizing: "border-box",
    background: "",
  },
  navBarInnerBox: {
    minWidth: "150px",
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 0px 12px 0px",
    alignItems: "center",
    gap: "24px",
  },
  paperProps: {
    elevation: 0,
    sx: {
      overflow: "visible",
      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
      mt: 1.5,
      "& .MuiAvatar-root": {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1,
      },
      "&::before": {
        content: '""',
        display: "block",
        position: "absolute",
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        bgcolor: "background.paper",
        transform: "translateY(-50%) rotate(45deg)",
        zIndex: 0,
      },
    },
  },
  imageContainer: {
    mt: 2,
    mb: 3,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    "&:hover": {
      "> div": {
        background: "none",
      },
      "> div > img": {
        transform: "scale(1.1)",
      },
    },
  },
  colorBox: {
    backgroundColor: 'accent.main',
    width: '100%',
    height: 10
  },
  imageStyle: {
    transition: 'all 0.2s linear',
    width: '110px',
    height: '110px',
    borderRadius: '50%',
    marginTop: -30,
    border: '3px solid white',
    zIndex: 2
  },
  textStyle: {
    textDecoration: 'none',
    color: 'black',
    padding: '0px 40px'
  }
};
export default style;
