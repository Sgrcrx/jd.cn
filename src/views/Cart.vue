<template>
	<div class="shoppingCart">
		<top-bar></top-bar>
		<shopes></shopes>
		<footeres></footeres>
	</div>
</template>

<script>
	import Footeres from '../components/Footeres'
	import TopBar from '../components/TopBar'
	import Shopes from '../components/Shopes'

	export default {
		name: 'home',
		components: {
			Footeres,
			TopBar,
			Shopes,
		}
	}
</script>