<template>
    <el-menu :active-text-color="'#ffa500'" :backgroundColor="'#180b0b'" :text-color="'#fff'" :default-active="$route.path"
        class="el-menu-vertical-demo d-flex flex-column justify-content-between" :collapse="isCollapse"
        @mouseenter="startTimer" @mouseleave="cancelTimer">
        <div class="">
            <el-menu-item index="1">
                <el-icon>
                    <img :src="`https://i.pravatar.cc/150?img=${random_number}`" class="rounded-circle h-100 w-100">
                </el-icon>
                <template #title><span class="text-primary mx-1 text-center w-100">{{ username }}</span></template>
            </el-menu-item>
            <router-link to="/" class="">
                <el-menu-item index="/">
                    <el-icon>
                        <Monitor />
                    </el-icon>
                    <template #title>
                        <div class="text-center w-100 btn btn-nbaBlue text-decoration-none">
                            前台
                        </div>
                    </template>
                </el-menu-item>
            </router-link>
            <router-link to="/dashboard/members" class="">
                <el-menu-item index="/dashboard/members">
                    <el-icon>
                        <User />
                    </el-icon>
                    <template #title>
                        <div class="text-center w-100 btn btn-nbaRed text-decoration-none">
                            會員
                        </div>
                    </template>
                </el-menu-item>
            </router-link>
            <router-link to="/dashboard/products" class="text-white  text-decoration-none w-100 ">
                <el-menu-item route="/dashboard/products" index="/dashboard/products">
                    <el-icon>
                        <Basketball />
                    </el-icon>
                    <template #title>
                        <div class="text-center w-100">產品</div>
                    </template>
                </el-menu-item>
            </router-link>
            <router-link to="/dashboard/orders" class="text-white w-100 text-center  text-decoration-none">
                <el-menu-item index="/dashboard/orders">
                    <el-icon>
                        <List />
                    </el-icon>
                    <template #title>
                        <div class="text-center w-100">訂單</div>
                    </template>
                </el-menu-item>
            </router-link>
            <router-link to="/dashboard/coupons" class="text-white w-100 text-center   text-decoration-none">
                <el-menu-item index="/dashboard/coupons">
                    <el-icon>
                        <Ticket />
                    </el-icon>
                    <template #title>
                        <div class="text-center w-100">優惠券</div>
                    </template>
                </el-menu-item>
            </router-link>
            <router-link to="/dashboard/storys" class="text-white text-center w-100  text-decoration-none">
                <el-menu-item index="/dashboard/storys">
                    <el-icon>
                        <Notebook />
                    </el-icon>
                    <template #title>
                        <div class="text-center w-100">文章</div>
                    </template>
                </el-menu-item>
            </router-link>
        </div>
        <el-menu-item index="8" class="border-top  border-white">
            <el-icon @click.prevent="logout">
                <SwitchButton />
            </el-icon>
            <template #title>
                <a href="#" @click.prevent="logout" class="text-white text-center w-100 text-decoration-none">登出</a>
            </template>
        </el-menu-item>
    </el-menu>
</template>

<script  setup>
import { Ticket, Monitor, Basketball, List, User, Notebook, SwitchButton } from '@element-plus/icons-vue';
</script>
<script>
export default {
  data () {
    return {
      username: '',
      isCollapse: true,
      random_number: Math.floor(Math.random() * (50 - 1 + 1) + 3),
      timer: null
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
    },
    startTimer () {
      this.timer = setTimeout(() => {
        this.isCollapse = false;
      }, 1500);
    },
    cancelTimer () {
      this.isCollapse = true;
      clearTimeout(this.timer);
    }
  }
};
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 300px;
}

.el-menu-vertical-demo {
    min-height: 100vh;
}

.text-white.active {
    color: #ffa500 !important;
    font-weight: 700;
}

.text-white.visited {
    color: gray !important;
}

.el-icon {
    height: 30px !important;
    width: 30px !important;
}

@media (max-width: 768px) {
    .el-menu-vertical-demo {
        width: 70px !important;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 70px;
    }

    .el-menu-item .text-center {
        display: none;
    }
}
</style>
