<template>
    <div>
        <h1>Page id: {{ $route.params.id }} </h1>
        
        <div>{{ $route.params.post }}</div>
    </div>
</template>

<script>
    export default {
        name: 'PostIdPage',
        props: ['post']
    }
</script>

<style>

</style>