import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { requestUrls } from "../../util/constants/requestUrls";
import { CurrencyDetailResponseModel } from "../../ts/types/CurrencyDetailResponseModel";
import { Card } from "antd";

const {Meta} = Card;

const CryptoDetail = ()=>{
    const { id } = useParams<{id:string}>();
    const {data,loading,error} = useFetch<CurrencyDetailResponseModel>({
        url:`${requestUrls.coinsMarkets}/coins/${id}`,
        header:{
            'x-cg-demo-api-key': process.env.REACT_APP_CRYPTO_API_KEY
        }
    })
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data</div>;
    return(
        <div>
            <Card
            style={{width:'500px'}}
            cover = {<img alt = "example" src= {data?.image.large}/>}
            >

        <Meta title = {data?.name} description ={data?.symbol} />
            </Card>
        </div>
    )
}

export default CryptoDetail;