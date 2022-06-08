import { useGetOptionsData } from "../../hooks/useOptionData";


const Options = ({data}) => {
    const {isLoading, isError, data: optionData} = useGetOptionsData('options');

    if(isLoading){
        return(
            <div>isLoading</div>
        )
    }
    
    if(isError){
        return(
            <div>isError</div>
        )
    }

    return (
        <>
            {
                <form key={optionData.name}>
                    <input type="checkbox" id={optionData.name} name={optionData.name} value={optionData.name} />
                    <label for={optionData.name}>{optionData.name}</label>
                </form>   
            }
        </>
    )
}

export default Options;