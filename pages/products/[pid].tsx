import {Fragment} from "react";
import {GetStaticPaths, GetStaticProps} from "next";
import path from "path";
import fs from "fs";
import {ProductModel, ProductProps} from "./index";

export default function ProductDetailPage(props: {loadedProduct: ProductModel}) {
    const loadedProduct: ProductModel = props.loadedProduct;

    // Handle situations where fallback needs to load
    if (!loadedProduct) {
        return <p>Loading</p>
    }

    return (
        <Fragment>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.description}</p>
        </Fragment>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    // NOTE this is dynamic so default behavior is to NOT generate this page
    const {params} = context;
    const productId = params?.pid;

    const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
    const data = await fs.readFileSync(filePath);
    const parsedData: ProductProps = JSON.parse(data.toString());

    const product = parsedData.products.find(product => product.id == productId);

    return {
        props: {
            loadedProduct: product
        }
    };
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {params: {pid: "p1"}},
            {params: {pid: "p2"}},
            {params: {pid: "p3"}},
        ],
        fallback: false // Can set fallback to true - even pages not listed can be valid & loaded when visited
        // Can set fallback to 'blocking' and remove the loading values - next will wait until content is back
    };
}