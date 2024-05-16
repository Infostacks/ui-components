const style = {
  container: (jobsPage) => {
    return {
      position: "sticky",
      top: "15px",
      bottom: "15px",
      padding: "24px 24px 0px",
      backgroundColor: jobsPage ? "secondary.extraLight" : "white",
      borderRadius: "16px",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      height: "100%",
      // overflow: 'auto',
      flex: 2,
      alignSelf: "stretch",
      // maxWidth: '925px',
    };
  },
};

export default style;
