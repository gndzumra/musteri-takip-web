<template>
  <div class="page-content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-8">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Ürün Fiyatlandırması</h4>
              <p class="card-title-desc">
                Ürünlerinizin fiyatlarını bu alandan müşteri kategorilendirerek
                yapabilirsiniz.
              </p>

              <div class="table-responsive">
                <table
                  class="table table-editable table-nowrap align-middle table-edits"
                >
                  <thead>
                    <tr>
                      <th>S.NO</th>
                      <th>Ürün Adı</th>
                      <th width="30">F1</th>
                      <th></th>
                      <th width="30">F2</th>
                      <th></th>
                      <th width="30">F3</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr data-id="1" v-for="(value, key) in products" :key="key">
                      <td style="width: 80px">{{ value.id }}</td>
                      <td>{{ value.name }}</td>
                      <td data-field="f1fiyat">{{ value.price1 }}</td>
                      <td class="lira"><i class="bx bx-lira"></i></td>
                      <td data-field="f2fiyat">{{ value.price2 }}</td>
                      <td class="lira"><i class="bx bx-lira"></i></td>
                      <td data-field="f3fiyat">{{ value.price3 }}</td>
                      <td class="lira"><i class="bx bx-lira"></i></td>
                      <td style="width: 100px">
                        <a
                          class="btn btn-outline-secondary btn-sm edit"
                          title="Düzenle"
                        >
                          <i class="fas fa-pencil-alt"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->

        <div class="col-4">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Ürünlerin Yıllık Zam Oranları</h4>
              <p class="card-title-desc">
                Müşteri tiplerine bu alandan yıllık zam oranını
                belirtebilirsiniz.
              </p>

              <div class="table-responsive">
                <table
                  class="table table-editable table-nowrap align-middle table-edits"
                >
                  <thead>
                    <tr>
                      <th>S.NO</th>
                      <th>Müşteri Tipi</th>
                      <th>%</th>
                      <th>Zam Oranı (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      data-id="1"
                      v-for="(value, key) in customerTypes"
                      :key="key"
                    >
                      <td style="width: 80px">1</td>
                      <td>{{ value.type }}</td>
                      <td>%</td>
                      <td data-field="f1fiyat">{{ value.raiseRate }}</td>
                      <td style="width: 100px">
                        <a
                          class="btn btn-outline-secondary btn-sm edit"
                          title="Düzenle"
                        >
                          <i class="fas fa-pencil-alt"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
import CustomerTypeService from "../../service/CustomerTypeService";
export default {
  data() {
    return {
      products: [],
      customerTypes: [],
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      new ProductService().getListAll().then((response) => {
        this.products = response.data;
      });
      new CustomerTypeService().getListAll().then((response) => {
        this.customerTypes = response.data;
      });
    },
  },
};
</script>