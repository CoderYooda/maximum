<template>
    <div>
        <div data-label="Example" class="df-example demo-forms">
            <div class="d-flex">
                <div>
                    <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" id="customSwitch1">
                        <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
                    </div>
                    <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" disabled id="customSwitch2">
                        <label class="custom-control-label" for="customSwitch2">Disabled switch element</label>
                    </div>
                </div>
                <div class="mg-sm-l-30">
                    <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" id="customSwitch3" checked>
                        <label class="custom-control-label" for="customSwitch3">Toggle this switch element</label>
                    </div>
                    <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" disabled id="customSwitch4" checked disabled>
                        <label class="custom-control-label" for="customSwitch4">Disabled switch element</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    // import auth from '../auth.js';

    export default {
        name: "Settings",
        data() {
            return {
                // username: '',
                // password: '',
            };
        },

        methods: {
        }
    }
</script>
