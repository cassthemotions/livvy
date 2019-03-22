/**
 * This toggles the open and closed position of the global side nav.
 */
export const toggleSideNav = () => state => {
  return {
    sideNavOpen: !state.sideNavOpen
  };
};


