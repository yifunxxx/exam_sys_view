<template>
  <div>
    <div
      class="infoBox"
      :style="{ width: !isMobile ? `calc(100% - ${menuWidth}px)` : '100%' }"
      :class="isShow ? 'infoShow' : 'infoHidden'"
    >
      <div class="infoUpper">
        <div class="infoTitle" @click="goHome()">在线考试系统</div>
        <div class="infoUser">
          <el-tooltip
            effect="dark"
            :content="isFullscreen ? '取消全屏' : '全屏'"
            placement="bottom"
          >
            <div class="infoFull" @click="toggleFull()">
              <img
                :src="
                  isFullscreen
                    ? 'https://sucai.suoluomei.cn/sucai_zs/images/20200729171413-2.png'
                    : 'https://sucai.suoluomei.cn/sucai_zs/images/20200729171413-1.png'
                "
                alt
              />
            </div>
          </el-tooltip>
          <el-dropdown>
            <div
              class="infoAvatar animate__animated animate__infinite"
              :class="isAnimate ? 'animate__pulse' : ''"
              @click="aniAvatar()"
            >
              <img
                src="https://sucai.suoluomei.cn/sucai_zs/images/20200523094058-1.jpg"
                alt
              />
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="(item, index) in dropdownList"
                :key="index"
                :divided="index == dropdownList.length - 1"
                @click.native="operateMenu(index)"
                >{{ item }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="infoNav">
        <div class="infoZoom">
          <i
            :class="
              isMobile
                ? 'el-icon-s-unfold'
                : isOpen
                ? 'el-icon-s-unfold'
                : 'el-icon-s-fold'
            "
            @click="toggleMenu()"
          ></i>
        </div>
        <div class="infoTag">
          <tagNav></tagNav>
        </div>
      </div>
    </div>
    <div class="infoPlaceholder"></div>
  </div>
</template>

<script>
import screenfull from "screenfull";
import tagNav from "./tagNav";
export default {
  components: {
    tagNav,
  },
  data() {
    return {
      isFullscreen: false,
      isAnimate: false,
      scrollList: [],
      isOpen: false,
      isShow: true,
      dropdownList: ["回到首页", "退出登录"],
    };
  },
  props: {
    isMobile: Boolean,
    menuWidth: [Number, String],
  },
  mounted() {
    this.watchScroll();
    this.$emit("collapse", this.isOpen);
  },

  watch: {
    $route(route) {
      this.getBreadcrumb();
    },
  },

  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter((item) => item.name);
    },
    // 缩放menu,向父组件传递boolean
    toggleMenu() {
      this.isOpen = !this.isOpen;
      this.$emit("collapse", this.isOpen);
    },

    // 全屏
    toggleFull() {
      this.isFullscreen = !this.isFullscreen;
      screenfull.toggle();
    },

    // 头像动画
    aniAvatar() {
      this.isAnimate = !this.isAnimate;
    },

    operateMenu(index) {
      switch (index) {
        case 0:
          this.$router.push({
            path: "/main",
          });
          break;
        case 1:
          localStorage.removeItem("userInfo");
          this.$router.push({
            path: "/login",
          });
          break;
      }
    },

    goHome() {
      this.$router.push({
        path: "/main",
      });
    },

    // 监听页面滚动进行隐藏
    watchScroll() {
      document.addEventListener("scroll", this.handleScroll, true);
    },

    handleScroll() {
      this.scrollList.push(window.pageYOffset);
      if (this.scrollList.length > 2) {
        var end = this.scrollList[this.scrollList.length - 1];
        var beforEnd = this.scrollList[this.scrollList.length - 2];
        this.isShow = end > beforEnd ? false : true;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.infoBox {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  background: #fff;
  padding: 2px 0;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  transition: all 0.5s;
}

.infoPlaceholder {
  width: 100%;
  height: 105px;
}

.infoShow {
  transform: translateY(0);
}

.infoHidden {
  transform: translateY(-100%);
}

.infoUpper {
  height: 60px;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.infoUser {
  display: flex;
  align-items: center;
}

.infoTitle {
  font-size: 20px;
  color: #304156;
  user-select: none;
  cursor: pointer;
}

@media (max-width: 300px) {
  .infoTitle {
    visibility: hidden;
  }
}

.infoFull {
  width: 30px;
  cursor: pointer;
}

.infoFull img,
.infoAvatar img {
  width: 100%;
  height: 100%;
}

.infoAvatar {
  width: 45px;
  height: 45px;
  margin-left: 20px;
  border-radius: 50%;
  overflow: hidden;
}

.infoZoom {
  font-size: 24px;
  cursor: pointer;
}

.infoNav {
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
}

.infoView {
  overflow: auto;
}

.infoTag {
  width: 100%;
  margin-left: 20px;
}
</style>