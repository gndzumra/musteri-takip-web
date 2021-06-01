<template>
  <div class="page-content">
    <div class="container-fluid">
      <!-- start page title -->
      <div class="row">
        <div class="col-12">
          <div
            class="page-title-box d-sm-flex align-items-center justify-content-between"
          >
            <h4 class="mb-sm-0 font-size-18">SMS Gönderim Şablonu</h4>

            <div class="page-title-right">
              <ol class="breadcrumb m-0">
                <li class="breadcrumb-item">
                  <a href="javascript: void(0);">Ayarlar</a>
                </li>
                <li class="breadcrumb-item active">SMS Şablonu</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <!-- end page title -->

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">SMS Gönderim Şablonu</h4>
              <p class="card-title-desc">
                Lütfen aşağıda istenen tüm bilgileri
                <code>eksiksiz ve doğru </code>giriniz.
              </p>

              <form method="post">
                <textarea id="elm1" name="area"></textarea>
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
                  <span style="color: white"> Kaydet </span>
                </button>
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