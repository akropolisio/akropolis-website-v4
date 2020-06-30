import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  root: rule({
    backgroundColor: theme.extra.colors.woodSmoke,
    color: '#fff',
  }),

  content: rule({
    // tslint:disable-next-line:max-line-length
    padding: `${theme.spacing(10.5)}px ${theme.extra.spacing.horizontalPagePaddings.xs.large}px ${theme.spacing(5)}px`,
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: theme.extra.sizes.maxContentWidth,

    [theme.breakpoints.up('md')]: {
      padding: `${theme.spacing(14)}px ${theme.extra.spacing.horizontalPagePaddings.md.medium}px`,
    },

    [theme.breakpoints.up('lg')]: {
      padding: `${theme.spacing(14)}px ${theme.extra.spacing.horizontalPagePaddings.lg.large}px`,
    },
  }),

  column: rule({
    width: '100%',
    flexGrow: 1,
    display: 'flex',

    [theme.breakpoints.up('md')]: {
      width: 0,
    },

    '&$left': {
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: theme.spacing(3.5),

      [theme.breakpoints.up('md')]: {
        marginBottom: 0,
        marginRight: theme.extra.spacing.horizontalPagePaddings.md.large,
      },

      [theme.breakpoints.up('lg')]: {
        marginRight: theme.extra.spacing.horizontalPagePaddings.lg.large,
      },
    },
  }),

  left: {},
  right: {},

  logo: rule({
    display: 'flex',
    marginBottom: theme.spacing(3.5),
    fontSize: 40,
    color: 'inherit',

    [theme.breakpoints.up('md')]: {
      alignSelf: 'flex-start',
      marginBottom: theme.spacing(5),
    },
  }),

  description: rule({
    fontFamily: theme.extra.typography.secondaryFont,
    fontSize: 12,
    lineHeight: 2,
    textAlign: 'center',
    color: '#d6d6d6',

    [theme.breakpoints.up('md')]: {
      alignSelf: 'flex-start',
      textAlign: 'left',
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: 14,
      lineHeight: 1.71,
    },
  }),

  address: rule({
    display: 'block',
    padding: `${theme.spacing(3)}px ${theme.extra.spacing.horizontalPagePaddings.xs.small}px`,
    backgroundColor: '#000',
    fontFamily: theme.extra.typography.secondaryFont,
    fontSize: 12,
    textAlign: 'center',
    color: '#9b9b9b',
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
