import RedButton from "./components/Button/RedButton.vue";

function install(Vue) {
  Vue.component("red-button", RedButton);
}

RedButton.install = install;

export default RedButton;
