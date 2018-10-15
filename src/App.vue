<template>
    <div id="app">
        <!-- keep-alive会缓存所有路由，用exclude来排除,值为组件名 -->
        <keep-alive exclude="Detail">
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: 'App'
    };
</script>

<style></style>
