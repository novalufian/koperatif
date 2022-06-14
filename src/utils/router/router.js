import {createWebHistory, createRouter} from "vue-router"
//import component 

// START AUTH COMPONENT
import IndexAuth from "./component/auth/IndexAuth"
import LoginPage from "./component/auth/LoginPage"
import RegisterPage from "./component/auth/RegisterPage"
// END AUTH COMPONENT

// START DASHBOARD COMPONENT
import IndexHome from "./component/home/IndexHome"
import DashboardPage from "./component/dashboard/MainDashboard"
// END DASHBOARD COMPONENT
// ANGGOTA
import IndexAnggota from "./component/anggota/IndexAnggota"
import ListAnggota from "./component/anggota/ListAnggota"
import DetailAnggota from "./component/anggota/DetailAnggota"
import TambahAnggota from "./component/anggota/TambahAnggota"
// END ANGGOTA

// PINJAMAN
import IndexPinjaman from "./component/pinjaman/IndexPinjaman"
import DaftarPinjaman from "./component/pinjaman/DaftarPinjaman"
import PinjamanBaru from "./component/pinjaman/PinjamanBaru"
import DetailPinjaman from "./component/pinjaman/DetailPinjaman"
// END PINJAMAN

// LAPORAN
import IndexLaporan from "./component/pinjaman/IndexLaporan"
import LaporanNeraca from "./component/pinjaman/NeracaPage"
import LaporanLabarugi from "./component/pinjaman/LabaRugi"
import LaporanEquitas from "./component/pinjaman/EquitasPage"
import LaporanSHU from "./component/pinjaman/SHUPage"
import LaporanAruskas from "./component/pinjaman/ArusKas"
// END LAPORAN

//router list
const routes = [
    {
        name : "auth",
        path : "/auth",
        component: IndexAuth,
        children : [
            {
                name : "auth-login",
                path : "/login",
                component : LoginPage
            },
            {
                name : "auth-register",
                path : "/register",
                component : RegisterPage
            }
        ]
    },
    {
        name : "home",
        path : "/",
        component : IndexHome,
        meta : {
            auth : true
        },
        children : [
            
            {
                name : "dashboard-home",
                path : "/dashboard",
                component : DashboardPage,
                meta : {
                    auth : true
                },
            },

            {
                name  : "anggota",
                path : "/anggota",
                component : IndexAnggota,
                meta : {
                    auth : true
                },
                children : [
                    {
                        name : "anggota-daftar",
                        path : "/",
                        component : ListAnggota,
                        meta : {
                            auth : true
                        }
                    },
                    {
                        name : "anggota-detail",
                        path : "/detail/:idAnggota",
                        component : DetailAnggota,
                        meta : {
                            auth : true
                        }
                    },
                    {
                        name : "anggota-tambah",
                        path : "/tambah-baru",
                        component : TambahAnggota,
                        meta : {
                            auth : true
                        }
                    }
                ]
            },

            {
                name : "pinjaman",
                path : "/pinjaman",
                component : IndexPinjaman,
                meta : {
                    auth : true
                },
                children : [
                    {
                        name : "pinjaman-list",
                        path : "/",
                        component : DaftarPinjaman,
                        meta : {
                            auth : true
                        },
                    },
                    {
                        name : "pinjaman-baru",
                        path : "/baru",
                        component : PinjamanBaru,
                        meta : {
                            auth : true
                        },
                    },
                    {
                        name : "pinjaman-detail",
                        path : "/detail/:idPinjaman",
                        component : DetailPinjaman,
                        meta : {
                            auth : true
                        },
                    }
                ]
            },

            {
                name : "laporan",
                path : "/laporan",
                component : IndexLaporan,
                meta : {
                    auth : true
                },
                children : [
                    {
                        name : "laporan-neraca",
                        path : "/",
                        component : LaporanNeraca,
                        meta : {
                            auth : true
                        },
                    },{
                        name : "laporan-laba-rugi",
                        path : "/laba-rugi",
                        component : LaporanLabarugi,
                        meta : {
                            auth : true
                        },
                    },{
                        name : "laporan-arus-kas",
                        path : "/arus-kas",
                        component : LaporanAruskas,
                        meta : {
                            auth : true
                        },
                    },{
                        name : "laporan-equitas",
                        path : "/equitas",
                        component : LaporanEquitas,
                        meta : {
                            auth : true
                        },
                    },{
                        name : "laporan-shu",
                        path : "/shu",
                        component : LaporanSHU,
                        meta : {
                            auth : true
                        },
                    }
                ]
            }
        ]
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes,
    linkActiveClass: "koperatif-active-link",
    linkExactActiveClass: "",
})

export default router