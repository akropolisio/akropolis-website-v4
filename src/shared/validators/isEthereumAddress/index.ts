import { isEthereumAddress } from './isEthereumAddress';
import { ITranslateKey } from 'services/i18n';

function validate(value: string): ITranslateKey | undefined {
  return isEthereumAddress(value.toLowerCase()) ? undefined : 'Invalid wallet address';
}

export { validate as isEthereumAddress };