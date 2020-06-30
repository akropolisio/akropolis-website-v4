import React from 'react';

import { tKeys, useTranslate } from 'services/i18n';
import { PRIVACY_POLICY_URL, T_AND_C_URL } from 'assets';

import { Messari, Etherium } from './Icons';
import { useStyles } from './Footer.style';

function Footer() {
  const classes = useStyles();
  const { t } = useTranslate();
  const privacyPolicyText = t(tKeys.modules.navigation.privacyPolicy.getKey());
  const tAndCText = t(tKeys.modules.navigation.termsConditions.getKey());
  const startYear = 2017;
  const yearNow = new Date().getFullYear();

  return (
    <footer className={classes.root}>
      <section className={classes.copyright}>
        <nav className={classes.nav}>
          <a className={classes.link} href={PRIVACY_POLICY_URL} target="_blank" title={privacyPolicyText}>
            {privacyPolicyText}
          </a>
          <a className={classes.link} href={T_AND_C_URL} target="_blank" title={tAndCText}>
            {tAndCText}
          </a>
        </nav>
        <div className={classes.text}>
          {[
            'Akropolis Decentralised Ltd.',
            'Suite 23 Portland House, Glacis Road, Gibraltar, GX11 1AA',
            'COMPANY NUMBER: 116430',
            `${startYear}${yearNow > startYear ? '-' + yearNow : ''}, All right reserved`,
          ].join(' | ')}
        </div>
      </section>
      <section className={classes.partners}>
        <a className={classes.link} href="https://messari.io/asset/akropolis" target="_blank" rel="noopener noreferrer">
          Messari
          <Messari className={classes.messari} />
        </a>
        <a className={classes.link} href="https://ethereum.org" target="_blank" rel="noopener noreferrer">
          Etherium
          <Etherium className={classes.etherium} />
        </a>
      </section>
    </footer>
  );
}

export { Footer };
