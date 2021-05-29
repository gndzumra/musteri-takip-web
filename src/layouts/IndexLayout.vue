<template>
  <div id="layout-wrapper">
    <header id="page-topbar">
      <div class="navbar-header">
        <div class="d-flex">
          <div class="navbar-brand-box">
            <a href="index" class="logo logo-dark">
              <span class="logo-sm">
                <img src="assets/images/logo.svg" alt="" height="22" />
              </span>
              <span class="logo-lg">
                <img src="assets/images/logo-dark.png" alt="" height="17" />
              </span>
            </a>

            <a href="index" class="logo logo-light">
              <span class="logo-sm">
                <img src="assets/images/logo-light.svg" alt="" height="22" />
              </span>
              <span class="logo-lg">
                <img src="assets/images/logo-light.png" alt="" height="19" />
              </span>
            </a>
          </div>

          <button
            type="button"
            class="btn btn-sm px-3 font-size-16 header-item waves-effect"
            id="vertical-menu-btn"
          >
            <i class="fa fa-fw fa-bars"></i>
          </button>
        </div>

        <div class="d-flex">
          <div class="dropdown d-none d-lg-inline-block ms-1">
            <button
              type="button"
              class="btn header-item noti-icon waves-effect"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="bx bx-customize"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
              <div class="px-lg-2">
                <div class="row g-0">
                  <div class="col">
                    <a class="dropdown-icon-item" href="#">
                      <i class="bx bx-list-plus"></i>
                      <span>Müşteri Ekle</span>
                    </a>
                  </div>
                  <div class="col">
                    <a class="dropdown-icon-item" href="#">
                      <i class="bx bx-list-plus"></i>
                      <span>Ürün Ekle</span>
                    </a>
                  </div>
                  <div class="col">
                    <a class="dropdown-icon-item" href="#">
                      <i class="bx bxs-basket"></i>
                      <span>Satış Yap</span>
                    </a>
                  </div>
                </div>

                <div class="row g-0">
                  <div class="col">
                    <a class="dropdown-icon-item" href="#">
                      <i class="bx bx-receipt"></i>
                      <span>Tahsilat Ekle</span>
                    </a>
                  </div>
                  <div class="col">
                    <a class="dropdown-icon-item" href="#">
                      <i class="bx bxs-pie-chart-alt-2"></i>
                      <span>Raporlar</span>
                    </a>
                  </div>
                  <div class="col">
                    <a class="dropdown-icon-item" href="#">
                      <i class="bx bx-lira"></i>
                      <span>Fiyatlandırma</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="dropdown d-none d-lg-inline-block ms-1">
            <button
              type="button"
              class="btn header-item noti-icon waves-effect"
              data-toggle="fullscreen"
            >
              <i class="bx bx-fullscreen"></i>
            </button>
          </div>

          <div class="dropdown d-inline-block">
            <button
              type="button"
              class="btn header-item waves-effect"
              id="page-header-user-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                class="rounded-circle header-profile-user"
                src="assets/images/users/avatar-3.jpg"
                alt="Header Avatar"
              />
              <span class="d-none d-xl-inline-block ms-1" key="t-henry"
                >Serkan</span
              >
              <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-end">
              <a class="dropdown-item" href="#"
                ><i class="bx bx-user font-size-16 align-middle me-1"></i>
                <span key="t-profile">Profil</span></a
              >
              <a class="dropdown-item" href="#"
                ><i class="bx bx-lock-open font-size-16 align-middle me-1"></i>
                <span key="t-lock-screen">Şifre Değiştir</span></a
              >
              <div class="dropdown-divider"></div>
              <a class="dropdown-item text-danger" href="#"
                ><i
                  class="bx bx-power-off font-size-16 align-middle me-1 text-danger"
                ></i>
                <span key="t-logout">Çıkış Yap</span></a
              >
            </div>
          </div>

          <div class="dropdown d-inline-block">
            <button
              type="button"
              class="btn header-item noti-icon right-bar-toggle waves-effect"
            >
              <i class="bx bx-cog bx-spin"></i>
            </button>
          </div>
        </div>
      </div>
    </header>

    <div class="vertical-menu">
      <div data-simplebar class="h-100">
        <div id="sidebar-menu">
          <ul class="metismenu list-unstyled" id="side-menu">
            <li class="menu-title" key="t-menu">MENÜ</li>

            <li>
              <router-link to="index" class="waves-effect">
                <i class="bx bxs-home"></i>
                <span key="t-dashboards">Anasayfa</span>
              </router-link>
            </li>

            <li>
              <a href="musteri-listesi" class="waves-effect">
                <i class="bx bx-list-ul"></i>
                <span key="t-invoices">Müşteri Listesi</span>
              </a>
            </li>

            <li>
              <a href="urun-listesi" class="waves-effect">
                <i class="bx bx-list-ul"></i>
                <span key="t-invoices">Ürün Listesi</span>
              </a>
            </li>

            <li>
              <a href="raporlar" class="waves-effect">
                <i class="bx bxs-pie-chart-alt-2"></i>
                <span key="t-invoices">Raporlar</span>
              </a>
            </li>

            <li class="menu-title" key="t-apps">CARİ HAREKETLER</li>

            <li>
              <a href="satis-yap" class="waves-effect">
                <i class="bx bxs-basket"></i>
                <span key="t-invoices">Satış Yap</span>
              </a>
            </li>

            <li>
              <a href="tahsilat-ekle" class="waves-effect">
                <i class="bx bx-receipt"></i>
                <span key="t-invoices">Tahsilat Ekle</span>
              </a>
            </li>

            <li class="menu-title" key="t-apps">TANIMLAR</li>

            <li>
              <a href="musteri-ekle" class="waves-effect">
                <i class="bx bx-list-plus"></i>
                <span key="t-invoices">Müşteri Ekle</span>
              </a>
            </li>

            <li>
              <a href="javascript: void(0);" class="has-arrow waves-effect">
                <i class="bx bx-list-plus"></i>
                <span key="t-invoices">Ürün Ekle</span>
              </a>
              <ul class="sub-menu" aria-expanded="false">
                <li>
                  <a href="ana-urun-ekle" key="t-invoice-list">Ana Ürün Ekle</a>
                </li>
                <li>
                  <a href="alt-urun-ekle" key="t-invoice-list">Alt Ürün Ekle</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="fiyatlandirma" class="waves-effect"
                ><i class="bx bx-lira"></i>
                <span key="t-invoices">Fiyatlandırma</span>
              </a>
            </li>

            <li class="menu-title" key="t-apps">AYARLAR</li>

            <li>
              <a href="javascript: void(0);" class="has-arrow waves-effect">
                <i class="bx bxs-brightness"></i>
                <span key="t-invoices">Genel Ayarlar</span>
              </a>
              <ul class="sub-menu" aria-expanded="false">
                <li>
                  <a href="eposta-sablonu" key="t-invoice-list"
                    >E-Posta Şablonu</a
                  >
                </li>
                <li>
                  <a href="sms-sablonu" key="t-invoice-list">SMS Şablonu</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="kullanicilar" class="waves-effect"
                ><i class="bx bxs-user"></i>
                <span key="t-invoices">Kullanıcılar</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="main-content">
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </div>
  </div>
</template>
    