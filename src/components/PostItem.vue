<template>
	<div class="post">
			<div class="post-id" 
			>{{post.id}}</div>
			<div class="post-title" 
			>{{post.title}}</div>
			<div class="post-body" 
			>{{post.body}}</div>
			<div class="post_btns">
				<MyButton @click="deletePost">Delete</MyButton>
			</div>
			<hr>
	</div>
</template>

<script>
	export default {
			props: {
				post: {
					type: Object,
					required: true
				}
			},
			methods:{
				deletePost(){
					this.$emit('delete', this.post)
				}
			},
			
		}
</script>