<template>
  <div id="app">
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
                      <td>{{ value.id }}</td>
                      <td>{{ value.name }}</td>

                      <td>{{ value.products }}</td>
                      <td>{{ value.type }}</td>

                      <td>{{ value.mobilePhone }}</td>
                      <td>{{ value.balance }} <span> ₺</span></td>
                      <td>
                        <button
                          @click="edit(customers.Id)"
                          type="button"
                          class="btn btn-success btn-sm waves-effect waves-light"
                        >
                          <i
                            class="bx bxs-pencil font-size-16 align-middle me-2"
                          >
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
                <!--  <button
                  @click="showEdit()"
                  large
                  type="button"
                  class="btn btn-success btn-sm waves-effect waves-light"
                >
                  edit
                </button> -->
              </div>
              <!-- {{ customers }} -->
              {{ deneme }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-dialog
      v-model="dialogEnable"
      :max-width="dialogWidth"
      persistent
      :key="dialogKey"
    >
      <component
        :is="selectedComponent"
        v-bind="componentProps"
        @closed="closeDialog"
      ></component>
    </v-dialog>
  </div>
</template>


<script>
import MessageBox from "../../helpers/components/MessageBox";
import CustomerService from "../../service/CustomerService";
import CustomerTypeService from "../../service/CustomerTypeService";
import ProductService from "../../service/ProductService";
import CustomerEdit from "./components/CustomerEdit";
export default {
  data() {
    return {
      customers: [],
      customerProduct: [],
      deneme: null,
      signalModel: {
        changes: false,
        returnValues: undefined,
      },

      dialogEnable: true,
      dialogKey: 0,
      dialogWidth: null,
      selectedComponent: CustomerEdit,
      componentProps: null,
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    async initialize() {
      await new CustomerService().getListAll().then((response) => {
        this.customers = response.data;
        this.customers.forEach((customer) => {
          new CustomerTypeService()
            .getById(customer.customerTypeId)
            .then((customerType) => {
              customer.type = customerType.data.type;
              //this.deneme = customer;
            });
        });
      });
      this.customers.forEach((element) => {
        new ProductService().getallbyid(element.id).then((x) => {
          x.data.forEach((a) => {
            this.deneme = a;
            element.products = a.serviceName;
          });
        });
      });
    },
    edit(customerId) {
      new CustomerService().edit(customerId).then((response) => {
        this.customers = response.data;
      });
    },
    collectionAdd() {},

    showEdit() {
      this.selectedComponent = CustomerEdit;
      //this.componentProps = { customerIdProp: customer.id };

      this.openDialog(650);
    },
    openDialog(width = 600) {
      this.dialogEnable = true;
      this.dialogWidth = width;
    },
    closeDialog(signalModel) {
      const changes = signalModel.changes;
      const returnValues = signalModel.returnValues;
      if (changes) {
        this.setReturnValues(returnValues);
        this.initialize();
      }
      if (this.selectedComponent === MessageBox) {
        if (changes) this.deleteProduct(this.selectedProduct);
      }

      this.dialogEnable = false;
      this.dialogKey += 1;
    },
    setReturnValues(values) {
      return values;
    },
  },
};
</script>