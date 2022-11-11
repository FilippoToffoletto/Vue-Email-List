const {createApp} = Vue;

createApp({

    data(){
        return{
            mailList: [],
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            count: 0,
            isLoad: false
        }
    },

    methods: {
        getApi(){
            this.isLoad = false;
            this.mailList = [];
            if(this.count < 15){
                axios.get(this.apiUrl)
                .then( result => {
                    this.mailList.push(result.data.response);
                })
                return this.getApi(++this.count)
            }
            this.isLoad = true;
            this.count = 0;
        },
    },

    mounted(){
        //this.getApi();
    }
}).mount('#app')