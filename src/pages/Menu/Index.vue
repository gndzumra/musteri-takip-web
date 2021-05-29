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
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>02</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>03</td>
                    <td>Roana Ajans</td>
                    <td>com, com.tr</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>04</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>05</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>Roana Ajans</td>
                    <td>Eko Sunucu, com alan adı</td>
                    <td>10.04.2021</td>
                    <td>600 <span>₺</span></td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm waves-effect waves-light"
                      >
                        <i
                          class="bx bxs-show font-size-16 align-middle me-2"
                        ></i
                        >Detaylar
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
export default {
};
</script>

<style>
</style>
