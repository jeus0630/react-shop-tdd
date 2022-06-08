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
