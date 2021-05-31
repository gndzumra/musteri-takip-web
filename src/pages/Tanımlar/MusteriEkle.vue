<template>
  <div id="app">
    <v-app id="inspire">
      <div class="container-fluid">
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
        <v-form>
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
                    <label
                      for="example-text-input"
                      class="col-md-2 col-form-label"
                    >
                      Firma Adı
                    </label>
                    <div class="col-md-10">
                      <input
                        class="form-control"
                        type="text"
                        v-model="customer.companyName"
                        id="example-text-input"
                      />
                    </div>
                  </div>

                  <div class="mb-3 row">
                    <label class="col-md-2 col-form-label mt-3">
                      Fiyatlandırma Tipi
                    </label>
                    <div class="col-md-10 d-flex">
                      <v-select
                        v-model="selectedPricingType"
                        :items="pricingType"
                        item-text="value"
                        item-value="value"
                        label="Seçiniz"
                        outlined
                        dense
                      >
                      </v-select>
                    </div>
                  </div>

                  <div class="mb-3 row">
                    <label class="col-md-2 col-form-label">Sektör</label>
                    <div class="col-md-10">
                      <v-select
                        :items="sector"
                        v-model="selectedSector"
                        item-value="value"
                        item-text="value"
                        label="Seçiniz"
                        outlined
                        dense
                      >
                      </v-select>
                    </div>
                  </div>

                  <div class="mb-3 row">
                    <label
                      for="example-text-input"
                      class="col-md-2 col-form-label"
                    >
                      Yetkili Kişi
                    </label>
                    <div class="col-md-10">
                      <input
                        class="form-control"
                        type="text"
                        v-model="customer.authPerson"
                        id="example-text-input"
                      />
                    </div>
                  </div>

                  <div class="mb-3 row">
                    <label
                      for="example-email-input"
                      class="col-md-2 col-form-label"
                      >1. E-Posta</label
                    >
                    <div class="col-md-10">
                      <input
                        id="input-email"
                        class="form-control input-mask"
                        data-inputmask="'alias': 'email'"
                        v-model="customer.eposta1"
                      />
                    </div>
                  </div>

                  <div class="mb-3 row">
                    <label
                      for="example-email-input"
                      class="col-md-2 col-form-label"
                      >2. E-Posta</label
                    >
                    <div class="col-md-10">
                      <input
                        id="input-email"
                        class="form-control input-mask"
                        data-inputmask="'alias': 'email'"
                        v-model="customer.eposta2"
                      />
                    </div>
                  </div>

                  <div class="mb-3 row">
                    <label
                      for="example-tel-input"
                      class="col-md-2 col-form-label"
                    >
                      Sabit Telefon
                    </label>
                    <div class="col-md-10">
                      <input
                        id="input-mask example-tel-input"
                        class="form-control input-mask"
                        type="tel"
                        v-model="customer.phone"
                        data-inputmask="'mask': '999-9999999'"
                      />
                    </div>
                  </div>

                  <div class="mb-3 row">
                    <label
                      for="example-tel-input"
                      class="col-md-2 col-form-label"
                      >GSM</label
                    >
                    <div class="col-md-10">
                      <input
                        id="input-mask example-tel-input"
                        class="form-control input-mask"
                        type="tel"
                        v-model="customer.mobilePhone"
                        data-inputmask="'mask': '999-9999999'"
                      />
                    </div>
                  </div>

                  <div class="mb-3 row">
                    <label class="col-md-2 col-form-label mt-3">
                      Fatura Durumu
                    </label>
                    <div class="col-md-10">
                      <v-select :items="invoiceStatus" outlined dense>
                      </v-select>
                    </div>
                  </div>

                  <h4 class="card-title">Fatura Bilgileri</h4>
                  <p class="card-title-desc">
                    Lütfen aşağıda istenen tüm bilgileri
                    <code>eksiksiz ve doğru </code>giriniz.
                  </p>

                  <div class="mb-3 row">
                    <label
                      for="example-text-input"
                      class="col-md-2 col-form-label"
                      >Firma Adı ve Ünvanı</label
                    >
                    <div class="col-md-10">
                      <input
                        class="form-control"
                        type="text"
                        v-model="customer.invoiceInfo"
                        id="example-text-input"
                      />
                    </div>
                  </div>

                  <div class="mb-3 row">
                    <label
                      for="example-text-input"
                      class="col-md-2 col-form-label"
                      >Adres</label
                    >
                    <div class="col-md-10">
                      <input
                        class="form-control"
                        type="text"
                        v-model="customer.address"
                        id="example-text-input"
                      />
                    </div>
                  </div>

                  <div class="mb-3 row">
                    <label
                      for="example-text-input"
                      class="col-md-2 col-form-label"
                      >Vergi Dairesi</label
                    >
                    <div class="col-md-10">
                      <input
                        class="form-control"
                        type="text"
                        v-model="customer.taxAdm"
                        id="example-text-input"
                      />
                    </div>
                  </div>

                  <div class="mb-3 row">
                    <label
                      for="example-text-input"
                      class="col-md-2 col-form-label"
                      >Vergi Numarası</label
                    >
                    <div class="col-md-10">
                      <input
                        class="form-control"
                        type="text"
                        v-model="customer.taxNumber"
                        id="example-text-input"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Müşteriye Ürün Ekle -->
            <div class="col-6">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Müşteriye Ürün Ekle</h4>
                  <p class="card-title-desc">
                    Müşterinize mevcut ürünlerinizden satış yapabilirsiniz.
                  </p>

                  <div data-repeater-list="group-a">
                    <div data-repeater-item class="row">
                      <div class="mb-3 row mt-2">
                        <label class="col-md-2 col-form-label mt-3">Ürün</label>
                        <div class="col-md-8">
                          <v-select
                            :items="newProduct"
                            item-value="value"
                            item-text="value"
                            multiple
                            v-model="selectedNewProduct"
                            outlined
                            dense
                          ></v-select>
                        </div>

                        <div class="col-md-2 align-self-center">
                          <div class="d-grid mb-8">
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
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <div class="d-grid gap-2">
                    <button
                      type="button"
                      class="btn btn-primary btn-lg waves-effect waves-light"
                      @click.prevent="createCustomer()"
                    >
                      Müşteriyi Kaydet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-form>
      </div>
    </v-app>
  </div>
