import React from 'react';
import cn from 'classnames';

import { NavMenuItem } from 'shared/view/components';
import { Drawer, IconButton } from 'shared/view/elements';
import { MenuIcon, ClearIcon } from 'shared/view/elements/Icons';

import { menuItems } from '../constants';
import { StylesProps, provideStyles } from './NavDrawer.style';

function NavDrawer(props: StylesProps) {
  const { classes } = props;
  const [opened, setOpened] = React.useState(false);
  const handleDrawerToggle = React.useCallback(() => setOpened(!opened), [opened]);

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={handleDrawerToggle}
        className={cn(classes.button, { [classes.opened]: opened })}
      >
        {opened ? <ClearIcon /> : <MenuIcon />}
      </IconButton>
      <Drawer
        variant="temporary"
        anchor={'right'}
        open={opened}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <div className={classes.root}>
          {menuItems.map(item => (
            <NavMenuItem key={item.title} className={classes.link} {...item} />
          ))}
        </div>
      </Drawer>
    </>
  );
}

export default provideStyles(NavDrawer);
