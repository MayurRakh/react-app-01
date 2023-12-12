import React,{useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from '../Redux/RegisterAction';

import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikController from '../Formik/FormikController';

const Home = ({ children }) => {
  console.log("Home Component ::: ")
  const dispatch = useDispatch();
  const formikRef = useRef();


  let { data } = useSelector(state => state);

  const getData = () => {
    dispatch(getProductList());
  }

 let edit = (val) =>{

    formikRef.current.setFieldValue(
      "prodName",
      val.name
    );
    formikRef.current.setFieldValue(
      "brand",
      val.brand
    );
  }
 

  const initialValues = {
    "prodName": "",
    "brand": "",
  }

  return (
    <>
      <div>Home :: <span>{children}</span> <br />

        <div style={{width:300,height:300,marginLeft:600}}>
          <Formik
            initialValues={initialValues}
              innerRef={formikRef}
          >
            {
              formik => {
                return (
                  <Form>
                    <FormikController
                      control="input"
                      type="text"
                      name="prodName"
                      label="Product name"
                      id="prodNameId"
                      className="form-control"
                    />

                    <FormikController
                      control="input"
                      type="text"
                      name="brand"
                      label="Brand"
                      id="brandId"
                      className="form-control"
                    />
                    <br />
                    <button type="submit" disabled={!formik.isValid} className="btn btn-primary"> Save </button>&nbsp;&nbsp;
                    <button type="reset" className="btn btn-primary"> Clear </button>
                  </Form>
                )
              }
            }
          </Formik>
        </div>


        <button onClick={() => { getData() }}>Get Data</button>
        <br /><br />
        <div style={{ width: "800px", marginLeft: "300px" }}>
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
                    <td><img src="https://mukeshtestimg.s3.ap-south-1.amazonaws.com/shirt1.jpeg" alt="no image" width={100} height={100}></img></td>
                    <td >{val.numReview}</td>
                    <td >{val.price}</td>
                    <td >{val.rating}</td>
                    <td><button onClick={()=>{edit(val)}}>Edit</button></td>
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