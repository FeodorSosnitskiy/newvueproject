<template>
	<div class="nav-wrapp">
		<div class="nav-wrapp__item"
		v-for="(page, idx) in totalPages"
		:key="idx"
		@click="switchPage(page)"
		:class="{
			'current-page': page === currentPage,
		}"
		>
		{{page}}	
		</div>
	</div>
</template>

<script>
	export default {
		name: "MyNav",
		props: {
			totalPages: {
				type: Number,
				required: true 
			}
		},
		data(){
			return {
				currentPage: 1,
			}
		},
		methods: {
			switchPage(page){
				this.currentPage = page;
				console.log(this.currentPage)
				this.$emit("switchPage", page)
			}
		}
	}

</script>


<style>
	.nav-wrapp {
		display: flex;
		justify-content: space-between;
		padding: 0%;
	}
	.nav-wrapp__item {
		border:  1px solid;
		padding: 3%;
	}
	.current-page {
		border:  1px green solid;
		color: green;
	}
</style>