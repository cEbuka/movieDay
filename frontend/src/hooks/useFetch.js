import { axios } from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")


    const fetchData = async (url) => {
        try {
            const res = await axios.get(url)
            console.log(res.data)
            setData(res.data)

        } catch (error) {
            setError(error.message)
            console.error("Error fetching data:", error)
        }
        finally {
            setLoading(false)
        }

    }

    useEffect(()=> {
        fetchData(url)
    }, [url])

    return {data, loading, error}
}

export default useFetch