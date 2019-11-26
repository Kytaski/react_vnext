import {node, string} from 'prop-types'
import React from 'react'
import Header from '../components/Header/header'


const MainLayout = ({children, headerTitle}) => (
  <>
    <Header headerTitle={headerTitle} />
    {children}
  </>
)

MainLayout.defaultProps = {
  headerTitle: undefined,
}
MainLayout.propTypes = {
  children: node.isRequired,
  headerTitle: string,
}

export default MainLayout
