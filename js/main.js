class lapiz{
    #marca
    constructor(color="#0011FF", dimension=19, marca="Mongol", borrador= true, material="Madera"){
        this.color = color;
        this.dimension=dimension;
        this.#marca=marca;
        this.borrador=borrador;
        this.material=material;
    }

    getMarca(){
        return this.#marca;
    }
}

let obj = undefined;
let color = document.querySelector(`[name="color"]`)
let marca = document.querySelectorAll(`[name="marca"]`)
let marcaArray = Array.apply(null, marca);
let borrador = document.querySelectorAll(`[name="borrador"]`)
let borradorArray = Array.apply(null, borrador);
let material = document.querySelectorAll(`[name="material"]`)
let materialArray = Array.apply(null, material);

addEventListener("DOMContentLoaded", (e)=>{
    obj = new lapiz();
    color.value = obj.color;
    marcaArray.forEach((val,id) => {
        if(val.value==String(obj.getMarca())) {
            val.checked = true;
        };
    });
    borradorArray.forEach((val,id) => {
        if(val.value==String(obj.borrador)) {
            val.checked = true;
        };
    });
    materialArray.forEach((val,id) => {
        if(val.value==String(obj.material)) {
            val.checked = true;
        };
    });
})

addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));

    console.log(data)

    document.querySelector("tbody").insertAdjacentHTML("beforeend",`    
        <tr>
            <td>${data.color}</td> 
            <td>${data.dimension}</td>
            <td>${data.marca}</td>
            <td>${data.borrador}</td>
            <td>${data.material}</td>
        </tr>
    `)
})