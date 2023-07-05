<template>
  <div class="">
    <Loading :active="isLoading"></Loading>
    <Header :is-login="isLogin"></Header>
    <div class=" justify-content-center align-items-center d-flex" style="min-height:100vh">
      <div class=" bg-white rounded-3 shadow-md" style="">
        <form class="d-flex flex-column justify-content-center align-items-center p-5" @submit.prevent="signIn">
          <!-- <h1 class="h3 mb-3 font-weight-normal">請先登入</h1> -->
          <div class="mb-2">
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus
              v-model="user.username" />
          </div>
          <div class="mb-2">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required
              v-model="user.password" />
          </div>
          <div class="text-end mt-4">
            <button class="btn btn-lg btn-primary btn-block" type="submit">
              登入
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import loginMixin from '@/mixins/loginMixin';
import emitter from '@/methods/emitter';

export default {
  mixins: [loginMixin],
  components: {
    Header
  },
  provide () {
    return {
      emitter
    };
  },
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      isLoading: false
    };
  },
  methods: {
    signIn () {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.$http.post(api, this.user).then((res) => {
        // console.log(res);
        // const { token, expired } = res.data;
        // console.log(token, expired);
        // document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
        if (res.data.success) {
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
          this.$router.push('/dashboard');
        }
      });
    }
  }
};
</script>
