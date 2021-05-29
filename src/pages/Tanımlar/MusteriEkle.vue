<template>
  <div class="page-content">
    <div class="container-fluid">
      <!-- start page title -->
      <div class="row">
        <div class="col-12">
          <div
            class="page-title-box d-sm-flex align-items-center justify-content-between"
          >
            <h4 class="mb-sm-0 font-size-18">Müşteri Ekle</h4>

            <div class="page-title-right">
              <ol class="breadcrumb m-0">
                <li class="breadcrumb-item">
                  <a href="javascript: void(0);">Tanımlar</a>
                </li>
                <li class="breadcrumb-item active">Müşteri Ekle</li>
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
              <h4 class="card-title">Kurumsal Bilgiler</h4>
              <p class="card-title-desc">
                Lütfen aşağıda istenen tüm bilgileri
                <code>eksiksiz ve doğru </code>giriniz.
              </p>

              <div class="mb-3 row">
                <label for="example-text-input" class="col-md-2 col-form-label"
                  >Firma Adı</label
                >
                <div class="col-md-10">
                  <input
                    class="form-control"
                    type="text"
                    value=""
                    id="example-text-input"
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label class="col-md-2 col-form-label"
                  >Fiyatlandırma Tipi</label
                >
                <div class="col-md-10">
                  <select class="form-select">
                    <option>F1</option>
                    <option>F2</option>
                    <option>F3</option>
                  </select>
                </div>
              </div>

              <div class="mb-3 row">
                <label class="col-md-2 col-form-label">Sektör</label>
                <div class="col-md-10">
                  <select class="form-select">
                    <option>Seçiniz</option>
                    <option>Teknoloji</option>
                    <option>Sağlık</option>
                    <option>Giyim</option>
                    <option>Gıda</option>
                    <option>Reklam</option>
                    <option>Otomotiv</option>
                    <option>Sanayi</option>
                    <option>Eğitim</option>
                    <option>Diğer</option>
                  </select>
                </div>
              </div>

              <div class="mb-3 row">
                <label for="example-text-input" class="col-md-2 col-form-label"
                  >Yetkili Kişi</label
                >
                <div class="col-md-10">
                  <input
                    class="form-control"
                    type="text"
                    value=""
                    id="example-text-input"
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="example-email-input" class="col-md-2 col-form-label"
                  >1. E-Posta</label
                >
                <div class="col-md-10">
                  <input
                    id="input-email"
                    class="form-control input-mask"
                    data-inputmask="'alias': 'email'"
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="example-email-input" class="col-md-2 col-form-label"
                  >2. E-Posta</label
                >
                <div class="col-md-10">
                  <input
                    id="input-email"
                    class="form-control input-mask"
                    data-inputmask="'alias': 'email'"
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="example-tel-input" class="col-md-2 col-form-label"
                  >Sabit Telefon</label
                >
                <div class="col-md-10">
                  <input
                    id="input-mask example-tel-input"
                    class="form-control input-mask"
                    type="tel"
                    value=""
                    data-inputmask="'mask': '999-9999999'"
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="example-tel-input" class="col-md-2 col-form-label"
                  >GSM</label
                >
                <div class="col-md-10">
                  <input
                    id="input-mask example-tel-input"
                    class="form-control input-mask"
                    type="tel"
                    value=""
                    data-inputmask="'mask': '999-9999999'"
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label class="col-md-2 col-form-label">Fatura Durumu</label>
                <div class="col-md-10">
                  <select class="form-select">
                    <option>Seçiniz</option>
                    <option>Faturalı</option>
                    <option>Faturasız</option>
                  </select>
                </div>
              </div>

              <h4 class="card-title">Fatura Bilgileri</h4>
              <p class="card-title-desc">
                Lütfen aşağıda istenen tüm bilgileri
                <code>eksiksiz ve doğru </code>giriniz.
              </p>

              <div class="mb-3 row">
                <label for="example-text-input" class="col-md-2 col-form-label"
                  >Firma Adı ve Ünvanı</label
                >
                <div class="col-md-10">
                  <input
                    class="form-control"
                    type="text"
                    value=""
                    id="example-text-input"
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="example-text-input" class="col-md-2 col-form-label"
                  >Adres</label
                >
                <div class="col-md-10">
                  <input
                    class="form-control"
                    type="text"
                    value=""
                    id="example-text-input"
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="example-text-input" class="col-md-2 col-form-label"
                  >Vergi Dairesi</label
                >
                <div class="col-md-10">
                  <input
                    class="form-control"
                    type="text"
                    value=""
                    id="example-text-input"
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="example-text-input" class="col-md-2 col-form-label"
                  >Vergi Numarası</label
                >
                <div class="col-md-10">
                  <input
                    class="form-control"
                    type="text"
                    value=""
                    id="example-text-input"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->

        <div class="col-6">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Müşteriye Ürün Ekle</h4>
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
                  Müşteriyi Kaydet
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