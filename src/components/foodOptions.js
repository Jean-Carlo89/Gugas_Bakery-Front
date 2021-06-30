import axios from 'axios'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'

export default function FoodOption(){
    const {idCategory} = useParams()
    console.log(idCategory)
    const [categoryItens,setCategoryItens] = useState([])
    //console.log(categoryId)
    useEffect(()=>{

        axios.get(`http://localhost:4000/food/${idCategory}`)
        .then((response)=>{
            setCategoryItens(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[])
    
    return(
        <Container>

             <CategoriesList>
                {
                    categoryItens.map((item)=>{
                        return(
                            <>
                                <CategoryType key={item.id} background={item.image} >
                                    <h2>{item.name}</h2>
                                    <Price> R$ {((item.price)/100).toFixed(2)}</Price>
                                </CategoryType>
                               
                            </>
                        
                        )
                    })
                }

            </CategoriesList>
                

        </Container>
    )
}

const Container = styled.div`
width: 100%;
 height: 100vh;
//background-color: red;
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
width: 300px;
height: 300px;
border: 1px solid blue;
border-radius:50%;
display: flex;
justify-content: center;
flex-direction: column;
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

const Price = styled.div`
    color: white;
    z-index:10;
    margin-top: 15px;
    font-size: 20px;
`
