<template>
    <!-- main dashboard -->
    <div class="flex flex-col">
        <!-- kopearsi nama -->
        <!-- left section -->
        
        <div class="w-7/12">
            <OverView/>
        </div>

        <div class="w-5/12">
            load chart

            <TransactionList/>
        </div>

        <!-- popup detail kesaehatan koperasi -->
        <div class="w-6-12">
            <DetailKesehatan/>
        </div>


    </div>
</template>

<script>
// import left section
import TransactionList from "./TransactionList.vue"
import OverView from "./OverView.vue"
import DetailKesehatan from "./DetailKesehatan.vue"

export default {

    components : {
        OverView,
        TransactionList,
        DetailKesehatan
    }
}

</script>