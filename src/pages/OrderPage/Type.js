import { useGetUsersData } from "../../hooks/useUserData";
import Options from "./Options";
import Products from "./Products";

const Type = ({orderType}) => {

    const {isLoading, isError, data} = useGetUsersData(orderType);
    const ItemComponent = orderType === "products" ? Products : Options;

    if(isLoading){
        return (
            <div>
                isLoading...
            </div>
        )
    }

    if(isError){
        return(
            <div>
                error
            </div>
        )
    }

    return (
        <>
            <h2>주문 종류</h2>
            <p>하나의 가격</p>
            <p>총 가격:</p>
            <div style={{
                display: 'flex',
                flexDirection: orderType === "options" && "column",
            }}>
                {
                    data?.map(item => (
                        <ItemComponent key={item.name} data={item}/>
                    ))
                }
        </div>
        </>
    )
}

export default Type;
