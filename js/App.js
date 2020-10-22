class producto{

    constructor(){
        this.name = name;
        this.price = price;
        this.year = year;
    }

    
}

class UI{
    addproduct(product){
        const addList = document.getElementById("add-list");

        const element = document.createElement("div");
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                <strong>Producto name</strong>: ${product.name}
                <strong>Producto price</strong>: ${product.price}
                <strong>Producto year</strong>: ${product.year}
                <a href="#" class="btn btn-danger" id="delete">Eliminar</a>
                </div>
            </div>
        `;

        addList.appendChild(element);
        
        
    }

    resetform(){
        document.getElementById("product-form").reset();
    }

    deleteproduct(){
        
    }
    showmessage(){
        
    }
}

document.getElementById("product-form").addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;

    const price = document.getElementById("price").value;

    const year = document.getElementById("year").value;

    const product = new producto (name, price,year);
    

    const ui = new UI();
    ui.addproduct(product);
    ui.showmessage();
    ui.resetform();
    
});

