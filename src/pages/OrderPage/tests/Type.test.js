import {render, screen, waitFor} from "@testing-library/react";
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

        const productsImages = await screen.findAllByRole("img",{
            name: /product$/i
        })

        expect(productsImages).toHaveLength(2);

        const altText = productsImages.map(el => el.altText);
        expect(altText).toEqual(['America product','England product']);
    })

    it.only("should render error when response is not success", async () => {
        renderType();

        server.use(
            rest.get('http://localhost:5000/products', (req,res,ctx) => {
                return res.once(
                    ctx.status(500)
                )
            })
        )

        const loadingText = screen.getByText(/isLoading.../i);
        expect(loadingText).toBeInTheDocument();
        
        // await waitFor(() => {
        //     const errorText = screen.getByText(/error/i);
        //     expect(errorText).toBeInTheDocument();
        // })

            const errorText = await screen.findByText(/error/i);
            expect(errorText).toBeInTheDocument();
    })
})
