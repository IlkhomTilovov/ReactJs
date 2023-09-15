const item = (props) => {
    console.log(props)
}
const fun = () => {
    const { body } = {
        body:{
            
        }
    }
    item({...body})
}
fun()