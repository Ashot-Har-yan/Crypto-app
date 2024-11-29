import { requestUrls } from '../../util/constants/requestUrls';
import { useFetch } from '../../hooks/useFetch';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '../../util/constants/routes';
import { CurrencyListResponseModel } from '../../ts/types/CurrencyListResponseModel';

const CryptoList = () => {
    const navigate = useNavigate();

    const { data,error,loading } = useFetch<CurrencyListResponseModel[]>({
        url: `${requestUrls.coinsMarkets}/coins/markets?vs_currency=usd&per_page=5`,
        header:{
            'x-cg-demo-api-key': process.env.REACT_APP_CRYPTO_API_KEY
        }
    });
    //Todo move to useMemo
       const columns:TableProps<CurrencyListResponseModel>['columns'] = [
        {
            title:'#ID',
            dataIndex:'id',
            key:'id'
        },
        {
            title:'Image',
            dataIndex:'image',
            key:'image',
            render:(value)=>{
                return(
                    <img src={value} width={50} height={50} alt='currencyImg'></img>
                )
            }
        },
        {
            title:'#name',
            dataIndex:'name',
            key:'name'
        },
        {
            title:'#Price_Change_24h',
            dataIndex:'price_change_24h',
            key:'price_change_24h'
        },
        {
            title:'#Price',
            dataIndex:'current_price',
            key:'current_price'
        },
       ]
       const handleNavigateDetailPage = (rowData:CurrencyListResponseModel)=>{
        navigate(`${ROUTE_PATHS.CRYPTO_DETAIL}/${rowData.id}`);
       }
    return (
        <div>
            <Table
            columns={columns}
            loading = {loading}
            dataSource={data || []}
            onRow={(row)=>{
                return{
                    onClick:()=>handleNavigateDetailPage(row)
                }
            }}
            />
        </div>
    )
};

export default CryptoList;