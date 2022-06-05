import { fireEvent, render, screen } from "@testing-library/react";
import SummaryPage from "../SummaryPage";

describe("<SummaryPage/>",() => {
    it("checkbox and button", () => {
        render(<SummaryPage></SummaryPage>);
        const checkbox = screen.getByRole("checkbox",{
            name: "주문하려는 것을 확인하셨나요?"
        })
        expect(checkbox).not.toBeChecked(); 

        const confirmButton = screen.getByRole("button",{
            name: "주문 확인"
        });
        expect(confirmButton).toBeDisabled();

        fireEvent.click(checkbox);
        
        expect(checkbox).toBeChecked();
        expect(confirmButton).toBeEnabled();
    })
}) 
