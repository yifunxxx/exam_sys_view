<template>
  <div class="adminBox">
    <div
      class="adminMenuNav"
      :class="isMobile ? (isShow ? 'menuShow' : 'menuHidden') : ''"
      :style="{ width: isMobile ? 210 + 'px' : menuWidth + 'px' }"
    >
      <menuNav :isCollapse="isCollapse"></menuNav>
    </div>
    <div
      class="adminPopBg"
      @click="closeMenu()"
      v-show="isShow && isMobile"
    ></div>
    <div
      class="adminMain"
      :style="{ 'margin-left': isMobile ? 0 : menuWidth + 'px' }"
    >
      <infoPanel
        :isMobile="isMobile"
        :menuWidth="menuWidth"
        @collapse="getCollapse"
      ></infoPanel>
      <div class="adminView">
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import infoPanel from "../component/infoPanel";
import menuNav from "../component/menuNav";
export default {
  components: {
    menuNav,
    infoPanel,
  },
  data() {
    return {
      menuWidth: 210,
      isMobile: false,
      isShow: false,
      isCollapse: false,
    };
  },

  mounted() {
    this.getClient();
    this.getCollapse;
  },

  methods: {
    // 监听窗口尺寸
    getClient() {
      var viewWidth = window.innerWidth;
      this.fitMobile(viewWidth);
      window.onresize = (res) => {
        viewWidth = res.target.innerWidth;
        this.fitMobile(viewWidth);
      };
    },

    // 适配小尺寸
    fitMobile(width) {
      if (width < 700) {
        this.isCollapse = false;
        this.isMobile = true;
        this.isShow = false;
      } else {
        this.isMobile = false;
        this.menuWidth = this.isCollapse ? 63 : 210;
      }
    },

    // 获取缩放menu的开关Boolean
    getCollapse(e) {
      if (this.isMobile) {
        this.showMenu();
      } else {
        this.isCollapse = e;
        this.menuWidth = this.isCollapse ? 63 : 210;
      }
    },

    // 移动端显示menu
    showMenu() {
      this.isShow = true;
    },

    // 移动端关闭menu
    closeMenu() {
      this.isShow = false;
    },
  },
};
</script>

<style lang="less" scoped>
.adminBox {
  overflow: hidden;
}

.adminMenuNav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 110;
  width: 210px;
  height: 100%;
  background: #304156;
  overflow-x: hidden;
  overflow-y: auto;
  transition: all 0.3s;
}

.menuShow {
  transform: translateX(0);
}

.menuHidden {
  transform: translateX(-100%);
}

.adminPopBg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 105;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.adminMain {
  margin-left: 210px;
  transition: all 0.3s;
}

.adminView {
  overflow-x: auto;
}
</style>
