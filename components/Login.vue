<template>
  <section class="login-section">
    <div class="login-inner">
      <div class="login-box">
        <div class="login-left">
          <div class="login-bg-text">
            <div class="left-content">
              <h1>Mpact International</h1>
              <h5>Innovating Change,</h5>
              <h5>One Perspective at a Time </h5>
            </div>
          </div>
        </div>
        <div class="login-right">
          <div class="login-form-box">
            <div class="logo">
              <a href="javascript:void(0)">
                <img src="../assets/images/logo.png">
              </a>
            </div>
            <p class="semi-bold text-gray f-18">Login</p>
            <form class="login-from">
              <div class="form-group">
                <input type="email" class="form-control" placeholder="Email ID" id="email" v-model="user.email">
              </div>
              <div class="form-group">
                <input type="password" class="form-control" placeholder="Password" id="password"
                  v-model="user.password">
              </div>
              <button type="button" class="d-block btn btn-primary" @click="validateForm"
                :disabled="user.disabled">Login</button>
              <p class="forget-link text-center mt-3"> <a v-b-modal.forgot-pass-modal class="text-red">Forgot
                  Password?</a></p>
              <div class="account-box-link text-gray">
                Don't have account? <span>
                  <router-link class="text-blue bold" to="/">Subscribe Now</router-link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <b-modal id="forgot-pass-modal" title="Forgot Password" :hide-footer=hideFooter>
      <div class="form-group">
        <label>Email <span class="err">*</span></label>
        <input type="email" class="form-control" id="forgot-email" aria-describedby="emailHelp" placeholder="Email"
          v-model="forgotPass.email">
      </div>
      <button type="button" class="btn btn-primary" @click="sendEmail" :disabled="forgotPass.disabled">Send
        Email</button>
    </b-modal>
  </section>
</template>

<script>
import Api from '../router/api'
/* eslint-disable */
export default {
  name: 'Login',
  data() {
    return {
      hideFooter: true,
      msg: 'Login',
      user: {
        'email': '',
        'password': '',
        'disabled': false,
      },
      forgotPass: {
        'email': '',
        'disabled': false,
      }
    }
  },
  methods: {
    validateForm: function (e) {
      e.preventDefault();
      let that = this;
      if (!that.user.email || !that.user.password) {
        this.$swal({
          icon: "error",
          title: "error",
          text: "Please fill all required fields",
          showConfirmButton: true
        });
      } else {
        that.user.disabled = true;
        Api.login(that.user).then(response => {
          that.user.disabled = false;
          if (response.data.company) {
            if (response.data.company.role == 'COMPANY_ADMIN' && response.data.company.payment_status) {
              window.localStorage.setItem('token', response.data.access_token)
              window.localStorage.setItem('userData', JSON.stringify(response.data.user))
              window.localStorage.setItem('companyData', JSON.stringify(response.data.company))
              window.location = '/employer/dashboard'
            } else if (response.data.company.role == 'COMPANY_ADMIN' && !response.data.company.payment_status) {
              window.location = '/checkout/' + response.data.company.employee_registration_link
            } else {
              window.localStorage.setItem('token', response.data.access_token)
              window.localStorage.setItem('userData', JSON.stringify(response.data.user))
              window.localStorage.setItem('companyData', JSON.stringify(response.data.company))
              window.location = '/employee/dashboard'
            }
          } else {
            window.localStorage.setItem('token', response.data.access_token)
            window.localStorage.setItem('userData', JSON.stringify(response.data.user))
            window.location = '/admin/dashboard'
          }
        }
          // if (response.data.user.last_login) {
          //   window.location = '/employer/welcome-note'
          // }else{
          // }

        ).catch((error) => {
          that.user.disabled = false;
          this.$swal({
            icon: "error",
            title: "error",
            text: error.response.data.message,
            showConfirmButton: true
          });
        });
      }
    },
    sendEmail: function () {
      let that = this;
      if (!that.forgotPass.email) {
        this.$swal({
          icon: "error",
          title: "error",
          text: "Please Enter Email",
          showConfirmButton: true
        });
      } else {
        that.forgotPass.disabled = true;
        Api.forgotPasswordSendEmail(that.forgotPass).then(response => {
          that.forgotPass.disabled = false;
          that.forgotPass.email = '';
          this.$swal({
            icon: "success",
            title: "success",
            text: "Email sent successfully",
            showConfirmButton: true
          }).then(() => {
            that.$bvModal.hide('forgot-pass-modal')
          });
        }
        ).catch((error) => {
          that.forgotPass.disabled = false;
          this.$swal({
            icon: "error",
            title: "error",
            text: error.response.data.message,
            showConfirmButton: true
          });
        });
      }

    }
  },
  mounted() {
    if (this.isLoggedIn) {
      if (this.user.role == "COMPANY") {
        this.$router.push('/employer/dashbaord')
      } else if (this.user.role == "COMPANY_EMP") {
        this.$router.push('/employee/dashbaord')
      } else {
        this.$router.push('/admin/dashbaord')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-group {
  margin-bottom: 1rem;
}

.err {
  color: red;
}
</style>
