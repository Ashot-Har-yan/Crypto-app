import { useMemo } from "react";
import { Table } from "antd";
import type { TableProps } from "antd";
import { useFetch } from "../../hooks/useFetch";
import { CurrencyListResponseModel } from "../../ts/types/CurrencyListResponseModel";
import { DEFAULT_PAGINATION } from "../../util/constants/pagination";
import { useQueryParam } from "../../hooks/useQueryParams";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../util/constants/routes";
import { useCurrency } from "../../context/CurrencyContext"; 
import { requestUrls } from "../../util/constants/requestUrls";

const CryptoList = () => {
    
    const { selectedCurrency } = useCurrency();
    const navigate = useNavigate();
    const { getQueryParam, setQueryParam } = useQueryParam();
    const page = getQueryParam("page") || DEFAULT_PAGINATION.page;
    const pageSize = getQueryParam("pageSize") || DEFAULT_PAGINATION.pageSize;

    const { data, error, loading } = useFetch<CurrencyListResponseModel[]>({
        url: `${requestUrls.coinsMarkets}/coins/markets?vs_currency=${selectedCurrency}&per_page=${pageSize}&page=${page}`,
        header: {
            "x-cg-demo-api-key": process.env.REACT_APP_CRYPTO_API_KEY,
        },
    });

    const columns:TableProps<CurrencyListResponseModel>['columns'] = useMemo(() => {
        return [
            {
                title: "#ID",
                dataIndex: "id",
                key: "id",
            },
            {
                title: "#Image",
                dataIndex: "image",
                key: "image",
                render: (value: any) => {
                    return <img src={value} width={50} height={50} alt="currencyImg" />;
                },
            },
            {
                title: "#Name",
                dataIndex: "name",
                key: "name",
            },
            {
                title: "#Price Change (24h)",
                dataIndex: "price_change_24h",
                key: "price_change_24h",
            },
            {
                title: "#Price",
                dataIndex: "current_price",
                key: "current_price",
            },
        ];
    }, []);

    const handleNavigateDetailPage = (rowData: CurrencyListResponseModel) => {
        navigate(`${ROUTE_PATHS.CRYPTO_DETAIL}/${rowData.id}`);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data</div>;

    return (
        <div>
            <Table
                columns={columns}
                loading={loading}
                dataSource={data || []}
                pagination={{
                    total: data ? data.length : 100,
                    current: +page,
                    pageSize: +pageSize,
                    onChange(page, pageSize) {
                        setQueryParam({
                            page,
                            pageSize,
                        });
                    },
                }}
                onRow={(row) => {
                    return {
                        onClick: () => handleNavigateDetailPage(row),
                    };
                }}
            />
        </div>
    );
};

export default CryptoList;
