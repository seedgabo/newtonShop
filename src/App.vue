<template>
  <v-app>
    <v-navigation-drawer temporary persistent v-model="drawer" enable-resize-watcher fixed app>
      <v-list>
        <div class="ma-3">
          <v-btn depressed="" block color="primary">Mi Cuenta</v-btn>
        </div>
        <v-list-tile :href="item.to" value="true" v-for="(item, i) in items" :key="i">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"> </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <transition name="fade">
      <v-toolbar v-show="offsetTop > 200" color="white" app transition="fade-transition">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>
          <a href="#/">
            <img src="@/assets/logo.png" alt="" height="50">
          </a>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="hidden-md-and-down" flat :to="'/'"> Inicio </v-btn>
        <v-btn class="hidden-md-and-down" flat :to="'/about'"> Nosotros </v-btn>
        <v-btn class="hidden-md-and-down" flat> Cómo Comprar </v-btn>
        <v-btn class="hidden-md-and-down" outline :to="'/acount'" color="primary">
          <v-icon left>person</v-icon> Mi Cuenta
        </v-btn>
      </v-toolbar>
    </transition>
    <v-content v-scroll="onScroll">
      <v-container>
        <v-layout wrap row align-end>
          <v-flex xs12 sm8>
            <v-btn icon large @click="drawer = !drawer" class="hidden-sm-and-up">
              <v-icon>menu</v-icon>
            </v-btn>
            <a href="#/">
              <img src="@/assets/logo.png" height="70">
            </a>
            <br>
            <br>
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field placeholder="Buscar..." append-icon="search" solo=""></v-text-field>
          </v-flex>

        </v-layout>
        <router-view />
      </v-container>
    </v-content>
    <v-footer color="secondary white--text pa-5">
      <v-layout wrap class="pa-3">
        <v-flex class="text-xs-center" xs12 md6> Acerca </v-flex>
        <v-flex class="text-xs-center" xs12 md6>Medios</v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
	data() {
		return {
			drawer: false,
			items: [
				{
					title: "Inicio",
					icon: "home",
					to: "#/"
				},
				{
					title: "Carrito",
					icon: "shopping_cart",
					to: "#/cart"
				},
				{
					title: "Nosotros",
					icon: "person",
					to: "#/about"
				}
			],
			right: true,
			rightDrawer: false,
			title: window.title,
			offsetTop: 0
		};
	},
	methods: {
		onScroll(e) {
			this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
		}
	},
	name: "App"
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
.v-content {
	background: url(../../static/background.jpg);
	background-size: contain;
	background-attachment: fixed;
}
</style>
