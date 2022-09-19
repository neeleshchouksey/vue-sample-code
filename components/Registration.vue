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
                <img  :src="companyData.company_logo">
              </a>
            </div>
            <p class="semi-bold text-gray f-18">Register Here</p>
            <form class="login-from">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" class="form-control" id="firstname" placeholder="First Name"
                      v-model="employee.firstname" @keypress="alphabetsOnly">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" class="form-control" id="lastname" placeholder="Last Name"
                      v-model="employee.lastname" @keypress="alphabetsOnly">
                  </div>
                </div>
              </div>
              <div class="form-group">
                <input type="email" class="form-control" placeholder="Email ID" id="email" aria-describedby="emailHelp"
                  v-model="employee.email">
              </div>
              <div class="form-group">
                <input type="password" class="form-control" id="password" placeholder="Create Password"
                  v-model="employee.password">
              </div>
               <div class="form-group">
               <select class="form-control" id="profileType" v-model="employee.profileType">
               <option value="">Select Profile Type</option>
               <option v-for="pt in profileType" :value="pt.id" v-bind:key="pt.id">{{pt.profile_type}}</option>
               </select>
              </div>
              <!-- <p class="term-condition"><label class="custom-container text-gray">Terms and Conditons Here.
                  <input type="checkbox">
                  <span class="custom-checkmark"></span>
                </label>
              </p> -->
              <button class="d-block btn btn-primary" type="button" @click="validateForm"
                :disabled="employee.disabled">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Api from '../router/api'
/* eslint-disable */
import AppMixin from '../mixins/AppMixin'

export default {
  name: 'Registration',
  data() {
    return {
      msg: 'Employee Registration',
      employee: {
        'link': '',
        'firstname': '',
        'lastname': '',
        'email': '',
        'password': '',
        'profileType':'',
        'disabled': false,
      },
   
    }
  },
  mixins: [AppMixin],
  methods: {
    validateForm: function (e) {
      e.preventDefault();
      let that = this;
      if (!that.employee.firstname || !that.employee.lastname || !that.employee.email || !that.employee.password || !that.employee.profileType) {
        this.$swal({
          icon: "error",
          title: "error",
          text: "Please fill all required fields",
          showConfirmButton: true
        });
      } else {
        that.employee.disabled = true;
        that.employee.link = this.$route.params.link;
        Api.registration(that.employee).then(response => {
          that.employee.disabled = false;
          this.$swal({
            icon: "success",
            title: "Success",
            text: "Company employee created successfully",
            showConfirmButton: true
          }).then(function () {
            that.employee.disabled = false;
            that.$router.push('/login');
          });

        }
        ).catch((error) => {
          this.$swal({
            icon: "error",
            title: "error",
            text: error.response.data.message,
            showConfirmButton: true
          }).then(function () {
            that.employee.disabled = false;
          });
        });
      }
    },

  },
  beforeMount() {
    console.log(this.$route.params.link);
    let link = this.$route.params.link;
    this.getCompanyDetails(link);
    this.getProfileTypeList()
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
