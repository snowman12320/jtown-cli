<template>
    <el-menu :active-text-color="'#ffa500'" :backgroundColor="'#180b0b'" :text-color="'#fff'" default-active="1"
        class="el-menu-vertical-demo" :collapse="isCollapse" @mouseover="isCollapse = false"
        @mouseleave="isCollapse = true">
        <el-menu-item index="1">
            <el-icon>
                <img :src="`https://i.pravatar.cc/150?img=${index}`" class="rounded-circle h-100 w-100">
            </el-icon>
            <template #title><span class="text-primary mx-1 text-center w-100">{{ username }}</span></template>
        </el-menu-item>
        <el-menu-item index="2">
            <el-icon>
                <Monitor />
            </el-icon>
            <template #title>
                <div class="text-center w-100">
                    <router-link to="/" class="btn btn-nbaBlue text-decoration-none">前台</router-link>
                </div>
            </template>
        </el-menu-item>
        <el-menu-item index="3">
            <el-icon>
                <el-icon>
                    <Cpu />
                </el-icon> </el-icon>
            <template #title>
                <div class="text-center w-100">
                    <router-link to="/" class="btn btn-nbaRed text-decoration-none">會員</router-link>
                </div>
            </template>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <Basketball />
            </el-icon>
            <template #title>
                <router-link to="/dashboard/products"
                    class="text-white  text-decoration-none w-100 text-center">產品</router-link>
            </template>
        </el-menu-item>
        <el-menu-item index="5">
            <el-icon>
                <List />
            </el-icon>
            <template #title>
                <router-link to="/dashboard/orders"
                    class="text-white w-100 text-center  text-decoration-none">訂單</router-link>
            </template>
        </el-menu-item>
        <el-menu-item index="6">
            <el-icon>
                <Ticket />
            </el-icon>
            <template #title>
                <router-link to="/dashboard/coupons"
                    class="text-white w-100 text-center   text-decoration-none">優惠券</router-link>
            </template>
        </el-menu-item>
        <el-menu-item index="7">
            <el-icon>
                <el-icon>
                    <Notebook />
                </el-icon> </el-icon>
            <template #title>
                <router-link to="/dashboard/storys"
                    class="text-white text-center w-100  text-decoration-none">文章</router-link>
            </template>
        </el-menu-item>
        <el-menu-item index="8">
            <el-icon>
                <el-icon>
                    <SwitchButton />
                </el-icon> </el-icon>
            <template #title>
                <a href="#" @click.prevent="logout" class="text-white text-center w-100 text-decoration-none">登出</a>
            </template>
        </el-menu-item>
    </el-menu>
</template>

<script  setup>
import {
  Ticket, Monitor, Basketball, List, Cpu, Notebook, SwitchButton

} from '@element-plus/icons-vue';
</script>
<script>
export default {
  data () {
    return {
      username: '',
      isCollapse: true
    };
  },
  created () {
    if (!localStorage.getItem('username')) {
      this.$router.push('/login');
    }
    const atIndex = JSON.parse(localStorage.getItem('username')).indexOf('@');
    this.username = JSON.parse(localStorage.getItem('username')).slice(0, atIndex);
  },
  methods: {
    logout () {
      if (localStorage.getItem('VIP')) {
        localStorage.removeItem('VIP');
        this.$swal.fire('SEE YOU SOON VIP', 'THANK YOU ! than you can give me some suggestions from the FB links below the website.', 'success');
        this.$router.push('/login');
      } else {
        const api = `${process.env.VUE_APP_API}logout`;
        this.$http.post(api, this.user).then((res) => {
          if (res.data.success) {
            this.$router.push('/login');
          }
        });
      }
    }
  }
};
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 300px;
    height: 100vh;
}

.text-white.active {
    color: #ffa500 !important;
    font-weight: 700;
}

.text-white.visited {
    color: gray !important;
}

.el-icon {
    height: 20px !important;
    width: 20px !important;
}
</style>
