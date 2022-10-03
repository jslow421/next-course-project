import {GetStaticProps} from "next";
import fs from "fs";
import path from "path";
import {NextResponse} from "next/server";
import Link from "next/link";

export interface ProductModel {
    id: string;
    title: string;
    description: string;
}

export interface ProductProps {
    products: ProductModel[];
}

export default function ProductsPage(props: { products: ProductProps }) {

    return (
        <ul>
            {props.products.products.map((product: ProductModel) => (
                <li key={product.id}><Link href={`/products/${product.id}`}>{product.title}</Link></li>
            ))}
        </ul>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
    const data = await fs.readFileSync(filePath);
    const parsedData: ProductProps = JSON.parse(data.toString());

    if (parsedData.products.length === 0) {
        return {notFound: true} // this will return 404

    }

    return {
        props: {
            products: parsedData,
        },
        revalidate: 600 // in dev it's regenerated always
        // notFound: true,
        // redirect: "/",
    };
};