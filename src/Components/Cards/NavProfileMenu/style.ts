const style = {
  paperProps: {
    elevation: 0,
    sx: {
      overflow: "visible",
      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
      mt: 1.5,
      px: 1.5,
      "& .MuiAvatar-root": {
        width: '305px',
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
    mt:1,
    mb: 2,
    display: "flex",
    flexDirection: "row",
    gap: "12px",
    alignItems: "center",
  },
  textStyle: {
    width: '100%',
    textDecoration: "none",
    color: "black",
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
};

export default style;
