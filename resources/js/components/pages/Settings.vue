<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-30">
            <div>
                <h4 class="mg-b-0 tx-spacing--1">Настройки</h4>
            </div>
            <div class="d-none d-md-block">
                <button @click="save" class="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5">Сохранить</button>
            </div>
        </div>
        <div>

            <div v-for="setting in settings" :key="setting.id">
                <div class="form-group row">
                    <label class="col-sm-3 col-form-label">{{ setting.name }}</label>
                    <div class="col-sm-9">
                        <input v-if="setting.type === 'input'" type="email" class="form-control" v-model="setting.value" >
                        <textarea rows="5" v-if="setting.type === 'text'" type="email" class="form-control" v-model="setting.value" ></textarea>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>
<script>
    export default {
        name: "setting",
        data() {
            return {
                settings : [],
            };
        },

        mounted(){
            this.$store.dispatch('get_settings').then(() => {
                this.settings = this.$store.getters.settings;
            });
        },
        computed: {
        },
        methods: {
            save(){
                this.$store.dispatch('save_settings', {'settings': this.settings}).then(() => {
                    this.$router.push({ name: 'settings'})
                });
            }
        }
    }
</script>
