import * as React from 'react';

import { Section } from 'app/components/Section/Section';
import { useTranslate, tKeys as tKeysAll } from 'services/i18n';
import { NoSsr } from 'services/adaptability';
import { Tab, TabContext, TabList, TabPanel, Grid } from 'shared/view/elements';
import { makeStyles, getGrid } from 'shared/styles';

import { DevActivityChartSync } from './DevActivityChart/DevActivityChart';
import { Languages } from './Languages';
import { LastCommit } from './LastCommit';
import { Repos } from './Repos';

interface IProps {
  className?: string;
}

const tKeys = tKeysAll.new.devActivity;

export function DevActivity(props: IProps) {
  const { className } = props;
  const classes = useStyles();
  const [currentTab, setCurrentTab] = React.useState<'overview' | 'topRepos'>('overview');
  const { t } = useTranslate();

  const handleTabChange = React.useCallback((_event: React.ChangeEvent<{}>, newValue?: 'overview' | 'topRepos') => {
    newValue && setCurrentTab(newValue);
  }, []);

  return (
    <NoSsr>
      <Section className={className} title={t(tKeys.title.getKey())}>
        <TabContext value={currentTab}>
          <TabList
            classes={{ root: classes.tabsRoot, indicator: classes.indicator, scroller: classes.tabsScroller }}
            onChange={handleTabChange}
            TabIndicatorProps={{}}
            aria-label="simple tabs example"
          >
            <Tab
              label={t(tKeys.overview.getKey())}
              value="overview"
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              TouchRippleProps={{ className: classes.touchRipple }}
            />
            <Tab
              label={t(tKeys.topRepos.getKey())}
              value="topRepos"
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              TouchRippleProps={{ className: classes.touchRipple }}
            />
          </TabList>
          <TabPanel value="overview" className={classes.tabPanel}>
            <Grid container spacing={6} justify="space-between" className={classes.overview}>
              <Grid item xs={12} lg={10}>
                <DevActivityChartSync />
              </Grid>
              <Grid container spacing={3} item xs={12} lg={2} className={classes.stats}>
                <Grid item xs={12} md={4} lg={12}>
                  <LastCommit />
                </Grid>
                <Grid item xs={12} md={8} lg={12}>
                  <Languages />
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value="topRepos" className={classes.tabPanel}>
            <Repos />
          </TabPanel>
        </TabContext>
      </Section>
    </NoSsr>
  );
}

const tabsHeight = 36;
const indicatorSpace = 3;
const borderWidth = 1;

const useStyles = makeStyles((theme) => ({
  tabPanel: {
    paddingLeft: 0,
    paddingRight: 0,
  },

  tabsRoot: {
    display: 'inline-flex',
    overflow: 'hidden',
    minHeight: tabsHeight,
    borderRadius: tabsHeight / 2,
    padding: indicatorSpace,
    border: `${borderWidth}px solid ${theme.colors.heliotrope}`,
  },

  tabsScroller: {
    overflow: 'hidden',
    borderRadius: tabsHeight / 2 - indicatorSpace - borderWidth,
  },

  touchRipple: {
    borderRadius: tabsHeight / 2 - indicatorSpace - borderWidth,
  },

  tabRoot: {
    minHeight: 'unset',
    padding: theme.spacing(0.2, 1.5),
    textTransform: 'unset',

    '&$tabSelected': {
      color: theme.colors.white,
    },
  },

  tabSelected: {},

  indicator: {
    top: 0,
    height: tabsHeight - indicatorSpace * 2 - borderWidth * 2,
    borderRadius: tabsHeight / 2 - indicatorSpace - borderWidth,
    zIndex: -1,
    background: 'linear-gradient(to left, #544cf2, #d93cef)',
  },

  overview: {
    [theme.breakpoints.up('lg')]: {
      flexWrap: 'nowrap',
    },
  },

  stats: {
    minWidth: 300,
  },

  ...getGrid(
    theme,
    [
      {
        breakpoint: 'mobileXS',
        count: 2,
        hPadding: theme.spacing(2.5),
        vPadding: theme.spacing(1.5),
      },
      {
        breakpoint: 'tabletXS',
        count: 4,
        hPadding: theme.spacing(2.5),
        vPadding: theme.spacing(1.5),
      },
      {
        breakpoint: 'tabletSM',
        count: 2,
        hPadding: theme.spacing(2.5),
        vPadding: theme.spacing(1.5),
      },
    ],
    {
      item: {
        display: 'flex',
        alignItems: 'center',
      },
    },
  ),
}));
