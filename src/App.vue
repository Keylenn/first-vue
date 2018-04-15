<template>
  <div id="app">
  	<v-nav></v-nav>
  	<router-view></router-view>
  	<v-footer></v-footer>
	 </div>
</template>

<script>
import './css/common.css' 
import './css/normalize.css' 
import pagenav from './components/header/pagenav'
import banner from './components/content/banner'
import fairyTale from './components/content/fairyTale'
import footer from './components/footer'



export default {
  components: {
  		'v-nav': pagenav,
  		'v-banner': banner,
  		'v-faieyTale': fairyTale,
  		'v-footer': footer
  	}
  }
</script>

<style>

</style>
