import React ,{ useState ,useEffect} from 'react'
import { Col, Row, Image, ListGroup, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import {useDispatch, useSelector} from 'react-redux'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/loader'
import Message from '../components/message'

const ProductScreens = ({ history,match}) => {

    const [qty, setqty] = useState(0)

    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product} = productDetails
    



    useEffect(()=>{

        dispatch(listProductDetails(match.params.id))
        
      

    }, [dispatch, match])

    const addToCartHandler = ()=>{
        history.push(`/cart/${match.params.id}?qty=${qty} `)

    }

    
    return (
        <>
        <Link className='btn btn-light my-3' to='/'>Go Back</Link>
        {loading ? <Loader/> : error ? <Message variant='danger' >{error} </Message> : (
             <Row>
             <Col md={6} >
                 <Image src={product.image} alt={product.name} fluid ></Image>
             </Col>
             <Col md={3} >
                 <ListGroup variant='flush' >
                     <ListGroup.Item>
                     <h3> {product.name} </h3>
                     </ListGroup.Item>
                     
                     <ListGroup.Item>
                         <Rating value ={product.rating} text={`${product.numReviews} reviews`}  />
                     </ListGroup.Item>
                     <ListGroup.Item>
                         Price: ${product.price}
                     </ListGroup.Item>
                     <ListGroup.Item>
                         Description: {product.description}
                     </ListGroup.Item>
                 </ListGroup>
             </Col>
             <Col>
                 <ListGroup>
                     <ListGroup.Item>
                         <Row>
                             <Col>Price:</Col>
                             <Col> <strong> ${product.price}</strong> </Col>
                         </Row>
                     </ListGroup.Item>
 
                     <ListGroup.Item>
                         <Row>
                             <Col>Status:</Col>
                             <Col> <strong> {product.countInStock > 0 ? 'In Stock' : ' Out Of Stock'}</strong> </Col>
                         </Row>
                     </ListGroup.Item>

                     {product.countInStock > 0 && (
                         <ListGroup.Item> 
                             <Row>
                                 <Col>Qty</Col>
                                 <Col>
                                    <Form.Control as ='select' value={qty} onChange= {(e)=> setqty(e.target.value)}>
                                        {
                                            [...Array(product.countInStock).keys()].map((x)=>(
                                                <option key ={x + 1} value= {x + 1} >
                                                    {x + 1}
                                                </option>    
                                            ))
                                        }
                                    </Form.Control>
                                 </Col>
                             </Row>
                         </ListGroup.Item>
                     )}
 
                     <ListGroup.Item>
                         <Button onClick ={addToCartHandler} type = 'button' className ='btn-block' disabled={product.countInStock === 0}  >Add To Cart</Button>
                     </ListGroup.Item>
                 </ListGroup>
             </Col>
         </Row>
        ) }
       
        </>
    )
}

export default ProductScreens
