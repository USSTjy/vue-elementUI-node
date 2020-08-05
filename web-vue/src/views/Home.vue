<template>
  <el-container class="ht100 wt100 overflow-y-hidden overflow-x-hidden">
    <el-aside
      id="aside-width"
      class="menu-class"
      :style="{ width: isCollapse ? 'auto' : '240px' }"
    >
      <div class="menu-top-switch">
        <el-switch
          v-model="isCollapse"
          active-color="#13ce66"
          inactive-color="#ff4949"
          @change="handleChangeAside"
        >
        </el-switch>
      </div>
      <el-menu
        class="ht100 "
        :collapse="isCollapse"
        :default-active="defaultActive"
        @select="handleSelectMenu"
      >
        <template v-for="item in menuData">
          <el-submenu v-if="item.children" :key="item.index" :index="item.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">{{ item.name }}</span>
            </template>

            <el-menu-item
              v-for="ele in item.children"
              :key="ele.id"
              :index="ele.id"
              >{{ ele.name }}</el-menu-item
            >
          </el-submenu>
          <el-menu-item v-else :key="item.index" :index="item.id">
            {{ item.name }}
          </el-menu-item>
        </template>
      </el-menu>
    </el-aside>
    <el-container class="ht100 wt100">
      <el-header class="header-class wt100">
        <div class="header-flex">
          <div class="header-item ">hello，name</div>
          <div class="header-item cursor-pointer">
            <el-dropdown trigger="click" @command="changeColor">
              <span>
                切换背景主题
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="blue">默认</el-dropdown-item>
                <el-dropdown-item command="red">墨绿</el-dropdown-item>
                <el-dropdown-item command="green">绿色</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="header-item cursor-pointer">个人中心</div>
          <div class="header-item cursor-pointer" @click="loginOUt">
            退出登录
          </div>
          <div class="header-item cursor-pointer">
            <el-dropdown trigger="click" @command="changeLang">
              <span>
                {{ $t('commons.systemLang') }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="zh">{{
                  $t('commons.ch')
                }}</el-dropdown-item>
                <el-dropdown-item command="en">{{
                  $t('commons.en')
                }}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="header-item cursor-pointer">设置</div>
        </div>
      </el-header>
      <el-main class="overflow-y-hidden overflow-x-hidden wt100">
        <router-view />
      </el-main>
    </el-container>
    <el-dialog title="" :visible.sync="loginoutVisible">
      <span>是否确定退出系统？</span>
      <span slot="footer">
        <el-button @click="loginoutVisible = false">取消</el-button>
        <el-button type="primary" @click="handleLoginOut">确定</el-button>
      </span>
    </el-dialog>
  </el-container>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data() {
    return {
      isCollapse: false,
      defaultActive: 'one',
      menuData: [
        {
          id: 'one',
          name: '首页'
        },
        {
          id: 'two',
          name: '选项2',
          children: [
            {
              id: 'twoone',
              name: '选项2-1'
            },
            {
              id: 'twotwo',
              name: '选项2-2'
            }
          ]
        },
        {
          id: 'three',
          name: '选项3',
          children: [
            {
              id: 'threeone',
              name: '选项3-1'
            },
            {
              id: 'threetwo',
              name: '选项3-2'
            }
          ]
        },
        {
          id: 'four',
          name: '前端'
        }
      ],
      systemLang: '中文',
      loginoutVisible: false
    }
  },
  mounted() {
    this.defaultActive = sessionStorage.getItem('menuDefault')
  },
  methods: {
    handleSelectMenu(index) {
      this.$router
        .push({
          path: '/' + index
        })
        .catch(err => err)
      sessionStorage.setItem('menuDefault', index)
    },
    changeColor(command) {
      this.$store.commit('getColor', command)
    },
    handleChangeAside(value) {
      this.$store.commit('getAsideWidth', value ? '65' : '240')
    },
    changeLang(command) {
      this.$i18n.locale = command
      localStorage.setItem('lang', command)
    },
    loginOUt() {
      this.loginoutVisible = true
    },
    handleLoginOut() {
      this.$router.push({
        name: 'Login'
      })
    }
  }
}
</script>
