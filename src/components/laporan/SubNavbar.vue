<template>

    <ul>
        <li v-for="(item, i) in navigation" :key="i">
            <router-link :to="item.path">{{item.name}}</router-link>
        </li>
    </ul>

</template>

<script>
export default {
    data(){
        return {
            navigation : [
                {
                    name : "laba rugi",
                    path : "/laba-rugi"
                },{
                    name : "neraca",
                    path : "/"
                },{
                    name : "arus kas",
                    path : "/arus-kas"
                },{
                    name : "equitas",
                    path : "/equitas"
                },{
                    name : "SHU",
                    path : "/shu"
                }
            ]
        }
    }
}
</script>

<style>

</style>