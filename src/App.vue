<template>
	<h2>Posts page</h2>
	<input type="text"
	placeholder="Enter search query" 
	v-model="searchQuery">
	<div class="app_btns">
		<MyButton
		@click="showDialog"
		>Create Post</MyButton>
		<MySelect 
		v-model="selectedSort" 
		:options="sortOptions"
		>
		</MySelect>
	</div>
		
	<MyDialog v-model:show="dialogVisible">
		<PostForm
		@create="createPost"
		></PostForm>
	</MyDialog>		
	
	<PostList 
	v-if="!isPostLoading"
	:posts="sortedAndSearchedPosts"
	@delete="deletePost"
	>	
	</PostList>
	<div v-else>Waiting loading</div>
	<MyNav
	:totalPages="totalPages"
	@switchPage="switchPage"
	></MyNav>
</template>

<script>
	import PostForm from '@/components/PostForm' 
	import PostList from '@/components/PostList' 
	import axios from 'axios' 
	export default {
		data(){
			return {
				searchQuery: '',
				modificatorValue: '',
				posts:[],
				page: 1,
				limit: 10,
				totalPages: 0,
				dialogVisible: false,
				isPostLoading: false,	
				selectedSort: '',
				sortOptions: [
								{
									value: 'title',
									name: 'Title filter'
								},
								{
									value: 'body',	
									name: 'Sort by content'	
								} //+ id sorting
				]
			}
		},
		
		components: {
			PostList, PostForm
		},
		methods: {
			switchPage(page){
				this.page = page;
				
			},
			deletePost(post){
				this.posts.forEach((itemPost, idx)=>{
					if(itemPost.id === post.id) {
						this.posts.splice(idx, 1)
					}
				})
			},
			createPost(post) {
				this.posts.push(post);
				this.dialogVisible = false;
			},
			showDialog(){
				this.dialogVisible = true
			},
			removeNonDigitCharacters() {
			    this.modificatorValue = this.modificatorValue.replace(/[^0-9]+/g, '');
		  	},
		  	async fetchPosts(){
		  		try {
		  			this.isPostLoading = true;	
		  			setTimeout(async ()=>{
		  			const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
		  					params: {
		  						_page: this.page,
		  						_limit: this.limit
		  					}	
		  			});
		  			this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
		  			this.posts = response.data;
		  			this.isPostLoading = false;
		  			}, 1000)
		  		} catch(e) {
		  			alert('Error')
		  		} 
		  	}
		},
		mounted(){
			this.fetchPosts();
		},
		computed: {
			sortedPosts(){
				return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(this.selectedSort)
				)
			},
			sortedAndSearchedPosts(){
				return this.sortedPosts = this.sortedPosts.filter(item=>item.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
			}
		},
		watch: {
			/*selectedSort(newValue){
				//но это мутирует исходный массив!!!!
				this.posts.sort((post1, post2) => {
					return post1[newValue]?.localeCompare(post2[newValue])
				})
			},*/
			page(){//фетч отрабатывает каждый раз, как меняется page, круто!
				this.fetchPosts()
			}
		}
	}
</script>

<style>
	.app_btns{
		display: flex;
		justify-content: space-between;
	}
</style>