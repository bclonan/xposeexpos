<template>
<div class="category-quickview" :class="[ quickviewStoreMenu ? 'is-active' : '']">
    <div class="inner">
        <ul class="category-menu">
            <li>
                <a href="products.html">
                    <span>House</span> <!--img src="assets/images/icons/living.svg" alt=""-->
                    <House-Svg />
                </a>
            </li>
            <li>
                <a href="products.html">
                    <span>Office</span> <!--img src="assets/images/icons/office.svg" alt=""-->
                    <office-svg />
                </a>
            </li>
            <li>
                <a href="products.html">
                    <span>For kids</span> <!--img src="assets/images/icons/kids.svg" alt=""-->
                    <kids-svg />
                </a>
            </li>
            <li>
                <a href="products.html">
                    <span>Kitchen</span> <!--img src="assets/images/icons/kitchen.svg" alt=""-->
                    <kitchen-svg />
                </a>
            </li>
            <li>
                <a href="products.html">
                    <span>Accessories</span> <!--img src="assets/images/icons/accessories.svg" alt=""-->
                    <accesories-svg />
                </a>
            </li>
            <li>
                <a href="products.html">
                    <span>View All</span> <!--img src="assets/images/icons/all.svg" alt=""-->
                    <all-svg />
                </a>
            </li>
        </ul>

        <!--div class="all-categories is-hidden-mobile">
            <a href="products.html">Show all categories</a>
            <div class="centered-divider"></div>
        </div-->
    </div>
</div>

</template>

<script>
//svg buttons
import HouseSvg from "@/components/Funnel/Includes/svg/house.vue";
import AllSvg from "@/components/Funnel/Includes/svg/all.vue";
import AccesoriesSvg from "@/components/Funnel/Includes/svg/accesories.vue";
import KidsSvg from "@/components/Funnel/Includes/svg/kids.vue";
import KitchenSvg from "@/components/Funnel/Includes/svg/kitchen.vue";
import OfficeSvg from "@/components/Funnel/Includes/svg/office.vue";

export default {
  name: "QuickviewCategories",
  components: {
    HouseSvg,
    AllSvg,
    AccesoriesSvg,
    KidsSvg,
    KitchenSvg,
    OfficeSvg
  },
  computed: {
    quickviewStoreMenu() {
      return this.$store.getters["funnelFabMenu/showFabMenu"];
    }
  }
};
</script>