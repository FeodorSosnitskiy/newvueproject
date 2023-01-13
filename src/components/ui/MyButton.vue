<template>
	<button>
		<slot>
			
		</slot>
	</button>
</template>

<script>
	export default {
		name: 'MyButton'
	}
</script>

<style scoped>
	button {
	    background: oldlace;
		border: 1px solid #3e3e3e;
		padding: 15px 20px;	
	}
</style>