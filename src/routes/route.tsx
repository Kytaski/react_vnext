import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

RouteWrapper.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
}

export default function RouteWrapper({ component: Component, ...rest }) {
    return <Route {...rest} component={Component} />
}