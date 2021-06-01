<template>
  <div class="page-content">
    <div class="container-fluid">
      <!-- start page title -->
      <div class="row">
        <div class="col-12">
          <div
            class="page-title-box d-sm-flex align-items-center justify-content-between"
          >
            <h4 class="mb-sm-0 font-size-18">Kullanıcılar</h4>

            <div class="page-title-right">
              <ol class="breadcrumb m-0">
                <li class="breadcrumb-item">
                  <a href="javascript: void(0);">Ayarlar</a>
                </li>
                <li class="breadcrumb-item active">Kullanıcılar</li>
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
              <h4 class="card-title">Kullanıcı Ekle</h4>
              <p class="card-title-desc">
                Lütfen aşağıda istenen tüm bilgileri
                <code>eksiksiz ve doğru </code>giriniz.
              </p>

              <div class="mb-3 row">
                <label for="example-text-input" class="col-md-2 col-form-label"
                  >Kullanıcı Adı</label
                >
                <div class="col-md-10">
                  <input
                    class="form-control"
                    type="text"
                    value=""
                    id="example-text-input"
                    placeholder="Kullanıcı adı giriniz"
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="example-text-input" class="col-md-2 col-form-label"
                  >Şifre</label
                >
                <div class="col-md-10">
                  <input
                    class="form-control"
                    type="text"
                    value=""
                    id="example-text-input"
                    placeholder="Şifre giriniz"
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="example-text-input" class="col-md-2 col-form-label"
                  >Şifte Tekrar</label
                >
                <div class="col-md-10">
                  <input
                    class="form-control"
                    type="text"
                    value=""
                    id="example-text-input"
                    placeholder="Şifrenizi tekrar giriniz"
                  />
                </div>
              </div>

              <button
                type="button"
                class="btn btn-primary waves-effect waves-light"
              >
                Kullanıcı Ekle
              </button>
            </div>
          </div>
        </div>
        <!-- end col -->

        <div class="col-6">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Mevcut Kullanıcılar</h4>

              <div class="table-responsive">
                <table class="table table-striped mb-0">
                  <thead>
                    <tr>
                      <th>S.No.</th>
                      <th>Kullanıcı Adı</th>
                      <th>İşlem</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(value, key) in customers" :key="key">
                      <th scope="row">{{ value.id }}</th>
                      <td>{{ value.name }}</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-success btn-sm waves-effect waves-light mr-5"
                        >
                          <i
                            class="bx bxs-pencil font-size-16 align-middle me-2"
                            style="color: white"
                          >
                          </i>
                          <span style="color: white"> Düzenle </span>
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger btn-sm waves-effect waves-light ml-5"
                        >
                          <span style="color: white; margin-right: 5px">
                            Kullanıcıyı Sil
                          </span>
                        </button>
                      </td>
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
</template>

<script>
import CustomerService from "../../service/CustomerService";
export default {
  data() {
    return {
      customers: [],
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      new CustomerService().getListAll().then((response) => {
        this.customers = response.data;
      });
    },
  },
};
</script>