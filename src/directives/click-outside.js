export default function install (Vue) {
  Vue.directive('click-outside', {
    bind (el, binding, vnode) {
      el.clickOutsideEvent = function (event) {
        // 判斷點擊事件是否發生在目標元素的外部
        if (!(el === event.target || el.contains(event.target))) {
        // 呼叫指令綁定時傳入的回呼函式
          vnode.context[binding.expression](event);
        }
      };
      document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unbind (el) {
      document.body.removeEventListener('click', el.clickOutsideEvent);
    }
  });
};
