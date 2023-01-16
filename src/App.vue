<template>
	<MyNav></MyNav>
	<div class="app">
		<router-view></router-view>
	</div>
</template>

<script>
	import MyNav from '@/components/MyNav'
	export default{
		components: {
			MyNav,	
		},
	}
</script>

<style>
	.app{padding: 20px;}
</style>