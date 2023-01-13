<template>
	<div class="dialog" v-if="show === true" @click.stop="hideDialog">
		<div @click.stop class="dialog__content">
			<slot></slot>
		</div>
	</div>
</template>


<script>
	export default {
		name: "MyDialog",
		props: {
			show: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			hideDialog(){
				this.$emit('update:show', false)
			}
		}
	}
</script>

<style>
	.dialog {
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: rgba(0,0,0,.5);
		position: fixed;
		display: flex;
	}
	.dialog__content {
		margin: auto;
		padding: 5%;
		background: #fff;
		min-width: 600px;
		min-height: 50px;
		position: relative;
	}
	
</style>