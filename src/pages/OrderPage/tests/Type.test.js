import {render, screen} from "@testing-library/react";
import Type from "../Type";

describe("<Type/>",() => {
    it("display product images from server", async () => {
        render(<Type orderType="products"></Type>)

        const productsImages = await screen.findAllByRole("img",{
            name: /product$/i
        })

        expect(productsImages).toHaveLength(2);

        const altText = productsImages.map(el => el.altText);
        expect(altText).toEqual(['America product','England product']);
    })
})