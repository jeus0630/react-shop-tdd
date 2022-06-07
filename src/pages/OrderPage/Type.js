import { useGetUsersData } from "../../hooks/useUserData";
import Products from "./Products";

const Type = ({orderType}) => {

    const {isLoading, isError, data} = useGetUsersData(orderType);
    console.log(data);
    const ItemComponent = orderType === "products" ? Products : null;

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
                isError...
            </div>
        )
    }

    return (
        <div>
            {
                data?.map(item => {
                    return (
                        <ItemComponent key={item.name} data={item}/>
                    )
                })
            }
        </div>
    )
}

export default Type;
