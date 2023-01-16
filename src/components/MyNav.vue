<template>
    <div class="my-nav">
        <h4 class="my-nav__title" @click="$router.push('/')">SiteName</h4>
        <div class="my-nav__btns">
            <MyButton @click="$router.push('/posts')">Posts</MyButton>
            <MyButton @click="$router.push('/about')">About</MyButton>        
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .my-nav{
        background: teal;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .my-nav__title{
        color: #fff;
        padding-left: 5px;
    }
    .my-nav__btns{
        justify-content: flex-end;
    }
</style>