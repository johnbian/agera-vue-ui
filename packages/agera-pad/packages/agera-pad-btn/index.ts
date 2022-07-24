// 导入组件，组件必须声明 name
import AgeraPadBtn from './main.vue';
// 为组件提供 install 安装方法，供按需引入
(AgeraPadBtn as any).install = (Vue: any) => {
  Vue.component(AgeraPadBtn.name, AgeraPadBtn);
};
// 导出组件
export default AgeraPadBtn;
