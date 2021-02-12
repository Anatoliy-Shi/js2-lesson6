Vue.component('error-component', {
    data () {
        return {
            errorText: ""
        }
    },
    methods: {
        setError(error) {
            this.errorText = error
        }
    },
    computed :{
        isVisible(){
            return this.errorText !== ''
        }
    },
    template: `<div class="error" v-if="isVisible">
    <h1 class="error"> {{ errorText }} </h1>
    </div> `
})