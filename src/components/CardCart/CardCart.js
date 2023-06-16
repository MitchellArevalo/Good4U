function CardCart() {
    return (
        <div className="flex py-2 gap-x-2 border-b-2 border-b-bg-whiteLight justify-around">
            <img className=" w-28" src="assets/img1.png" alt="Imagen1" />
            <div className="2/3 ">
                <h1 className="font-bold">Camiseta tela fría</h1>
                <p className="font-thin  text-greyLightOpra">Black/Medium</p>
                <span className="font-semibold">$50.000</span>
            </div>
            <div className=" h-max py-2 px-3 text-lg bg-whiteLight text-greyDarkOpra">
                <button> - </button>
                <span className="mx-2 "> 2 </span>
                <button> + </button>
            </div>
        </div>
    )
}

export default CardCart