</template>


<script>
import CustomerService from "../../service/CustomerService";
/* import MessageBox from "../../helpers/components/MessageBox";
 */ export default {
  data() {
    return {
      customer: {},
      companyName: "",
      pricingType: [
        { value: "F1" },
        { value: "F2" },
        { value: "F3" },
        { value: "F4" },
      ],
      selectedPricingType: null,
      selectedNewProduct: null,
      sector: [
        { value: "Teknoji" },
        { value: "Sağlık" },
        { value: "Gıda" },
        { value: "Reklam" },
        { value: "Otomotiv" },
        { value: "Sanayi" },
        { value: "Eğitim" },
        { value: "Diğer" },
      ],
      selectedSector: null,
      authPerson: "",
      eposta1: "",
      eposta2: "",
      phone: "",
      mobilePhone: "",
      invoiceStatus: ["Faturali", "Faturasiz"],
      invoiceInfo: {
        companyName: "",
        companyTitle: "",
        address: "",
        TaxAdm: "",
        taxNumber: "",
      },
      newProduct: [
        { value: "Eko Cloud Hosting" },
        { value: "Standart Cloud Hosting" },
        { value: "Pro Cloud Hosting" },
        { value: "Com" },
        { value: "Com.tr" },
        { value: "Net" },
        { value: "Org" },
      ],
    };
  },
  methods: {
    initialize() {},
    createCustomer() {
      let formData = new FormData();
      for (let [key, value] of Object.entries(this.customer)) {
        formData.append(`${key}`, `${value}`);
      }
      new CustomerService.create(formData);
    },
  },
};
</script>