const Products = ({data}) => {
    return (
        <div style={{textAlign:'center'}}>
            <img src={data.imagePath} alt={`${data.name} product`}/>
            <form style={{marginTop:'10px'}}>
                <label style={{textAlign:'right'}}>{data.name}</label>
                <input style={{marginLeft: 7}} type="number" name="quantity" min="0" defaultValue={0}></input>
            </form>
        </div>
    )
}

export default Products;