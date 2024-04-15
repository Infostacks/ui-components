const style = {
    row: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        flexWrap: {xs: 'wrap', sm: 'nowrap'}
    },
    organizationContainer: {
        display: 'flex',
        gap: '16px',
    },
    orgImage: {
        width: '100px',
        height: '100px'
    },
    organizationDetails: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        "& .MuiTypography-root": {
            lineHeight: '150%',
        },
        "& .jobRow-jobTitle": {
            fontSize: '24px',
            fontWeight: 700,
            textAlign: 'start'
        }
    },
    orgNameRow: {
        display: 'flex',
        gap: '10px',
        textAlign: 'start',
    },
    textOrgName: {
        fontSize: '18px',
        fontWeight: 600,
    },
    textJobLocation: {
        fontSize: '16px'
    },
    orgActivitySmall: {
        display: {xs: 'flex', lg: 'none'},
        width: {xs: '100%', lg: '0px'},
        justifyContent: 'start',
        mt: '19px',
    },
    orgActivityLarge: {
        display: {xs: 'none', lg: 'block'},
        width: {xs: '0%', lg: 'max-content'},
    },
    orgActivityContainer: {
        display: 'flex',
        alignItems: 'space-between',
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    activityBox: {
        display: 'flex', 
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'flex-end',
        "& .MuiButton-root": {
            padding: 0,
            margin: 0,
            minWidth: 0,
        },
        my: {xs: 3, sm: 0}
    },
    searchBtn: {
        gridColumnEnd: 9,
        borderRadius: '72px',
        px: '24px !important',
        py: '0px !important',
        background: `linear-gradient(180deg, #5A50D3 0%, #3326C9 100%)`,
        color: 'white',
        // textTransform: 'none',
        height: '40px',
        mx: '2px !important',
    },
    ai_recommend: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontSize: '14px',
        padding: '2px',
        "& .recommended": {
            display: 'flex', 
            alignItems: 'center',
            fontWeight: 700,
            color: '#4950FF',
            gap: '8px',
            fontSize: 'inherit'
        },
    },
}

export default style;