<template>
  <div class="page-content">
    <div class="container-fluid">
      <!-- start page title -->
      <div class="row">
        <div class="col-12">
          <div
            class="page-title-box d-sm-flex align-items-center justify-content-between"
          >
            <h4 class="mb-sm-0 font-size-18">Satış Yap</h4>

            <div class="page-title-right">
              <ol class="breadcrumb m-0">
                <li class="breadcrumb-item">
                  <a href="javascript: void(0);">Cari Hareketler</a>
                </li>
                <li class="breadcrumb-item active">Satış Yap</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <!-- end page title -->

      <div class="row">
        <div class="col-6">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Müşteri Seç</h4>
              <p class="card-title-desc">
                Lütfen aşağıda istenen tüm bilgileri
                <code>eksiksiz ve doğru </code>giriniz.
              </p>

              <div class="mb-3 row">
                <label class="col-md-2 col-form-label">Müşteri</label>
                <div class="col-md-10">
                  <select class="form-control select2-templating">
                    <option value="">Seçiniz...</option>
                    <option value="roanaajans">Roana Ajans</option>
                    <option value="onlinebilisim">Online Bilişim</option>
                    <option value="smartcibo">Smart Cibo</option>
                    <option value="kostgida">Kost Gıda</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->

        <div class="col-6">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Ürün Seç</h4>
              <p class="card-title-desc">
                Müşterinize mevcut ürünlerinizden satış yapabilirsiniz.
              </p>

              <form class="repeater" enctype="multipart/form-data">
                <div data-repeater-list="group-a">
                  <div data-repeater-item class="row">
                    <div class="mb-3 row">
                      <label class="col-md-2 col-form-label">Ürün</label>
                      <div class="col-md-8">
                        <select class="form-select">
                          <option>Seçiniz</option>
                          <option>Eko Cloud Hosting</option>
                          <option>Standart Cloud Hosting</option>
                          <option>Pro Cloud Hosting</option>
                          <option>Com</option>
                          <option>Com.tr</option>
                          <option>Net</option>
                          <option>Org</option>
                        </select>
                      </div>

                      <div class="col-md-2 align-self-center">
                        <div class="d-grid">
                          <input
                            data-repeater-delete
                            type="button"
                            class="btn btn-primary"
                            value="Sil"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <input
                  data-repeater-create
                  type="button"
                  class="btn btn-success mt-3 mt-lg-0"
                  value="Bir Ürün Daha Ekle"
                />
              </form>
            </div>
          </div>
        </div>
        <!-- end col -->

        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="d-grid gap-2">
                <button
                  type="button"
                  class="btn btn-primary btn-lg waves-effect waves-light"
                >
                  Satışı Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end row -->
    </div>
    <!-- container-fluid -->
  </div>
</template>