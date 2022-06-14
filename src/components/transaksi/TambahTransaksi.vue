<template>
 form popup transaksi baru
 untuk menambah item baru pada transaksi baru
    <div class="form-input"
        :class="(_VUELIDATE_.DataBarisTransaksi.deskripsi.$error) ? 'form-error' 
        : 'form-normal'">
        <label for="">Deskripsi</label>
        <div class="input-wrapper">
            <input 
            type="text" name="deskripsi" class="input-text" 
            v-model="DataBarisTransaksi.deskripsi">
        </div>

        <div class="icon">

        </div>
    </div>

    <div class="form-input"
        :class="(_VUELIDATE_.DataBarisTransaksi.akun.$error) ? 'form-error' 
        : 'form-normal'">
        <label for="">Akun</label>
        <div class="input-wrapper">
            <input 
            type="text" name="akun" class="input-text" 
            v-model="DataBarisTransaksi.akun">
        </div>

        <div class="icon">

        </div>
    </div>

    <div class="form-input"
        :class="(_VUELIDATE_.DataBarisTransaksi.totalDebit.$error) ? 'form-error' 
        : 'form-normal'">
        <label for="">Total Debit</label>
        <div class="input-wrapper">
            <input 
            type="text" name="total debit" class="input-text" 
            v-model="DataBarisTransaksi.totalDebit">
        </div>

        <div class="icon">

        </div>
    </div>

    <div class="form-input"
        :class="(_VUELIDATE_.DataBarisTransaksi.totalKredit.$error) ? 'form-error' 
        : 'form-normal'">
        <label for="">Total Kredit</label>
        <div class="input-wrapper">
            <input 
            type="text" name="total kredit" class="input-text" 
            v-model="DataBarisTransaksi.totalKredit">
        </div>

        <div class="icon">

        </div>
    </div>

    <button class="btn btn-primary" @click="tambahTransaksiBaru()">Tambah</button>

 <!-- button tambah emit data ke parent  -->
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
    setup () {
        return { _VUELIDATE_ : useVuelidate() }
    },

    validations(){
        return {
            DataBarisTransaksi : {
                idBarisTransaksi : {required}, //auto generate
                desk : {required},
                akun : {required},
                totalDebit : {required},
                totalKredit : {required},
                createdAt : {required} // auto generate
            }
        }
    },

    data(){
        return {
            DataBarisTransaksi : {
                idBarisTransaksi : null, //auto generate
                desk : null,
                akun : null,
                totalDebit : null,
                totalKredit : null,
                createdAt : null // auto generate
            }
        }
    },

    methods : {
        resetData : function () {
            this.DataBarisTransaksi.idBarisTransaksi = null //auto generate
            this.DataBarisTransaksi.desk = null
            this.DataBarisTransaksi.akun = null
            this.DataBarisTransaksi.totalDebit = null
            this.DataBarisTransaksi.totalKredit = null
            this.DataBarisTransaksi.createdAt = null// auto generate
        },

        tambahTransaksiBaru : function () {
            this._VUELIDATE_.$touch()
            if(this._VUELIDATE_.$invalid){
                return
            }
            this.$emit("tambahTransaksi", this.DataBarisTransaksi)
        }
    }, 

    mounted(){
        this.resetData()
    }
}
</script>