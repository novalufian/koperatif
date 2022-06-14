<template>

    <div class="flex flex-row">
        <!-- info peminjam -->
        <div class="w-6/12">

            <h1>Peminjam</h1>
            <!-- 
                wrapper select anggota  
                and popup anggota
            -->
            <div class="">
                <!-- click area to open popup-->
                <div @click="openListAnggota = true">
                    <img :src="DataPinjaman.peminjam.avatar" alt="">
                    <p>{{DataPinjaman.peminjam.nama}}</p>
                </div>
                
                <div >
                    <!-- 
                        icon section 
                        icon serach = clickable to open list anggota
                        icon x = clickale to remove data peminjam
                    -->
                </div>
                <!-- if active -->
                <ListAnggota v-if="openListAnggota"/>
            </div>

            <h1>Infromasi Pinjaman</h1>
            <p>Jumlah Pinjaman</p>
            <input type="text" v-model="DataPinjaman.jumlahPinjaman">

            <div class="form-input">
                <label for="">Tanggal Pinjam</label>
                <div class="input-wrapper">
                    <input type="text" name="tangal pinjam" class="input-text" v-model="DataPinjaman.tanggalPinjam">
                    <div class="input-icon">
                        <!-- icon goes here -->
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="form-input">
                    <label for="">lama Pinjam</label>
                    <div class="input-wrapper">
                        <input type="text" name="tangal pinjam" class="input-text" v-model="DataPinjaman.lamaPinjaman">
                        <div class="input-icon">
                            <!-- icon goes here -->
                        </div>
                    </div>
                </div>

                <div class="form-input">
                    <label for="">Periode</label>
                    <div class="input-wrapper">
                        <input type="text" name="tangal pinjam" class="input-text" v-model="DataPinjaman.periodePinjaman">
                        <div class="input-icon">
                            <!-- icon goes here -->
                        </div>
                    </div>
                </div>
            </div>

            <ListTable :data="DataPinjaman.angsuran"/>

        </div>

        <!-- info jaminan -->
        <div class="w-6/12">
            <h1>Jaminan</h1>
            <div class="form-input">
                <label for="">Jenis Jaminan</label>
                <div class="input-wrapper">
                    <input type="text" name="tangal pinjam" class="input-text" v-model="DataPinjaman.jaminan.jenis">
                    <div class="input-icon">
                        <!-- icon goes here -->
                    </div>
                </div>
            </div>

            <div class="form-input">
                <label for="">Tanggal Pinjam</label>
                <div class="input-wrapper">
                    <input type="text" name="tangal pinjam" class="input-text" v-model="DataPinjaman.jaminan.keterangan">
                    <div class="input-icon">
                        <!-- icon goes here -->
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import ListAnggota from "./ListAnggota.vue"
import ListTable from "../util/ListTable.vue"
export default {

    components : {
        ListAnggota,
        ListTable
    },

    data(){
        return {
            flow : {
                openListAnggota : false,
            },
            DataPinjaman : {
                peminjam : {
                    id : null,
                    avatar : null,
                    nama : null,
                },
                // info pinjaman
                jumlahPinjaman : null , //nominal rupiah
                tanggalPinjam : null, // date
                lamaPinjaman : null, // 1 2 3 
                periodePinjaman : null, // tahun , bulan 
                // info pinjaman 2, auto generate by system
                angsuran : {
                    angsuranPerbulan : null, // rupiah
                    prosentasejasaAnggota : null, // suku bunga ex : 2%
                    totalJasaAnggota : null, // jumlah pinjaman + total suku bunga 
                    jasaAnggotaPerbulan : null,
                },

                // info jaminan
               jaminan : {
                    jenis : null, 
                    keterangan : null,
               }
            }
        }
    }
}
</script>

<style>

</style>