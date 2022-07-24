import AgeraPadBtn from './Button/index';

const components = [
  AgeraPadBtn,
];

// will install the plugin only once
const install: any = (Vue: any) => {
  if (install.installed) {
    return;
  }
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue);
}

// To allow use as module (npm/webpack/etc.) export component
export default { install, AgeraPadBtn };

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
