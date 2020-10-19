<template>
    <div class="page__control-panel">
        <div class="page__control-panel-body">
            <insert-form></insert-form>
            <result-form></result-form>
            <output-form></output-form>
        </div>
    </div>
</template>
        
<script>
    import InsertForm from './InsertForm.vue';
    import ResultForm from './ResultForm.vue';
    import OutputForm from './OutputForm.vue';

    export default {
        name: `Panel`,
        components: {
            InsertForm,
            ResultForm,
            OutputForm
        },
        props: {
            
        },
        data() {
            return {
                
            }
        },
        computed: {
            
        },
        mounted() {
            
        },
        methods: {
            
        }
    }
</script>