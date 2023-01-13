<template>
	<input type="text"
	:value="value"
	@input="updateInput"
	>
</template>

<script>
	export default {
		name: 'MyInput',
		props: {
			value: [String, Number]
		},
		methods: {
			updateInput(e){
				this.$emit('update:value', e.target.value)
			}
		},
	}

</script>

<style scoped>
	input {
		height: 60px;

	}
</style>