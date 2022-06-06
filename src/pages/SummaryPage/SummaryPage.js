import { useState } from "react"

const SummaryPage = () => {

    const [checked, setChecked] = useState(false);
    
    return (
        <div>
            <h1>주문 확인</h1>
            <h2>Products: \1,000</h2>
            <ul>
                <li>1 England</li>
            </ul>
            <label htmlFor="checkbox">
                주문하려는 것을 확인하셨나요?
            </label>
            <input id="checkbox" type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)}></input>
            <button disabled={!checked}>
                주문 확인
            </button>
        </div>
    )
}

export default SummaryPage;