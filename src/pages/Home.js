import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from '../Redux/RegisterAction';
const Home = ({ children }) => {
  console.log("Home Component ::: ")
  const dispatch = useDispatch();

  let {data} = useSelector(state => state);

  const getData = () => {
    dispatch(getProductList());
  }
  return (
    <>
      <div>Home :: <span>{children}</span> <br />
        <button onClick={() => { getData() }}>Get Data</button>
        <br /><br />
        <div style={{ width: "800px",marginLeft:"300px" }}>
          <table class="table table-sm table-hover border" >

            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Brand</th>
                <th scope="col">Image</th>
                <th scope="col">No Of Rev.</th>
                <th scope="col">Price</th>
                <th scope="col">Rating</th>

              </tr>
            </thead>
            <tbody>

              {(data && data.length !== 0) ? data.map((val, key) => {
                return (

                  <tr>
                    <td >{val.name}</td>
                    <td >{val.brand}</td>
                    <td><img src= "https://mukeshtestimg.s3.ap-south-1.amazonaws.com/shirt1.jpeg" alt = "no image" width={100} height={100}></img></td>
                    <td >{val.numReview}</td>
                    <td >{val.price}</td>
                    <td >{val.rating}</td>
                  </tr>
                )
              }) : ""}
            </tbody>
          </table>
        </div>
      </div >
    </>

  )
}

export default Home