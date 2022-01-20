//let $datos = document.querySelector('datos');



fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(resp => resp.json())
        .then(data =>{
            data.forEach(element => {

                let titulo = element.title;
                let img = element.thumbnailUrl;
                //console.log(titulo,img);

                let $datos = document.querySelector('#datos');
                let crearDiv =document.createElement('div');
                crearDiv.innerHTML = `
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="${img}" alt="...">
                                <h4 class="card-title">${titulo}</h4>
                             </div>  
                         </div>
                    </div>
                `
                $datos.append(crearDiv);
                    

                    

                
                
            });
            
           
       
   });
