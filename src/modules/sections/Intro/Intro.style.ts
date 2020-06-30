import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';
import bgUrl from './intro_bg.jpg';

const styles = (theme: Theme) => {
  return {
    root: rule({
      minHeight: `calc(100vh + ${theme.extra.spacing.layoutContentSkew.xsHeight}px)`,
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      // tslint:disable-next-line:max-line-length
      padding: `${theme.extra.spacing.headerHeight.xs}px ${theme.extra.spacing.horizontalPagePaddings.xs.small}px calc(27vh + ${theme.extra.spacing.headerHeight.xs}px)`,
      position: 'relative',
      background: `url(${bgUrl}) no-repeat center bottom/cover`,
      color: theme.extra.colors.rhino,

      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(2.5),
        paddingRight: theme.spacing(2.5),
      },

      [theme.breakpoints.up('md')]: {
        // tslint:disable-next-line:max-line-length
        padding: `${theme.extra.spacing.headerHeight.md}px ${theme.extra.spacing.horizontalPagePaddings.md.large}px calc(27vh + ${theme.extra.spacing.headerHeight.md}px)`,
      },

      [theme.breakpoints.up('lg')]: {
        minHeight: `calc(100vh + ${theme.extra.spacing.layoutContentSkew.lgHeight}px)`,
        // tslint:disable-next-line:max-line-length
        padding: `${theme.extra.spacing.headerHeight.lg}px ${theme.spacing(10)}px calc(27vh + ${theme.extra.spacing.headerHeight.lg}px)`,
      },
    }),

    title: rule({
      width: '100%',
      maxWidth: theme.extra.sizes.maxContentWidth,
      margin: `auto`,
      paddingBottom: theme.spacing(1),
      fontFamily: theme.extra.typography.primaryFont,
      fontSize: 26,
      fontWeight: 'bold',
      lineHeight: 1.38,
      letterSpacing: '-0.2px',
      textAlign: 'center',
      textTransform: 'uppercase',

      [theme.breakpoints.up('md')]: {
        fontSize: 34,
        lineHeight: 1.26,
        letterSpacing: '-0.3px',
      },

      [theme.breakpoints.up('lg')]: {
        fontSize: 44,
        lineHeight: 1.21,
        letterSpacing: '-0.5px',
      },
    }),

    subtitle: rule({
      width: '100%',
      maxWidth: theme.extra.sizes.maxContentWidth,
      margin: `0 auto auto`,
      fontFamily: theme.extra.typography.primaryFont,
      fontSize: 20,
      lineHeight: 1.29,
      letterSpacing: 0.1,
      textAlign: 'center',

      [theme.breakpoints.up('md')]: {
        fontSize: 27,
        lineHeight: 1.56,
        letterSpacing: 0.1,
      },

      [theme.breakpoints.up('lg')]: {
        fontSize: 36,
      },
    }),

    button: rule({
      marginBottom: 'auto',
      minWidth: 150,
      alignSelf: 'center',
      height: theme.spacing(5),
      borderRadius: theme.spacing(2.5),
      background: 'linear-gradient(to bottom, #e66afd, #8238fc)',

      [theme.breakpoints.up('md')]: {
        minWidth: 200,
        fontSize: '1rem',
        height: theme.spacing(6),
        borderRadius: theme.spacing(3),
      },

      [theme.breakpoints.up('lg')]: {
        minWidth: 250,
        fontSize: '1.25rem',
        height: theme.spacing(7),
        borderRadius: theme.spacing(3.5),
      },
    }),

    modalRoot: rule({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }),

    backDropRoot: rule({
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    }),
  };
};

export const provideStyles = withStyles(styles, { withTheme: true });

export type StylesProps = WithStyles<typeof styles>;
