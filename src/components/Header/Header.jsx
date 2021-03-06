import React from 'react';
import PropTypes from 'prop-types';
import {
    Menu
} from 'material-ui-icons';
import {
    withStyles, AppBar, Toolbar, IconButton, Hidden, Button,
} from 'material-ui';

import { headerStyle } from 'variables/styles';

import HeaderLinks from './HeaderLinks';

class Header extends React.Component{
    makeBrand(){
        var name;
        this.props.routes.map((prop,key) => {
            if(prop.collapse){
                 prop.views.map((prop,key) => {
                    if(prop.path === this.props.location.pathname){
                        name = prop.sidebarName;
                    }
                    return null;
                })
            } else {
                if(prop.redirect){
                    if(prop.path === this.props.location.pathname){
                        name = prop.sidebarName;
                    }
                }else{
                    if(prop.path === this.props.location.pathname){
                        name = prop.sidebarName;
                    }
                }
            }
            return null;
        })
        return name;
    }
    render(){
        const { classes } = this.props;
        return (
            <AppBar className={classes.appBar} color="default">
                <Toolbar className={classes.container}>
                    <div className={classes.flex}>
                        {/* Here we create navbar brand, based on route name */}
                        <Button href="#" className={classes.title}>{this.makeBrand()}</Button>
                    </div>
                    <Hidden mdDown implementation="css">
                        <HeaderLinks />
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.props.handleDrawerToggle}>
                            <Menu />
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </AppBar>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(headerStyle, { withTheme: true })(Header);
