import { useEffect ,useState} from 'react'
import styled, { ServerStyleSheet } from 'styled-components'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import CartItem from './CartItem'


export default function Home(){
    
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/categories')
        .then((response)=>{
            console.log(response.data)
            setCategories(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    
    return(
        <Container>
            <CategoriesList>
               {
                   categories.map((item)=>{
                       return(
                            <CategoryType id={item.id} background={item.image}>
                                <h2>{item.category}</h2>
                            </CategoryType>
                       )
                   })
               }

            </CategoriesList>
            
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
   // height: 100vh;
   // background-color: red;
   display: flex;
   justify-content: center;
`

const CategoriesList= styled.ul`
width: 800px;
//height: 500px;
border: 1px solid red;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`

const CategoryType = styled.li`
width: 200px;
height: 200px;
border: 1px solid blue;
border-radius:50%;
display: flex;
justify-content: center;
align-items: center;

/* background:  url('https://docesonhosconfeitaria160534608.files.wordpress.com/2018/01/bolo-floresta-negra.jpg') ; */

background: url(${props=>(props.background)});
background-size:cover;
position: relative;

&:after {
    content: '';
    border-radius: 50%;
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: linear-gradient(to bottom, 
            rgba(255, 255, 255, 0) 0%, 
            rgba(0, 0, 0, 0.5) 70%, #000)
            ;
  }

    h2{
        color: White;
        font-size: 25px;
        margin-top: 125px;
        z-index:10
    }
`