import {GetStaticProps} from "next";
import fs from "fs";
import path from "path";

export interface ProductModel {
    id: string;
    title: string;
}

export interface ProductProps {
    products: ProductModel[];
}

export default function ProductsPage(props: {products: ProductProps}) {
    console.log("Running");

    return (
        <ul>
            {props.products.products.map((product: ProductModel) => (
                <li key={product.id}>{product.title}</li>
            ))}
        </ul>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
    const data = await fs.readFileSync(filePath);
    const parsedData: ProductProps = JSON.parse(data.toString());

    return {
        props: {
            products: parsedData,
        },
    };
};