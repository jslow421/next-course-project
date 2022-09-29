import {GetStaticProps} from "next";

export interface ProductModel {
    id: string;
    title: string;
}

export default function ProductsPage(props: {products: ProductModel[]}) {
    return (
        <ul>
            {props.products.map((product) => (
                <li key={product.id}>{product.title}</li>
            ))}
        </ul>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            products: [{id: "p1", title: "Product 1"}, {id: "p2", title: "Product 2"}],
        },
    };
};