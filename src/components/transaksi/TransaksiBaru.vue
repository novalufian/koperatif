<template>

    <h1>Header Transaksi</h1>

    <div class="form-group">

        <div class="form-input" 
            :class="
            (_VUELIDATE_.DataTransaksi.headerTransaksi.tglTransaksi.$error) ? 'form-error' 
            : 'form-normal'"
        >
            <label for="">Tanggal Transaksi</label>
            <div class="input-wrapper">
                <input 
                type="text" name="tanggal transaksi" class="input-text" 
                v-model="DataTransaksi.headerTransaksi.tglTransaksi">
            </div>
        </div>

        <div class="form-input"
            :class="
            (_VUELIDATE_.DataTransaksi.headerTransaksi.desk.$error) ? 'form-error' 
            : 'form-normal'"
        >
            <label for="">Deskripsi</label>
            <div class="input-wrapper">
                <input 
                type="text" name="deskripsi" class="input-text" 
                v-model="DataTransaksi.headerTransaksi.desk">
            </div>
        </div>

    </div>

    <h1>Daftar Transaksi</h1>

    <ListSummary :data="summary()"/>
    <!-- popup form -->
    <TambahTransaksi @tambah-transaksi="addDaftarTransaksi"/>
</template>

<script>
import TambahTransaksi from "./TambahTransaksi.vue"
import ListSummary from "../util/ListTable.vue"

import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
    setup () {
        return { _VUELIDATE_ : useVuelidate() }
    },

    components : {
        TambahTransaksi,
        ListSummary
    },

    validations(){
        return {
            DataTransaksi : {
                id : { required } ,
                headerTransaksi : {
                    tglTransaksi : { required },
                    desk : { required },
                },
                daftarTransaksi : { required },
                summary : { required }
            }
        }
    },

    data(){
        return {
            DataTransaksi : {
                id : null,
                headerTransaksi : {
                    tglTransaksi : null,
                    desk : null,
                },
                daftarTransaksi : [],
                summary : {
                    totalDebit : 0,
                    totalKredit : 0,
                    selisih : 0
                }
            }
        }
    },

    computed : {
        summary(){
            var _result_ = null
            this.DataTransaksi.daftarTransaksi.forEach(function (el, i) {
                
            })
            
            // return this.DataTransaksi.summary
            return _result_
        }
    },

    methods : {
        addDaftarTransaksi (data) {
            // emit from tambah transaksi
            // add to list view
            this.DataTransaksi.daftarTransaksi.push(data)
        },

    }

}
</script>