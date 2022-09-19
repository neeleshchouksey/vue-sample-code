<template>
    <b-modal id="add-todo-modal" size="lg" title="Add New Todo" :hide-footer=hideFooter no-fade no-enforce-focus>
        <form>
            <div class="form-group">
                <label>Select Company <span class="err">*</span></label>
                <multiselect v-model="todo.company" :options="companiesListMultiselect" group-values="values"
                    group-label="selectAll" :multiple="true" :group-select="true" placeholder="Type to search"
                    track-by="name" label="name">
                    <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
                </multiselect>

            </div>
            <div class="form-group">
                <label>Title <span class="err">*</span> </label>
                <input class="form-control" type="text" v-model="todo.title" placeholder="Title" />
            </div>
            <div class="form-group">
                <label>Description <span class="err">*</span></label>
                <textarea class="form-control" v-model="todo.description" placeholder="Description">
                        </textarea>
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-primary" @click="addTodo" :disabled="todo.disabled">Submit</button>
            </div>
        </form>
    </b-modal>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>

<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'

export default {
    name: 'Add',
    mixins: [AppMixin],
    props: {
        getTodoList: {
            type: Function
        }
    },
    data() {
        return {
            hideFooter: true,
            todo: {
                company: '',
                title: '',
                description: '',
                disabled: false
            },
        }
    },
    methods: {
        addTodo: function () {
            let that = this;
            if (!that.todo.title || !that.todo.description || !that.todo.company) {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: "Please fill all required fields",
                    showConfirmButton: true
                })
            } else {
                that.todo.disabled = true;
                Api.addTodo(that.todo).then(response => {
                    that.todo.disabled = false;
                    this.$swal({
                        icon: "success",
                        title: "Success",
                        text: "Todo added successfully",
                        showConfirmButton: true
                    }).then(function () {
                        that.todo.disabled = false
                        that.todo.description = ''
                        that.todo.title = ''
                        that.todo.company = ''
                        that.$bvModal.hide('add-todo-modal')
                        that.getTodoList()
                    });
                }).catch((error) => {
                    this.$swal({
                        icon: "error",
                        title: "error",
                        text: error.response.data.message,
                        showConfirmButton: true
                    }).then(function () {
                        that.todo.disabled = false;
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
