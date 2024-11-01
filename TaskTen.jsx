import { useState } from "react";
import Button from "./Button/Button";

export default function TaskTen() {
    const some_products = [
        {title: "laptop", category: "technology"},
        {title: "lays", category: "food"},
        {title: "t-shirt", category: "clothes"},
        {title: "psp", category: "technology"},
        {title: "dr. Pepper", category: "food"},
        {title: "shorts", category: "clothes"},
        {title: "cola", category: "food"},
        {title: "xbox", category: "technology"},
        {title: "panama", category: "clothes"},
        {title: "meat", category: "food"},
        {title: "casio", category: "technology"},
        {title: "jeans", category: "clothes"},
        {title: "polo", category: "clothes"},
        {title: "hinkali", category: "food"},
        {title: "ps vita", category: "technology"},
        {title: "hachapuri", category: "food"},
        {title: "jacket", category: "clothes"},
        {title: "fish", category: "food"},
    ];
    let [productCount, setProductCount] = useState([...some_products]);
    

    const TechOnClickHandler = () => {
        setProductCount(productCount.filter(({category})=>category=="technology"))
    };
    const FoodOnClickHandler = () => {
        setProductCount(productCount.filter(({category})=>category=="food"))
    };
    const ClothesOnClickHandler = () =>{
        setProductCount(productCount.filter(({category})=>category=="clothes"))
    };
    const ShowAllProductsOnClick = () => {
        setProductCount(some_products);
      };
    return(
        <>
            <Button onTouch={TechOnClickHandler}>показать нашу технику</Button>
            <Button onTouch={FoodOnClickHandler}>показать нашу еду</Button>
            <Button onTouch={ClothesOnClickHandler}>показать нашу одежду</Button>
            <button onClick={ShowAllProductsOnClick} className="bg-blue-500
            text-white
            font-bold 
            py-2 px-4 
            rounded hover:bg-blue-700">показать все наши товары</button>
            <ul>
                {productCount.map((product)=>(
                    <li key={product.title}>{product.title}</li>
                ))}
            </ul>
        </>
    )
}