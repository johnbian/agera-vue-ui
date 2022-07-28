import AgeraPadBtn from './agera-pad-btn/index';

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
