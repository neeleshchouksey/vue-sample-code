<template>
  <div class="mt-3">
    <div class="row align-items-center">
      <div class="col-lg-3  col-md-6 my-2">
        <select v-model="getTodoData.sortBy" class="form-control" v-on:change="getTodoList">
          <option value="">Sort By</option>
          <option value="title">Title</option>
        </select>
      </div>
      <div class="col-lg-6  col-md-6 my-2 d-flex align-items-center">
        <input type="text" v-model="getTodoData.keyword" class="form-control search m-0" placeholder="Search"
               v-on:keyup="getTodoList"/><span class="search-icon"></span><a href="javascript:void(0)"
                                                                             v-on:click="getTodoData.keyword = ''; getTodoList()"
                                                                             class="link px-2 mb-3">clear</a>
      </div>
      <!--  <div class="col-md-3 my-2">
      </div> -->
      <div class="col-lg-3 col-md-12 my-2 d-flex" v-if="user.role == 'ADMIN'">
        <button class="btn btn-primary float-right ml-auto" v-b-modal.add-todo-modal>Add New Todo</button>
      </div>
    </div>
    <div class="row mt-3">
      <div class="table-responsive">
        <table class="table">
          <tr>
            <th v-if="user.role == 'ADMIN'">Company Name</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          <tr v-if="todosLength" v-for="r in todos.data" v-bind:key="r.id">
            <td v-if="user.role == 'ADMIN'">
                           <span>{{ r.company.map(({company_name}) => company_name).join(',') }}
            </span>
            </td>
            <td>{{ r.title }}</td>
            <td>{{ r.description }}</td>
            <td><small class="pink-color">{{ r.status }}</small></td>
            <td>
              <div class="d-flex align-items-center p-0" style="min-width: 100px;">
                <a type="button" class="mx-3 d-block" width="24" v-if="user.role == 'ADMIN'"
                   @click="getTodo(r.id)">
                  <img src="../../../assets/images/table-edit.svg" alt="table-edit" width="24"
                       height="24"/>
                </a>
                <a type="button" class="mx-3 d-block" width="24" v-if="user.role == 'ADMIN'"
                   @click="deleteTodo(r.id)">
                  <img src="../../../assets/images/table-delete.svg" alt="table-delete" width="24"
                       height="24"/>
                </a>
                <a type="button" class="mx-3 d-block" width="24"
                   v-if="user.role != 'ADMIN' && r.status == 'NEW' && company.role == 'COMPANY_ADMIN'"
                   @click="completeTodo(r.id)">
                  <img src="../../../assets/images/check-box.svg" alt="table-check-box" width="24"
                       height="24"/>
                </a>
                <router-link v-if="user.role != 'ADMIN' && company.role == 'COMPANY_ADMIN'" class="mx-3 d-block"
                             :to="'/employer/todo/' + r.id">
                  <img src="../../../assets/images/table-eye.svg" alt="table-eye" width="24"
                       height="24"/>
                </router-link>
                <router-link v-if="user.role != 'ADMIN' && company.role == 'COMPANY_EMP'" class="mx-3 d-block"
                             :to="'/employee/todo/' + r.id">
                  <img src="../../../assets/images/table-eye.svg" alt="table-eye" width="24"
                       height="24"/>
                </router-link>
              </div>

              <!-- <button v-if="user.role == 'ADMIN'"  @click="getTodo(r.id)"><i
                  class="fa fa-pencil"></i></button>
          <button v-if="user.role == 'ADMIN'"  @click="deleteTodo(r.id)"><i
                  class="fa fa-trash"></i></button>
          <button v-if="user.role != 'ADMIN' && r.status == 'NEW' && company.role == 'COMPANY_ADMIN'" @click="completeTodo(r.id)"><i class="fa fa-check mt-2 pink-color"></i></button>
          <router-link v-if="user.role != 'ADMIN' && company.role == 'COMPANY_ADMIN'" class=""
              :to="'/employer/todo/' + r.id"><i class="fa fa-eye mt-2 pink-color"></i></router-link>
          <router-link v-if="user.role != 'ADMIN' && company.role == 'COMPANY_EMP'" class=""
              :to="'/employee/todo/' + r.id"><i class="fa fa-eye mt-2 pink-color"></i></router-link> -->
            </td>
          </tr>
          <tr v-if="!todosLength">
            <td colspan="5">No Data Found</td>
          </tr>
        </table>
      </div>
      <pagination :data="todos" @pagination-change-page="getTodoList"/>
    </div>
    <!--Add resource modal popup-->
    <Add :getTodoList="getTodoList"></Add>
    <!--Update resource modal popup-->
    <Edit :getTodoList="getTodoList" :todoUpdate="todoUpdate"></Edit>
  </div>
</template>
<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'
import Add from '../todo/Add.vue'
import Edit from '../todo/Edit.vue'

export default {
  name: 'List',
  mixins: [AppMixin],
  components: {Add, Edit},
  data () {
    return {
      todos: {},
      getTodoData: {
        sortBy: '',
        keyword: ''
      },
      todosLength: ''
    }
  },
  methods: {
    deleteTodo: function (id) {
      let that = this
      this.$swal({
        title: 'Are you sure?',
        text: 'All the related info will be deleted, you wont be able to revert !',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes Delete it!',
        cancelButtonText: 'No, Keep it!',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((result) => {
        if (result.value) {
          Api.deleteTodo(id).then(response => {
            this.$swal({
              icon: 'success',
              title: 'Success',
              text: 'Todo deleted successfully',
              showConfirmButton: true
            }).then(function () {
              that.getTodoList()
            })
          }).catch((error) => {
            this.$swal({
              icon: 'error',
              title: 'error',
              text: error.response.data.message,
              showConfirmButton: true
            }).then(function () {
              that.todo.disabled = false
            })
          })
        }
      })
    },
    completeTodo: function (id) {
      let that = this
      this.$swal({
        title: 'Are you sure?',
        text: 'Ypou want to mark this todo as complete!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((result) => {
        if (result.value) {
          Api.completeTodo(id).then(response => {
            this.$swal({
              icon: 'success',
              title: 'Success',
              text: 'Todo completed successfully',
              showConfirmButton: true
            }).then(function () {
              that.getTodoList()
            })
          }).catch((error) => {
            this.$swal({
              icon: 'error',
              title: 'error',
              text: error.response.data.message,
              showConfirmButton: true
            }).then(function () {
              that.todo.disabled = false
            })
          })
        }
      })
    },
    getTodoList: function (page = 1) {
      let that = this
      Api.getTodoList(that.getTodoData, page).then(response => {
        that.todos = response.data.res
        that.todosLength = that.todos.data.length
      }).catch((error) => {
        this.$swal({
          icon: 'error',
          title: 'error',
          text: error.response.data.message,
          showConfirmButton: true
        }).then(function () {
          that.todo.disabled = false
        })
      })
    },
  },
  mounted () {
    this.getTodoList()
  }
}
</script>
