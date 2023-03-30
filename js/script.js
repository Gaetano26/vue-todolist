/*
creare lista spesa
inserire campo di imput in cui inserire gli elementi
aggiungere 1 bottone per inviare i dati in ingresso
per ogni elemento della lista aggiungere un altro bottone per cancellare
ed un bottone che indica che l'elemento e gia utilizzato
*/


const {createApp} = Vue

createApp({
    data() {
        return {
           todoList: [
            { 
            name:  'pasta',
            completato: false
          },
          {
            name: 'acqua',
            completato: false
          },
          {
            name:  'uova',
            completato: false
          }
          ],
          ingrediente:'',
          testo:'',
          completato:'',
      }
    },
    methods: {
       inserisci (){
        const inserisci = {
            name: this.ingrediente,
            completato:false
        }
         this.todoList.push(inserisci)
         this.ingrediente = ''
       },
       cancella (index) {
          this.todoList.splice(index, 1)                                                  
       },
       completa (index){
           this.todoList[index].completato = true
       },
    },
   

}).mount('#app')
