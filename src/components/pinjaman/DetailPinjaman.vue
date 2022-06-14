<template>

    <div class="flex flex-row">

        <!-- informasi pinjaman -->
        <div class="w-6/12">
            <!-- 
                status pinjaman 
                 - belum lunas - pembayarn bulan terhir belum di bayarkan 
                 - lunas - lunas 
                 - menunggak - lebih dari 1 ulan belum ada pembayaran
             -->

            <ListTable :data="DataAngsuran.pinjaman" />

        </div>

        <div class="w-6/12">
            <RiwayatPembayaran :id="DataPinjaman.pinjaman.noPinjaman"/>

            <!-- if tunggakan == false -->
            <!-- show button -->
            <button>bayar angsuran</button>
        </div>

    </div>

</template>

<script>

import RiwayatPembayaran from "./RiwayatPembayaran.vue"
import ListTable from "../util/ListTable.vue"

export default {
    components : {
        RiwayatPembayaran,
        ListTable
    },

    data(){
        return {
            DataPinjaman : {
                profile : {
                    id : null, 
                    nama : null,
                    avatar : null,
                    pinjamanId : null,
                },
                pinjaman : {
                    noPinjaman : null,
                    totalPinjaman : null,
                    tanggungan : null,
                    tanggalPinjam : null,
                    lamaPinjaman : null,
                    jaminan : null,
                    jumlahAngsuran : null,
                    prosentaseJasaAnggota : null,
                    totalJasaAnggota : null,
                    jasaAnggota : null
                }
            }
        }
    }


}
</script>