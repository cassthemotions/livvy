import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import styles from "./styles";

const navItems = [
  {
    name: 'Messenger',
    icon: 'messenger',
    path: '/messenger/'
  },
  {
    name: 'Marketplace',
    icon: 'marketplace',
    path: '/marketplace'
  },
  {
    name: 'Events',
    icon: 'events',
    path: '/events'
  },
  {
    name: 'Maintenace',
    icon: 'maintenance',
    path: '/maintenance'
  },
  {
    name: 'Security',
    icon: 'security',
    path: '/security'
  }
];

const props = {};

function renderNavItems() {
  return navItems.map((item, i) => (
    <NavLink
      exact
      activeClassName={styles.activeNavItem}
      to={item.path}
      key={i}
    >
      <Icon
        name={item.icon}
        size={!props.sideNavOpen ? 'large' : null}
        className={item.indent ? styles.indentedIcon : null}
      />
      <span className={styles.linkName}>{item.name}</span>
    </NavLink>
  ));
}

// const sideNavStyle = classNames(styles.container, {
//   [styles.collapsed]: !props.sideNavOpen
// });

const Navigation = () => {
    return (
        <div style={styles.navLinks}>
          {renderNavItems()}
        </div>
    );
}

export default Navigation;
