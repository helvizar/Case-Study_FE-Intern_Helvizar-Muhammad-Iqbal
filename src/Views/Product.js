import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { useAxiosGet } from "../Hooks/HttpRequests";

function Product() {
    const { id } = useParams()
    const url = `https://639d0f3e42e3ad6927407d01.mockapi.io/api/v1/products/${id}`

    let content = null

    let product = useAxiosGet(url)

    if(product.error){
        content = <p>
            There was an error please refresh or try again later.
        </p>
    }

    if(product.loading) {
        content = <Loader />
    }

    if (product.data) {
        content =
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.name}
                </h1>
                <div>
                    <img
                    src={product.data.images}
                    alt={product.data.name}
                    />
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {product.data.price}
                </div>
                <div>
                    {product.data.description}
                </div>
            </div>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Product