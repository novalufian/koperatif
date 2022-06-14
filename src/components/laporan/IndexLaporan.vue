<template>
    Laporan Keuangan

    <div class="flex lfex-row">
        <div class="w-52 flex flex-col">
            <NavigationBar />

            <!-- rangkuman chart -->
        </div>

        <div class="w-fill">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import NavigationBar from "./SubNavbar.vue"
export default {
    components : {
        NavigationBar
    }
}
</script>