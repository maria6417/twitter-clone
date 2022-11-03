import React from 'react';
import PropTypes from 'prop-types';
import './SidebarOption.css';

function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebar-option ${active && 'sidebar-option--active'}`}>
      <Icon />
      <h2>
        {text}
      </h2>
    </div>
  )
}

SidebarOption.propTypes = {}

export default SidebarOption
