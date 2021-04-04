<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-30">
            <div>
                <h4 class="mg-b-0 tx-spacing--1">Прайс лист</h4>
            </div>
            <div class="d-none d-md-block">
                <button @click="save" class="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5">Сохранить</button>
            </div>
        </div>
        <div class="pr-list">

            <div v-for="(price, index) in prices" :key="price.id" class="prices">
                <input type="text" class="group" v-model="price.group">
                <input type="text" class="subgroup" v-model="price.subgroup">
                <input type="text" class="cat" v-model="price.cat">
                <input type="text" class="pics" v-model="price.pics">
                <input type="text" class="value" v-model="price.value">
                <button class="del" @click="delPos(index)">✖</button>
                <div @click="addPos(index+1)" class="add_pos">+</div>
            </div>


        </div>
    </div>
</template>
<script>
    export default {
        name: "price",
        data() {
            return {
                prices : [{group: "", subgroup: "", cat: "", pics: "", value: ""}],
            };
        },

        mounted(){
            this.$store.dispatch('get_prices').then(() => {
                if(this.$store.getters.prices.length){
                    this.prices = this.$store.getters.prices;
                }

            });
        },
        computed: {
        },
        methods: {
            save(){
                this.$store.dispatch('save_prices', {'prices': this.prices}).then(() => {
                    this.$router.push({ name: 'prices'})
                });
            },
            addPos(index){
                this.prices.splice(index, 0, {group: "", subgroup: "", cat: "", pics: "шт.", value: "0"});
            },
            delPos(index){
                this.prices.splice(index, 1);
            }
        }
    }
</script>
<style>
    .del{
        border: 1px solid #dadada;
        color: #a8a8a8;
    }
    .add_pos{
        font-size: 15px;
        color: #dadada;
        border: 1px solid #dadada;
        cursor: pointer;
        text-align: center;
        line-height: 13.5px;
        position: absolute;
        left: -18px;
        top: 17px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
    }
    .prices{
        display: flex;
        position: relative;
        margin-left: 20px;
    }
    .pr-list .prices:not(:first-child) input{
        border-top: 0;
    }
    .prices input:focus{
        background: #dadada;
    }
    .prices input{
        outline: none;
        flex: 1;
        display: flex;
        border-radius: 0;
        border: 1px solid #dadada;
    }
    .prices input:not(:first-child){
        border-left: none;
    }
    .prices .value, .prices .pics{
        max-width: 100px;
    }
</style>
