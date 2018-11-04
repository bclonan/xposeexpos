<template>
  <!-- Child push sidebar menu -->
  <nav  class="child-menu" :class="[ sidebarStoreMenu ? 'is-sidebar-translated' : '']">
    <div class="child-menu-inner">
      <!-- Child menu header -->
      <ul>
        <li class="child-header">
          <div class="sidebar-title">Navigation</div>
          <a  @click.prevent="closeSlideMenu" href="javascript:void(0);" class="menu-wrapper">	
          <span class="icon-box-toggle ef-4"> 	
          <span class="rotate">
          <i class="icon-line-top">  	 </i>
          <i class="icon-line-center">  </i>
          <i class="icon-line-bottom">  </i> 
          </span>
          </span>
          </a>
        </li>
      </ul>
      <!-- /Child menu header 
        {{> sidebar-menu-1}}
        -->
      <ul class="sidebar-menu animated preFadeInRIght fadeInRight is-active">
          
        <li v-for="item in activeSidebar" :key="item.id" :class="[selectedDropdown === item.name ? 'active' : '', item.liType]" @click.prevent="gotolink(item)">
            <a class="parent-link" href="javascript:void(0);"><span class="material-icons">{{item.icon}}</span>{{item.name}}</a>
          <ul v-if="item.toggleMenu" :style="[selectedDropdown === item.name ? styleObject : '']" >
            <li v-for="subitem in item.subMenus" :key="subitem.id" @click.prevent="navigateTo(subitem.to)"><a href="javascript:void(0);">{{subitem.name}}</a></li>
          </ul>
        </li>

      </ul>
    </div>
  </nav>
  <!-- /Child push sidebar menu -->    
</template>

<script>
    export default {
      name: "PushSidebar",
      data() {
        return {
          activePushMenu: "Create",
          chosenSidebar: "MainCreation",
          activeNavDropdown: "",
          selectedDropdown: "",
          isActive: true,
          error: null,
          styleObject: {
            display: "block"
          }
        };
      },
      methods: {
        collapseSubmenu(i) {
          this.activeNavDropdown = i;
          this.selectedDropdown = i;
          return;
        },
        gotolink(item) {
          if (!item.toggleMenu) {
            alert("router");
            this.$store.commit("mainPushMenu/resetPushMenu");
            //this.$router.push('/path')
            //this.$router.push({path: '/'})
            //this.$router.push({path: '/'})
            return;
          } else {
            this.selectedDropdown = item.name;
            return;
          }
        },
        navigateTo(p) {
          this.$store.commit("mainPushMenu/resetPushMenu");
          this.$router.push(p);
          return;
        },
        closeSlideMenu() {
          this.$store.commit("mainPushMenu/resetPushMenu");
          return;
        }
      },
      computed: {
        activeSidebar() {
          let activeBar;
          activeBar = this.sidebarCurrentMenu;

          return activeBar;
        },
        sidebarStoreMenu() {
          return this.$store.getters["mainPushMenu/showPushMenu"];
        },
        sidebarCurrentMenu() {
          return this.$store.getters["mainPushMenu/currentPushMenu"];
        }
      },
      components: {}
    };
</script>

<style scoped>
    .selectedDropdown {
      display: block;
    }
</style>