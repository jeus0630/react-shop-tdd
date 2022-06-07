import {render, screen} from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Type from "../Type";

describe("<Type/>",() => {
    it("display product images from server", async () => {
        render(
            <QueryClientProvider client={new QueryClient()}>
                <Type orderType="products"></Type>
            </QueryClientProvider>
        )

        const productsImages = await screen.findAllByRole("img",{
            name: /product$/i
        })

        expect(productsImages).toHaveLength(2);

        const altText = productsImages.map(el => el.altText);
        expect(altText).toEqual(['America product','England product']);
    })
})
