<template>
  <div class="page-content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Ürün Listesi</h4>
              <p class="card-title-desc">
                Kayıt ettiğiniz ürünlerin listesidir.
              </p>

              <table
                id="datatable-buttons"
                class="table table-bordered dt-responsive nowrap w-100"
              >
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Ürün Adı</th>
                    <th>F1 Müşteri Adedi</th>
                    <th>F2 Müşteri Adedi</th>
                    <th>F3 Müşteri Adedi</th>
                    <th>İşlem</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(value, key) in products" :key="key">
                    <td>{{ value.id }}</td>
                    <td>{{ value.name }}</td>
                    <td>{{ value.price1 }}</td>
                    <td>{{ value.price2 }}</td>
                    <td>{{ value.price3 }}</td>

                    <td>
                      <button
                        class="btn btn-success btn-sm waves-effect waves-light"
                      >
                        <i class="bx bxs-pencil font-size-16 align-middle me-2">
                        </i>
                        Düzenle
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
  </div>
</template>

<script>
import ProductService from "../../service/ProductService";
export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      new ProductService().getListAll().then((response) => {
        /* console.log(response); */
        this.products = response.data;
      });
    },
  },
};
</script>