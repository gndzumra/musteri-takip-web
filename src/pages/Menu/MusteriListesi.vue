<template>
  <div class="page-content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Müşteri Listesi</h4>
              <p class="card-title-desc">
                Kayıt ettiğiniz müşterilerinizin listesidir.
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
                    <th>Fiyatlandırma Tipi</th>
                    <th>GSM</th>
                    <th>Borç Bakiyesi</th>
                    <th>İşlem</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(value, key) in customers" :key="key">
                    <td>{{ customers.Id }}</td>
                    <td>{{ customers.name }}</td>
                    <td>{{ customers.product }}</td>
                    <td>{{ customers.pricing }}</td>
                    <td>{{ customers.mobilePhone }}</td>
                    <td>{{ customers.balance }} <span> ₺</span></td>
                    <td>
                      <button
                        @click="edit()"
                        type="button"
                        class="btn btn-success btn-sm waves-effect waves-light"
                      >
                        <i class="bx bxs-pencil font-size-16 align-middle me-2">
                        </i>
                        Düzenle
                      </button>
                      <button
                        @click="collectionAdd()"
                        type="button"
                        class="btn btn-danger btn-sm waves-effect waves-light"
                      >
                        <i class="bx bx-lira font-size-16 align-middle me-2">
                        </i>
                        Tahsilat Ekle
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
import CustomerService from "../../service/CustomerService";
export default {
  data() {
    return {
      customers: [],
    };
  },
  methods: {
    async initialize() {
      await new CustomerService().getListAll().then((response) => {
        this.customers = response.list;
      });
    },
    edit() {},
    collectionAdd() {},
  },
};
</script>