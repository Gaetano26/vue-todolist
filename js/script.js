/*
creare lista spesa
inserire campo di imput in cui inserire gli elementi
aggiungere 1 bottone per inviare i dati in ingresso
per ogni elemento della lista aggiungere un altro bottone per cancellare
ed un bottone che indica che l'elemento e gia utilizzato
*/


const { createApp } = Vue;

createApp({
    data() {
        return {
           todoList: [{ 
            text:  'pasta',
            done: false
          },
          {
            text: 'acqua',
            done: false
          },
          {
            text:  'uova',
            done: false
          }
        ],
          text:''
      }
    },
    methods: {
       addItem (){
            if(this.text != ''){
                const newItem = {
                    text : this.text,
                    done: false,
                  }
                  
                  this.todoList.push(newItem);
                  this.text = ''
            } else{
                this.done = false
            }
        },

       deleteItem (index) {
          this.todoList.splice(index, 1)                                                  
       },
       complete (index){
        this.todoList[index].done = true;
       },
    },
   

}).mount('#app')
