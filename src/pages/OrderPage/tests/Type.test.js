import {findByText, render, screen, waitFor} from "@testing-library/react";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import { server } from "../../../mocks/server";
import Type from "../Type";

describe("<Type/>",() => {
    const renderType = () => render(
        <QueryClientProvider client={new QueryClient()}>
            <Type orderType="products"></Type>
        </QueryClientProvider>
    )

    it("display product images from server", async () => {
        renderType();

        expect(screen.getByText(/isLoading/i)).toBeInTheDocument();

        const productsImages = await screen.findAllByRole("img",{
            name: /product$/i
        })

        const americaProduct = await screen.findByRole("img",{name:/America product/i});
        const englandProduct = await screen.findByRole("img",{name:/England product/i});

        expect(americaProduct).toBeInTheDocument('America product'); 
        expect(englandProduct).toBeInTheDocument('England product');
    })

    it("should render error when response is not success", async () => {

        server.use(
            rest.get('http://localhost:5000/products', (req,res,ctx) => {
                return res.once(
                    ctx.status(500)
                )
            })
        )

        renderType();

        const loadingText = screen.getByText(/isLoading.../i);
        expect(loadingText).toBeInTheDocument();

            const errorText = await screen.findByText(/error/i);
            expect(errorText).toBeInTheDocument();
    })
})
