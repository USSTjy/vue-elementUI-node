<template>
  <el-container class="ht100 wt100 overflow-y-hidden overflow-x-hidden">
    <el-aside
      class="menu-class"
      :style="{ width: isCollapse ? 'auto' : '240px' }"
    >
      <div class="menu-top-switch">
        <el-switch
          v-model="isCollapse"
          active-color="#13ce66"
          inactive-color="#ff4949"
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
        <el-menu-item> </el-menu-item>
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
                <el-dropdown-item command="red">红色</el-dropdown-item>
                <el-dropdown-item command="green">绿色</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="header-item cursor-pointer">个人中心</div>
          <div class="header-item cursor-pointer">退出登录</div>
          <div class="header-item cursor-pointer">设置</div>
        </div>
      </el-header>
      <el-main class="overflow-y-auto overflow-x-auto wt100">
        <router-view />
      </el-main>
    </el-container>
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
        }
      ]
    }
  },
  mounted() {
    this.getMenuList()
  },
  methods: {
    getMenuList() {
      this.$router
        .push({
          path: '/' + this.defaultActive
        })
        .catch(err => err)
    },
    handleSelectMenu(index) {
      this.$router
        .push({
          path: '/' + index
        })
        .catch(err => err)
    },
    changeColor(command) {
      this.$store.commit('getColor', command)
    }
  }
}
</script>
