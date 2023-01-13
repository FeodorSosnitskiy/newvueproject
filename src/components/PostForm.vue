<template>
	<h2>Create new post</h2>
		<form @submit.prevent>
			<MyInput class="input" type="text" placeholder="title of new text"
			v-model:value="post.title"
			></MyInput>	
			<MyInput style="height: 160px;" class="input" type="text" placeholder="body of new text" 
			v-model:value="post.body"
			></MyInput>
			<MyButton @click="createPost">Add new text</MyButton>
		</form>
</template>

<script>

	export default{
		name: 'PostForm',
		data(){
			return {
				post: {
					title: '',
					body: '',
				}
			}
		},
		methods:{          
			createPost(){
				this.post.id = Date.now();
				this.$emit('create', this.post);
				this.post = {
					title: '',
					body: ''
				}
			}
		}, 
		/*watch: {//Вотчим за объектом через Глубокое отслеживание
			post: {
				handler(newValue){
					console.log(newValue)
				},
				deep: true
			}
		}*/
		
	}
</script>	

<style scoped>
	form {
		width: 100%;
	    display: flex;
		flex-direction: column;
	}
	
</style>