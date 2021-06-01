import Vue from "vue";
import VueRouter from "vue-router";

//Layouts
import IndexLayout from "./layouts/IndexLayout";

//Menu
import Home from "./pages/Menu/Index";
import MusteriListesi from "./pages/Menu/MusteriListesi";
import UrunListesi from "./pages/Menu/UrunListesi";
import Raporlar from "./pages/Menu/Raporlar";

//CariHesaplar
import SatisYap from "./pages/CariHesaplar/SatisYap";
import TahsilatEkle from "./pages/CariHesaplar/TahsilatEkle";

//Tanımlar
import MusteriEkle from "./pages/Tanımlar/MusteriEkle";
import AnaUrunEkle from "./pages/Tanımlar/AnaUrunEkle";
import AltUrunEkle from "./pages/Tanımlar/AltUrunEkle";
import Fiyatlandirma from "./pages/Tanımlar/Fiyatlandirma";

//Ayarlar
import EPostaSablonu from "./pages/Ayarlar/EPostaSablonu";
import Kullanicilar from "./pages/Ayarlar/Kullanicilar";
import SmsSablonu from "./pages/Ayarlar/SmsSablonu";


import CustomerEdit from "./pages/Menu/components/CustomerEdit";

//Login
import Login from "./pages/Login/Login";

Vue.use(VueRouter);

export const routes = [{
        path: "/",
        component: IndexLayout,
        meta: { requiresAuth: false },
        children: [
            { path: "/", component: Home, name: "home", meta: { requiresAuth: false } },

            { path: "/ana-urun-ekle", component: AnaUrunEkle, name: "ana-urun-ekle", meta: { requiresAuth: false } },
            { path: "/alt-urun-ekle", component: AltUrunEkle, name: "alt-urun-ekle", meta: { requiresAuth: false } },
            { path: "/eposta-sablonu", component: EPostaSablonu, name: "eposta-sablonu", meta: { requiresAuth: false } },
            { path: "/fiyatlandirma", component: Fiyatlandirma, name: "fiyatlandirma", meta: { requiresAuth: false } },
            { path: "/kullanicilar", component: Kullanicilar, name: "kullanicilar", meta: { requiresAuth: false } },
            { path: "/musteri-ekle", component: MusteriEkle, name: "musteri-ekle", meta: { requiresAuth: false } },
            { path: "/musteri-listesi", component: MusteriListesi, name: "musteri-listesi", meta: { requiresAuth: false } },
            { path: "/raporlar", component: Raporlar, name: "raporlar", meta: { requiresAuth: false } },
            { path: "/satis-yap", component: SatisYap, name: "satis-yap", meta: { requiresAuth: false } },
            { path: "/sms-sablonu", component: SmsSablonu, name: "sms-sablonu", meta: { requiresAuth: false } },
            { path: "/tahsilat-ekle", component: TahsilatEkle, name: "tahsilat-ekle", meta: { requiresAuth: false } },
            { path: "/urun-listesi", component: UrunListesi, name: "urun-listesi", meta: { requiresAuth: false } },
        ]
    },
    { path: "/login", component: Login, name: "login", meta: { requiresAuth: false } },

    { path: "/customer-edit", component: CustomerEdit, name: "customer-edit", meta: { requiresAuth: false } },

    { path: "*", redirect: "/" },
]

export const router = new VueRouter({
    mode: "history",
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
});