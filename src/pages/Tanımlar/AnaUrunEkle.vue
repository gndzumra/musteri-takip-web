<template>
  <div class="page-content">
    <div class="container-fluid">
      <!-- start page title -->
      <div class="row">
        <div class="col-12">
          <div
            class="page-title-box d-sm-flex align-items-center justify-content-between"
          >
            <h4 class="mb-sm-0 font-size-18">Ana Ürün Ekle</h4>

            <div class="page-title-right">
              <ol class="breadcrumb m-0">
                <li class="breadcrumb-item">
                  <a href="javascript: void(0);">Tanımlar</a>
                </li>
                <li class="breadcrumb-item active">Ana Ürün Ekle</li>
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
              <h4 class="card-title">Ürün Bilgiler</h4>
              <p class="card-title-desc">
                Lütfen aşağıda istenen tüm bilgileri
                <code>eksiksiz ve doğru </code>giriniz.
              </p>

              <div class="mb-3 row">
                <label for="example-text-input" class="col-md-2 col-form-label"
                  >Ürün Adı</label
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

              <button
                type="button"
                class="btn btn-primary waves-effect waves-light"
              >
                Ürünü Ekle
              </button>
            </div>
          </div>
        </div>
        <!-- end col -->

        <div class="col-6">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Eklenen Ana Ürünler</h4>

              <div class="table-responsive">
                <table class="table table-striped mb-0">
                  <thead>
                    <tr>
                      <th>S.No.</th>
                      <th>Ana Ürün Adı</th>
                      <th>Alt Ürün Sayısı</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Sunucu</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Alan Adı</td>
                      <td>7</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </div>
  <!-- container-fluid -->
</template>