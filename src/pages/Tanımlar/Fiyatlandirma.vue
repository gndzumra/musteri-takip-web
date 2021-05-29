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
                    <tr data-id="1">
                      <td style="width: 80px">1</td>
                      <td>Eko Cloud Hosting</td>
                      <td data-field="f1fiyat">200</td>
                      <td class="lira"><i class="bx bx-lira"></i></td>
                      <td data-field="f2fiyat">250</td>
                      <td class="lira"><i class="bx bx-lira"></i></td>
                      <td data-field="f3fiyat">300</td>
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

                    <tr data-id="1">
                      <td style="width: 80px">1</td>
                      <td>Eko Cloud Hosting</td>
                      <td data-field="f1fiyat">200</td>
                      <td class="lira"><i class="bx bx-lira"></i></td>
                      <td data-field="f2fiyat">250</td>
                      <td class="lira"><i class="bx bx-lira"></i></td>
                      <td data-field="f3fiyat">300</td>
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

                    <tr data-id="1">
                      <td style="width: 80px">1</td>
                      <td>Eko Cloud Hosting</td>
                      <td data-field="f1fiyat">200</td>
                      <td class="lira"><i class="bx bx-lira"></i></td>
                      <td data-field="f2fiyat">250</td>
                      <td class="lira"><i class="bx bx-lira"></i></td>
                      <td data-field="f3fiyat">300</td>
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
                    <tr data-id="1">
                      <td style="width: 80px">1</td>
                      <td>F1</td>
                      <td>%</td>
                      <td data-field="f1fiyat">10</td>
                      <td style="width: 100px">
                        <a
                          class="btn btn-outline-secondary btn-sm edit"
                          title="Düzenle"
                        >
                          <i class="fas fa-pencil-alt"></i>
                        </a>
                      </td>
                    </tr>
                    <tr data-id="1">
                      <td style="width: 80px">2</td>
                      <td>F2</td>
                      <td>%</td>
                      <td data-field="f1fiyat">7</td>
                      <td style="width: 100px">
                        <a
                          class="btn btn-outline-secondary btn-sm edit"
                          title="Düzenle"
                        >
                          <i class="fas fa-pencil-alt"></i>
                        </a>
                      </td>
                    </tr>
                    <tr data-id="1">
                      <td style="width: 80px">3</td>
                      <td>F3</td>
                      <td>%</td>
                      <td data-field="f1fiyat">4</td>
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