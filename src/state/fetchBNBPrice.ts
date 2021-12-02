import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import axios from "axios"



const useGetBNBPriceData = () => {
  const [data, setData] = useState<BigNumber>(new BigNumber(0))
  const API_URL = "https://api.pancakeswap.info/api/v2/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"


  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(API_URL);
      // axios.get(API_URL).then((re)=>{
      //   setCakePriceBusd(new BigNumber(re.data.data.price))
      // });
      console.log(resp.data.data.price,"price");

      setData(new BigNumber(resp.data.data.price))
    }

    fetchData()
  }, [])

  return data
}

export default useGetBNBPriceData