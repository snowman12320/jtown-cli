<template>
  <div class="">
    <Loading :active="isLoading"></Loading>
    <Header :is-login="isLogin"></Header>
    <div class="login_bg">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="card">
          <div class="card-header">
            <h3>Sign In</h3>
            <div class="d-flex justify-content-end social_icon">
              <!-- <span><i class="fab fa-facebook-square"></i></span> -->
              <span><i class="fab fa-google-plus-square"></i></span>
              <!-- <span><i class="fab fa-twitter-square"></i></span> -->
            </div>
          </div>
          <div class="card-body">
            <Form @submit="signIn" v-slot="{ errors }">
              <div class="input-group form-group mb-2">
                <div class="input-group-prepend">
                  <i class="fas fa-user"></i>
                </div>
                <Field type="text" name="email" class="form-control rounded-3 " placeholder="請輸入 Email"
                  rules="email|required"
                  :class="{ 'is-invalid': errors['email'], 'is-valid': !errors['email'] && user.username }" autofocus
                  v-model="user.username"></Field>
                <error-message name="email" class="invalid-feedback"></error-message>
              </div>

              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <i class="fas fa-key"></i>
                </div>
                <Field type="password" name="password" class="form-control rounded-3" placeholder="password" required
                  v-model="user.password" maxlength="20" :rules="validatePassword"
                  :class="{ 'is-invalid': errors['密碼'], 'is-valid': !errors['密碼'] && user.password }"></Field>
                <error-message name="密碼" class="invalid-feedback"></error-message>
              </div>
              <!--  -->
              <div class="mt-2 d-flex gap-1 align-items-center  justify-content-end me-2">
                <input id="remember" type="checkbox">
                <label for="remember" class=" text-white">Remember Me</label>
              </div>
              <div class="form-group text-center mt-5">
                <input type="submit" value="Login" class="btn float-right login_btn">
              </div>
            </form>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-center links">
              Don't have an account?<a href="#">Sign Up</a>
            </div>
            <!-- <div class="d-flex justify-content-center">
              <a href="#">Forgot your password?</a>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import loginMixin from '@/mixins/loginMixin';
import emitter from '@/methods/emitter';

export default {
  mixins: [loginMixin],
  components: {
    Header,
    Footer
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
          // this.$router.push('/dashboard');
          this.$router.go(-1);
        }
      });
    },
    validatePassword (value) {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;
      return regex.test(value) ? true : '密碼需包含英文大小寫和數字，且超過六位數以上';
    }
  }
};
</script>
<style scoped>
.login_bg {
  background-size: cover;
  background-position: 50% 80%;
  background-repeat: no-repeat;
  background-image: url('../assets/nbaWeb/jusdevoyage-hJOHlZjW9FQ-unsplash.jpg');
  min-height: 100vh;
  max-width: 100vw;
  align-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden !important;
}

.card {
  height: 370px;
  margin-top: auto;
  margin-bottom: auto;
  width: 400px;
  background-color: rgba(0, 0, 0, 0.4) !important;
}

.social_icon span {
  font-size: 60px;
  margin-left: 10px;
  color: #fff;
}

.social_icon span:hover {
  color: white;
  cursor: pointer;
}

.card-header h3 {
  color: white;
}

.social_icon {
  position: absolute;
  right: 20px;
  top: -45px;
}

.input-group-prepend i {
  background-color: #fff;
  color: black;
  border: 0 !important;
  padding: 15px;
  border-radius: 50%;

}

input:focus {
  outline: 0 0 0 0 !important;
  box-shadow: 0 0 0 0 !important;
}

.login_btn {
  color: black;
  background-color: #fff;
  width: 100px;
}

.login_btn:hover {
  color: black;
  background-color: white;
}

.links {
  color: white;
}

.links a {
  margin-left: 4px;
}
</style>
