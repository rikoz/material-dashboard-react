import React from 'react';
import {
    withStyles, Grid, Hidden
} from 'material-ui';
import PropTypes from 'prop-types';

import { RegularCard, P, A } from 'components';

import { iconsStyle } from 'variables/styles';

class Icons extends React.Component{
    render(){
        return (
            <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                    <RegularCard
                        plainCard
                        cardTitle="Material Design Icons"
                        cardSubtitle={
                            <P>
                                Handcrafted by our friends from{' '}
                                <A href="https://design.google.com/icons/" target="_blank" rel="noopener noreferrer">Google</A>
                            </P>
                        }
                        content={
                            <div>
                                <Hidden only={['sm','xs']}>
                                    <iframe className={this.props.classes.iframe} src="https://material.io/icons/" title="Icons iframe">
                                        <p>Your browser does not support iframes.</p>
                                    </iframe>
                                </Hidden>
                                <Hidden only={['lg','md']}>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <h5>The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the
                                            <a href="https://design.google.com/icons/" target="_blank" rel="noopener noreferrer">Material Icons</a>
                                        </h5>
                                    </Grid>
                                </Hidden>
                            </div>
                        }
                    />
                </Grid>
            </Grid>
        );
    }
}

Icons.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(iconsStyle)(Icons);
