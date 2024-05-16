const style = {
    container: {
        cursor: 'pointer',
        backgroundColor: 'secondary.main',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '12px',
        boxSizing: 'border-box',
        borderRadius: '16px',
        gap: '12px',
        textAlign: 'start',
        position: 'relative',
        minWidth: '150px',
    },
    companyTitle: {
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: '150%',
    },
    position: {
        fontSize: '18px',
        fontWeight: 600,
        lineHeight: '150%', 
    },
    location: {
        fontSize: '14px'
    },
    jobType: {
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap',
        "& .MuiTypography-root" : {
            fontSize: '14px',
            backgroundColor: 'secondary.extraDark',
            fontWeight: 500
        }
    },
    jobStats: {
        display: 'flex',
        alignItems: "center",
        gap: "24px",
        flexWrap: 'wrap',
        "& .MuiTypography-root": {
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        }
    },
    ai_recommend: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '14px',
        "& .recommended": {
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'start',
            fontWeight: 700,
            color: '#4950FF',
            gap: '8px',
            fontSize: 'inherit',
            flex: 3,
        },
        "& .date-recommended": {
            fontSize: 'inherit',
            display: 'flex',
            justifyContent: 'end',
            flex: 1,
        }
    },
    verticalIcon: {
        position: 'absolute',
        top: 0,
        right: 0,

    }
}

export default style;