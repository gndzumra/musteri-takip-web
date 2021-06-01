<template>
  <v-container style="">
    <v-card
      class="pa-10 pt-5"
      elevation="5"
      style="justify-content: center; align-items: center"
    >
      <a @click="close(false)"> <v-icon style="float: right"></v-icon></a>
      <h2 class="text-md-center">editProduct</h2>
      <hr class="mb-5" width="750" />

      <v-form style="justify-content: center; align-items: center">
        <v-row>
          <v-col cols="5">
            <v-text-field
              class="field"
              label="Firma Adı"
              required
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="5">
            <v-select outlined dense label="Fiyatlandırma Tipi"> </v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="5">
            <v-select outlined dense label="Sektör"> </v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="5">
            <v-text-field
              class="field"
              label="Yetkili Kişi"
              required
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="5">
            <v-text-field
              class="field"
              label="1. E-Posta"
              required
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="5">
            <v-text-field
              class="field"
              label="2. E-Posta"
              required
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="5">
            <v-text-field
              class="field"
              label="GSM"
              required
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="5">
            <v-select outlined dense label="Fatura Durumu"> </v-select>
          </v-col>
        </v-row>

        <h3 class="text-md-center">Fatura Bilgileri</h3>
        <hr class="mb-5" width="750" />

        <v-row>
          <v-col cols="5">
            <v-text-field
              class="field"
              label="Firma Adı ve Ünvanı"
              required
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="5">
            <v-text-field
              class="field"
              label="Adres"
              required
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="5">
            <v-text-field
              class="field"
              label="Vergi Dairesi"
              required
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="5">
            <v-text-field
              class="field"
              label="Vergi Numarası"
              required
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <hr class="mb-6 mt-6" width="750" />

        <v-btn
          @click="customerEdit"
          color="primary"
          dark
          class="v-btn--block v-size--large mb-2"
        >
          update
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "CustomerEdit",
  data() {
    return {
      customers: [],
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    async initialize() {},
    customerEdit() {},
  },
};
</script>