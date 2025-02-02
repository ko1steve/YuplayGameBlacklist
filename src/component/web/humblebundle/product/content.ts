import { Container } from 'typescript-ioc';
import { ComponentController } from '../../../../core/componentController';
import { HumbleBundleProductConfig } from './config';
import './style.css';

class HumbleBundleProductController extends ComponentController {
  protected componentConfig!: HumbleBundleProductConfig;

  protected getRawGameTitle (infoContainer?: HTMLElement): string {
    return (document.getElementsByClassName('showcase-large')[0]
      ?.getElementsByClassName('human_name-view')[0] as HTMLHeadingElement)
      ?.innerText;
  }

  protected getCheckboxParent (): HTMLElement | null {
    return document.getElementsByClassName('showcase-info-section')[0] as HTMLDivElement;
  }
}

const hrefRegex = /^https:\/\/www.humblebundle.com\/store\/(?!search\?).+$/gmi;
if (hrefRegex.test(window.location.href)) {
  const componentConfig = Container.get(HumbleBundleProductConfig);
  const controller = new HumbleBundleProductController(componentConfig);
}
