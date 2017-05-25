import React, {PropTypes, PureComponent} from 'react';

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import {neos} from '@neos-project/neos-ui-decorators';

@neos(globalRegistry => ({
    i18nRegistry: globalRegistry.get('i18n')
}))

export default class LocationEditor extends PureComponent {
    static propTypes = {
        value: PropTypes.string,
        commit: PropTypes.func.isRequired,
        validationErrors: PropTypes.array,
        highlight: PropTypes.bool,
        options: PropTypes.object,

        i18nRegistry: PropTypes.object.isRequired
    };

    render() {
        const {value, commit, options, i18nRegistry, highlight} = this.props;
        return (<div></div>);
    }
}