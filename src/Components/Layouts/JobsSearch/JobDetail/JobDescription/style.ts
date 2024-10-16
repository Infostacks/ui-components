const style = {
    container: {
        overflow: 'auto',
        scrollbarWidth: '8px',
        "::-webkit-scrollbar": {
            width: "8px",
        },
        "::-webkit-scrollbar-thumb": {
            borderRadius: '8px',
            backgroundColor: '#D2DBFF',
            height: '278px',
        },
    },
    jobDetailText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        mb: '16px',
        "button": {
            backgroundColor: "secondary.main",
            margin: '0px 10px',
            padding: '0px',
            minWidth: 'auto'
        }
    },
    jobDetail: {
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '140%',
        textAlign: 'start',
    },
    jobInfoContainer: {
        display: 'flex',
        gap: '24px',
        mb: '16px',
        flexWrap: 'wrap',
    },
    jobInfoRow: {
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'start',
       alignItems: 'start',
       gap: '8px',
    },
    jobInfoSkillsRow: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        gap: '8px',
        mb:'8px',
      
     },
    jobInfoTitle: {
        fontWeight: 700,
    },
    jobInfoStats: {
        display: 'flex',
        gap: '8px',
        "& .MuiTypography-root": {
            backgroundColor: "#D2DBFF",
            padding: '4px 8px',
        },
        flexWrap: 'wrap',
    },
    jobDetailsContainer: {
        display: 'flex',
        gap: '24px',
        flexDirection: 'column',
        maxWidth: '95%'
    },
    jobDetailsCRow: {
        display: 'flex',
        gap: '8px',
        flexDirection: 'column',
        textAlign: 'justify',
        pb: 2
    }
}

export default style;