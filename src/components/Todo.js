import React, { useState } from "react";
import FigureCaption from "react-bootstrap/esm/FigureCaption";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addtodo, deletetodo, removetodo, addtodo2 } from "../action";
import "./todo.css"
import keep from "../image/keep.png"
import { Dropdown } from "react-bootstrap";
import ReactSearchBox from "react-search-box";
import "../components/dropdown.css";
import "../components/model.css"


const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [inputData2, setInputData2] = useState("");

  const list = useSelector((state) => state.todoReducers.list)
  const dispatch = useDispatch();

  return (
    <>
      <div className="main_div">
        <div className="child_div">
          <div className="header">



            <input type="checkbox" id="openSidebarMenu"/>
              <label for="openSidebarMenu" class="sidebarIconToggle">
                <div class="spinner top"></div>
                <div class="spinner middle"></div>
                <div class="spinner bottom"></div>
              </label>
               
              
              <div id="sidebarMenu">
              <ul class="menu">
                  <li><a href="#"><i class="fas fa-lightbulb"></i>  Notes</a></li>
                  <li><a href="#"><i class="fas fa-bell"></i>   Reminder</a></li>
                  <li><a href="#"><i class="fas fa-pen"></i>   Edit Label</a></li>
                  <li><a href="#"><i class="fas fa-archive"></i>   Archive</a></li>
                  <li><a href="#"><i class="fas fa-trash-alt"></i>   Trash</a></li>
                </ul>
                </div>
              
              {/* <Dropdown className="menu">
              <Dropdown.Toggle classNama="spinner" variant="success" id="dropdown-basic">
                <i class="fas fa-bars">
                </i>
              </Dropdown.Toggle>
              <div className="sidebarMenu">
              <Dropdown.Menu className="menu">
                <Dropdown.Item href="#/action-1" class="far fa-lightbulb"> Notes</Dropdown.Item><br />
                <Dropdown.Item href="#/action-2" class="fas fa-bell"> Reminder</Dropdown.Item><br />
                <Dropdown.Item href="#/action-3" class="fas fa-pen"> Edit Labels</Dropdown.Item><br />
                <Dropdown.Item href="#/action-4" class="fas fa-archive"> Archive</Dropdown.Item><br />
                <Dropdown.Item href="#/action-5" class="fas fa-trash-alt"> Trash</Dropdown.Item><br />
              </Dropdown.Menu>
              </div>
            </Dropdown> */}
              <img src={keep} style={{ height: "40px", width: "40px" }} alt=""></img><span style={{ textAlign: 'left' }}>Keep</span>
              <div className="search_parent"><i class="fas fa-search"></i>
                <div>
                  <input type="text" className="search_child" placeholder="Search"></input>
                  {/* <ReactSearchBox className="search_inside" placeholder="Search" value="Doe"> </ReactSearchBox> */}

                </div>
              </div>

          </div>
          <div className="border">
          <div className="add_item">

            <input type="text"
              className="input"
              placeholder="Take a Note...."
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}

            />
            {/* <label>Body</label><br/>
            <input
            value={inputData2}  
            onChange={(event)=>setInputData2(event.target.value)}/> */}

            <i className="fa fa-plus add-btn" onClick={() => dispatch(addtodo(inputData), setInputData(" "))}></i>
            {/* <i className="fa fa-plus add-btn" onClick={()=>dispatch(addtodo2(inputData2),setInputData2(" "))}></i> */}



          </div>


          <div className="box-height">
            {
              list.map((elem) => {
                return (
                  <div className="box" key={elem.id} >
                  
                    <h2>{elem.data}</h2>

                    <div className="showItem" key={elem.id2} >
                      <h2>{elem.data2}</h2>

                      <div className="todo-btn"></div>
                      <i className="far fa-trash-alt add-btn" title="delete item"
                       onClick={() => dispatch(deletetodo(elem.id))}></i>
                    </div>
                  </div>



                )
              })

            }

          </div>

          <div className="button">
            <button className="btn effect04" data-sm-link-text="remove" onClick={() => dispatch(removetodo())}><span>REMOVE</span></button>
          </div>
          </div>



        </div>
      </div>
    </>


  );
}

export default Todo;