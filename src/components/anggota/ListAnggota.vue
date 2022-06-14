<template>
    <h1 class="section-title">Daftar</h1>

    <div class="flex">
        <div class="card card-shadow" :class="isLoadingData()">
            <p>Total Simp. Pokok</p>
            <h3 class="text-green">Rp. 130.000.000</h3>
        </div>

        <div class="card card-shadow" :class="isLoadingData()">
            <p>Total Simp. Wajib</p>
            <h3 class="text-green">Rp. 130.000.000</h3>
        </div>

        <div class="card card-shadow" :class="isLoadingData()">
            <p>Total Simp. Sukarela</p>
            <h3 class="text-green">Rp. 130.000.000</h3>
        </div>

        <div class="card card-shadow" :class="isLoadingData()">
            <p>Total Anggota</p>
            <h3 class="text-green">43.000</h3>
        </div>
    </div>

    <div class="flex" :class="isLoadingData()">
        <TableAnggota />
    </div>
</template>

<script>

import TableAnggota from "../util/BasicTable.vue"

import axios from "axios"

export default {

    components : {
        TableAnggota
    },

    data(){
        return {
            DataDaftarAnggota : {
                simpanan : {
                    pokok : 0,
                    wajib : 0,
                    sukarela : 0
                },
                totalAnggota : 0,
                anggota : [
                    {
                        id : null,
                        nama : null,
                        kode : null,
                        simpananPokok : null,
                        simpananWajib : null,
                        simpananSukarela : null,
                        status : null
                    }
                ]
            },
            TableAnggtaSetting : {
                colom : {
                    "nama anggota" : {
                        type : "text"
                    },
                    "kode anggota" : {
                        type : "text"
                    },
                    "simp. pokok" : {
                        type : "money"
                    },
                    "simp. wajib" : {
                        type : "money"
                    },
                    "simp. sukarel" : {
                        type : "money"
                    },
                    "status" : {
                        type : "status-badge"
                    }
                }
            },

            localState : {
                loadingData : false
            }
        }
    },

    methods : {
        getDaftarAnggota(){
            axios
            .get(this.$store.state.baseUrl + "/anggota")
            .then(res =>{
                res// matching
            } )
            .catch(res => {

            })
        }
    },

    computed : {
        isLoadingData(){
            return (this.localState.loadingData) ? "loadng" : null
        }
    }

}
</script>