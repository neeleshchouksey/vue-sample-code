<template>
    <b-modal id="update-todo-modal" size="lg" title="Update Todo" :hide-footer=hideFooter no-fade no-enforce-focus>
        <form>
            <div class="form-group">
                <label>Select Company <span class="err">*</span></label>
                <multiselect v-model="todoUpdate.company" :options="companiesListMultiselect" group-values="values"
                    group-label="selectAll" :multiple="true" :group-select="true" placeholder="Type to search"
                    track-by="name" label="name">
                    <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
                </multiselect>
            </div>
            <div class="form-group">
                <label>Title <span class="err">*</span></label>
                <input class="form-control" type="text" v-model="todoUpdate.title" placeholder="Title" />
            </div>
            <div class="form-group">
                <label>Description <span class="err">*</span></label>
                <textarea class="form-control" v-model="todoUpdate.description" placeholder="Description">
                </textarea>
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-primary" @click="updateTodo"
                    :disabled="todoUpdate.disabled">Submit</button>
            </div>
        </form>
    </b-modal>
</template>
<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'
import { Vue2TinymceEditor } from "vue2-tinymce-editor";

export default {
    name: 'Edit',
    mixins: [AppMixin],
    props: [
        'getTodoList',
        'todoUpdate'
    ],
    data() {
        return {
            hideFooter: true,
        }
    },
    methods: {
        updateTodo: function () {
            let that = this;
            if (!that.todoUpdate.description || !that.todoUpdate.company || !that.todoUpdate.title) {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: "Please fill all required fields",
                    showConfirmButton: true
                });
            } else {
                that.todoUpdate.disabled = true
                Api.updateTodo(that.todoUpdate).then(response => {
                    that.todoUpdate.disabled = false;
                    this.$swal({
                        icon: "success",
                        title: "Success",
                        text: "Todo updated successfully",
                        showConfirmButton: true
                    }).then(function () {
                        that.todoUpdate.disabled = false
                        that.$bvModal.hide('update-todo-modal')
                        that.getTodoList()
                    });
                }).catch((error) => {
                    this.$swal({
                        icon: "error",
                        title: "error",
                        text: error.response.data.message,
                        showConfirmButton: true
                    }).then(function () {
                        that.todoUpdate.disabled = false;
                    });
                });
            }
        },
    },
    mounted() {
        this.getCompaniesListMultiselect()
    }
}
</script>
