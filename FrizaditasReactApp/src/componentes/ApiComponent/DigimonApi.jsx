import React from 'react'

const DigimonApi = () => {

  const [list, setList] = useState([])

  const url = 'https://www.digi-api.com/api/v1/digimon'

  useEffect(() => {

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        console.log(data.content)
        setList(data.content)
      })
  }, [])


  return (
    <div>

    </div>
  )
}

export default DigimonApi