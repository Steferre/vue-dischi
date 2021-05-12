/*
Descrizione:
Attraverso una chiamata ajax all’API di boolean https://flynn.boolean.careers/exercises/api/array/music avremo a disposizione una decina di dischi musicali. Utilizzando vue, stampiamo a schermo una card per ogni album.
BONUS:
Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
BONUS 2: Ordinare i dischi per anno di uscita.
*/

const app = new Vue({
    el:'#main_container',
    data: {
       musicAlbums: null,

    },
    methods: {
        getMusicAlbums() {
            // definisco una variabile list alla quale assegnero' l'oggetto ottenuto come risposta dopo la chiamata al server
            let list;
            
            // effettuo la chiamata per ottenere la lista di dischi
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
                .then((arrayObj) => {
                    list = arrayObj.data.response
                    console.log(list) // lista come arrivata dal server
                    /*
                    PER RISOLVERE IL BONUS 2
                    Una volta trovata la lista dei dischi (array di oggetti)
                    applico la funzione sort dove come argomento vine passata un'altra funzione
                    x indica il primo valore e y il valore di confronto ed in base alla funziine di default di .sort
                    l'array viene ordinato in modo crescente
                    */
                    list.sort(function (x, y) {
                        return x.year - y.year
                    })
                    console.log(list) // lista riordinata in modo crescente in base all'anno di produzione del disco

                    // assegno alla mia chiave musicAlbums definita nei data, il valore list 
                    this.musicAlbums = list;

                })    
        }
    },
})