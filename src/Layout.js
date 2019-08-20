import React from 'react';
import injectSheet from "react-jss";


export const styles = (theme) => ({
    centerCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    globalWrapper: {
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: theme.backgroundColor,
    },
    contentWrapper: {
        width: '400px',
        minHeight: '100vh',
        backgroundColor: 'lightgray',
    },
});

const StyledLayout = ({classes, children}) => {

    return (
        <div className={classes.globalWrapper + ' ' + classes.centerCenter}>
            <div className={classes.contentWrapper + ' ' + classes.centerCenter}>
                {children}
            </div>
        </div>
    );
};

const Layout = injectSheet(styles)(StyledLayout);

export default Layout;