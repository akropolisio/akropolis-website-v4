import * as React from 'react';
import { GetProps } from '_helpers';
import SvgIcon from '@material-ui/core/SvgIcon';

// tslint:disable:max-line-length
function ChevronRightIcon(props: GetProps<typeof SvgIcon>) {
  const { classes, ...rest } = props;
  return (
    <SvgIcon {...rest} viewBox="0 0 512 512" xmlSpace="preserve">
      <path d="M367.954,213.588L160.67,5.872c-7.804-7.819-20.467-7.831-28.284-0.029c-7.819,7.802-7.832,20.465-0.03,28.284 l207.299,207.731c7.798,7.798,7.798,20.486-0.015,28.299L132.356,477.873c-7.802,7.819-7.789,20.482,0.03,28.284 c3.903,3.896,9.016,5.843,14.127,5.843c5.125,0,10.25-1.958,14.157-5.873l207.269-207.701 C391.333,275.032,391.333,236.967,367.954,213.588z" />
    </SvgIcon>
  );
}

export default ChevronRightIcon;
