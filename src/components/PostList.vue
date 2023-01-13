<template>
	<div v-if="posts.length > 0">
		<h3>New posts</h3>
		<transition-group name="post-list">
		<PostItem 
		v-for="post in posts"
		:post="post"
		@delete="deletePost"
		:key="post.id"
		@click="switchPage"
		></PostItem>
		</transition-group>
	</div>
	<h3 v-else>Post List is Empty (</h3>
	
			
	
</template>


<script>
	import PostItem from '@/components/PostItem'
	export default {
		components: {
			PostItem,
		},
		props:{
			posts: {
				type: Array,
				required: true
			},
		},
		methods: {
			deletePost(post) {
				this.$emit('delete', post)
			},
			switchPage(page){
				this.$emit("update: switchPage", page)
			}
		},
	}

</script>

<style scoped>
.post-list-move, /* apply transition to moving elements */
.post-list-enter-active,
.post-list-leave-active,
.post-list-move {
  transition: all 0.5s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.post-list-leave-active {
  position: absolute;
}

</style>