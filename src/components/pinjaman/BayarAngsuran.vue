<template>
    <!-- get id angsuran from query param url -->
    <h1>Pembayaran Angsuran</h1>
    <p>{{DataAngsuran.profile.nama}} {{DataAngsuran.profile.angsuranId}}</p>

    <div class="form-input">
        <label for="">Tanggal Pembayaran DIterima</label>
        <div class="input-wrapper">
            <input type="text" name="tangal pinjam" class="input-text" v-model="DataAngsuran.tanggalPembayaran">
            <div class="input-icon">
                <!-- icon goes here -->
            </div>
        </div>
    </div>

    <p>Priode Pembayaran</p>
    <!-- popup  -->

    <p>Pelunasan Langsung</p>
    <!-- 
        toggle selecteed 
        jika true
        jumah diterima = total tanggungan -> form disable
    -->

    <div class="form-group">
        <div class="form-input">
            <label for="">Jumlah Angsuran</label>
            <div class="input-wrapper">
                <div class="pre"> Rp. </div>
                <input type="text" name="tangal pinjam" class="input-text" v-model="DataAngsuran.angsuran">
            </div>
        </div>

        <div class="form-input">
            <label for="">jumlah Diterima</label>
            <div class="input-wrapper">
                <div class="pre"> Rp. </div>
                <input type="text" name="tangal pinjam" class="input-text" v-model="DataAngsuran.jumlahDiterima">
                <div class="input-icon">
                    <!-- icon goes here -->
                </div>
            </div>
        </div>
    </div>

    <ListPetugas />
</template>

<script>

import ListPetugas from "./ListAnggota.vue"

export default {
    components : {
        ListPetugas
    },

    data(){
        return {
            DataAngsuran : {
                profile : {
                    id : null,
                    nama : null,
                    angusrnaId : null,
                },
                totalPinjaman : null,
                totalTanggungan : null,
                tanggalPembayaran : null,
                periodePembayaran : [], // multiple value 
                pelunasanLangsung : false, // true false value
                angsuran : null,
                jumlahDiterima : null,
                petugas : null,
            }
        }
    }
}
</script>

<style>

</style>