<template>
  <div>
    <head>
      <meta charset="utf-8" />
      <title>Roana Ajans - Yönetim Paneli</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        content="Roana Ajans Yönetim Paneli Giriş Ekranı"
        name="description"
      />
      <meta content="Roana Ajans" name="author" />

      <link rel="shortcut icon" href="assets/images/favicon.ico" />
      <link
        href="assets/css/bootstrap.min.css"
        id="bootstrap-style"
        rel="stylesheet"
        type="text/css"
      />
      <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
      <link
        href="assets/css/app.min.css"
        id="app-style"
        rel="stylesheet"
        type="text/css"
      />
    </head>
    <body>
      <div class="account-pages my-5 pt-sm-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 col-xl-5">
              <div class="card overflow-hidden">
                <div class="bg-primary bg-soft">
                  <div class="row">
                    <div class="col-7">
                      <div class="text-primary p-4">
                        <h5 class="text-primary">HOŞ GELDİNİZ!</h5>
                        <p>Lütfen size verilen bilgiler ile giriş yapınız.</p>
                      </div>
                    </div>
                    <div class="col-5 align-self-end"></div>
                  </div>
                </div>
                <div class="card-body pt-0">
                  <div class="auth-logo">
                    <a href="#" class="auth-logo-light">
                      <div class="avatar-md profile-user-wid mb-4">
                        <span class="avatar-title rounded-circle bg-light">
                          <img
                            src="assets/images/logo-light.svg"
                            alt=""
                            class="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </a>

                    <a href="#" class="auth-logo-dark">
                      <div class="avatar-md profile-user-wid mb-4">
                        <span class="avatar-title rounded-circle bg-light">
                          <img
                            src="assets/images/logo.svg"
                            alt=""
                            class="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div class="p-2">
                    <form class="form-horizontal" action="index.php">
                      <div class="mb-3">
                        <input
                          v-model="loginModel.username"
                          type="text"
                          class="form-control"
                          id="username"
                          placeholder="Kullanıcı Adı"
                        />
                      </div>

                      <div class="mb-3">
                        <div class="input-group auth-pass-inputgroup">
                          <input
                            v-model="loginModel.password"
                            type="password"
                            class="form-control"
                            placeholder="Şifre"
                            aria-label="Password"
                            aria-describedby="password-addon"
                          />
                          <button class="btn btn-light" id="password-addon">
                            <i class="mdi mdi-eye-outline"></i>
                          </button>
                        </div>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="remember-check"
                        />
                        <label class="form-check-label" for="remember-check">
                          Beni hatırla
                        </label>
                      </div>

                      <div class="mt-3 d-grid">
                        <button
                          @click.prevent="login()"
                          class="btn btn-primary waves-effect waves-light"
                          type="submit"
                        >
                          Giriş Yap
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="mt-5 text-center">
                <div>
                  <p>
                    ©
                    {{ date }}
                    Roana Ajans® Yönetim Paneli Versiyon 1.0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>


<script>
import AuthenticateService from "../../service/AuthenticateService";
/* 
import MessageBox from "../../helpers/components/MessageBox";
import axios from "axios";
 */
export default {
  data() {
    return {
      date: new Date().getFullYear(),
      loginModel: {},
    };
  },
  methods: {
    async login() {
      await new AuthenticateService()
        .login(this.loginModel)
        .then((response) => {
          let token = response.data;
          localStorage.setItem("token", token);
          if (token) {
            this.$router.push("/");
          }
        });
    },
  },
};
</script>