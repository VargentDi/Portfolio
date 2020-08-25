

const handlePost = async (req, res) => {
  try{
    const dataP = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await dataP.json()
    res.json(data.slice(0,10))
  }catch(e){
    res.status(e.status||400).json({message:"api error"})
  }

}



export default handlePost