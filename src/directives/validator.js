/* eslint-disable prefer-regex-literals */
// let validator = {};
// 註冊指令
//* 前面用validator = 會顯示此變數不曾使用的錯誤 且需先定義
export default {
  // directive 生命週期
  mounted (el, binding) {
    el.focus();
    // 將外部的值改為
    el.className = binding.value;
  },
  updated: function (el, binding, vnode) {
    // el 元素本體
    // binding 綁定的資源狀態
    // vnode 虛擬 DOM 節點
    // console.log('update', el, binding, vnode);
    const className = binding.value;

    // 尋找當前的 model 名稱（取得 key 值，並帶入第一個）
    const currentModel = Object.keys(binding.instance)[0];

    // 從當前 Model 取值
    const value = binding.instance[currentModel];
    // console.log(currentModel, value);

    // Email validate
    // ? 無法使用正規表達式
    // 1.
    // 老師的範本，開就會噴錯，加上這段可以強迫關閉
    // const re =
    // eslint-disable-next-line no-useless-escape
    // '/^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/i';
    // 上網修改的版本
    // const re =
    //   '^(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@(([^<>()\\[\\]\\.,;:\\s@"]+\\.)+[^<>()\\[\\]\\.,;:\\s@"]{2,})$';

    // 2. 安裝套件的版本 npm install --save-dev eslint-plugin-security --force
    // eslint-disable-next-line security/detect-unsafe-regex
    const re = new RegExp(
      // eslint-disable-next-line no-useless-escape
      '^(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@(([^<>()\\[\\]\\.,;:\\s@"]+\\.)+[^<>()\\[\\]\\.,;:\\s@"]{2,})$',
      'i'
    );

    // 3.
    // const re = new RegExp(
    //   '^(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@(([^<>()\\[\\]\\.,;:\\s@"]+\\.)+[^<>()\\[\\]\\.,;:\\s@"]{2,})$',
    //   'i'
    // );

    if (!re.test(value)) {
      el.className = `${className} is-invalid`;
    } else {
      el.className = `${className} is-valid`;
    }
  }
};
