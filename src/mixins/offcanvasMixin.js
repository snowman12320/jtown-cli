import Modal from 'bootstrap/js/dist/modal';
import Offcanvas from 'bootstrap/js/dist/offcanvas';

export default {
  methods: {
    showModal () {
      this.modal.show();
    },
    showOffcanvas () {
      this.offcanvas.show();
    },
    hideOffcanvas () {
      this.offcanvas.hide();
    },
    hideModal () {
      this.modal.hide();
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal);
    this.offcanvas = new Offcanvas(this.$refs.offcanvas);
  }
};
