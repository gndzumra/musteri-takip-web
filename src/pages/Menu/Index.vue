<template>
  <div class="page-content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div
            class="page-title-box d-sm-flex align-items-center justify-content-between"
          >
            <h4 class="mb-sm-0 font-size-18">Müşteri Yönetim Paneliniz</h4>
            <div class="page-title-right">
              <ol class="breadcrumb m-0">
                <li class="breadcrumb-item">
                  <a href="javascript: void(0);">Anasayfa</a>
                </li>
                <li class="breadcrumb-item active">Anasayfa</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-3">
          <div class="card mini-stats-wid">
            <div class="card-body renk1">
              <div class="media">
                <div class="media-body">
                  <p class="text-muted fw-medium">Toplam Müşteri</p>
                  <h4 class="mb-0">430</h4>
                </div>
                <div
                  class="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center"
                >
                  <span class="avatar-title">
                    <i class="bx bx-copy-alt font-size-24"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card mini-stats-wid">
            <div class="card-body renk2">
              <div class="media">
                <div class="media-body">
                  <p class="text-muted fw-medium">Toplam Ürün</p>
                  <h4 class="mb-0">40</h4>
                </div>
                <div
                  class="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon"
                >
                  <span class="avatar-title rounded-circle bg-primary">
                    <i class="bx bx-archive-in font-size-24"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card mini-stats-wid">
            <div class="card-body renk3">
              <div class="media">
                <div class="media-body">
                  <p class="text-muted fw-medium">Zamanı Yaklaşan</p>
                  <h4 class="mb-0">40</h4>
                </div>
                <div
                  class="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon"
                >
                  <span class="avatar-title rounded-circle bg-primary">
                    <i class="bx bx-time-five font-size-24"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card mini-stats-wid">
            <div class="card-body renk4">
              <div class="media">
                <div class="media-body">
                  <p class="text-muted fw-medium">Borç Bakiyesi</p>
                  <h4 class="mb-0">3.000 <span>TL</span></h4>
                </div>
                <div
                  class="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon"
                >
                  <span class="avatar-title rounded-circle bg-primary">
                    <i class="bx bx-lira font-size-24"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Zamanı Yaklaşanlar</h4>

              <p class="card-title-desc">
                Son 30 gün ve daha az süresi kalan ürünlerin listesidir.
              </p>

              <table
                id="datatable-buttons"
                class="table table-bordered dt-responsive nowrap w-100"
              >
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Müşteri</th>
                    <th>Ürünler</th>
                    <th>Tarih</th>
                    <th>Fiyat</th>
                    <th>İşlem</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(customer, key) in customers" :key="key">
                    <td>{{ customer.id }}</td>
                    <td>{{ customer.name }}</td>

                    <div v-for="(product, k) in customer.products" :key="k">
                      {{ product.serviceName }} x {{ product.quantity }}
                    </div>

                    <td>{{ customer.name }}</td>

                    <td>{{ customer.balance }} <span>₺</span></td>
                    <td>
                      <button
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i class="bx bxs-show font-size-16 align-middle me-2">
                        </i>
                        Detaylar
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
</template>

<script>
import CustomerService from "../../service/CustomerService";
import ProductService from "../../service/ProductService";
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
        response.data.forEach((data) => {
          var customer = data;
          customer.products = [];

          new ProductService().getallbyid(customer.id).then((products) => {
            for (const product of products.data) {
              customer.products.push(product);
            }
          });
          this.customers.push(customer);
        });
      });
    },
  },
};
</script>

<style>
</style>
