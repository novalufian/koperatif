<template>
    <!-- top section -->
    <top-bar></top-bar>

    <!-- content sections -->
    <div class="wrapper">
        <!-- navbar -->
        <nav-bar></nav-bar>
        
        <!-- main content contianer -->
        <div class="home-container">

            <router-view><router-view>

        </div>

    </div>
    
    <!-- 
        main page of home koperatif
        load navbar
        load topbar user information

        nested route view
         - dashboard 
         - keanggotaan
     -->
    <div></div>
</template>

<script>

import NavBar from "./NavBar.vue"
import TopBar from "./TopBar.vue"

export default {

    components : {
        NavBar, TopBar
    }

}
</script>

<style>

</style>