import React from 'react'
import './group.css'
import { useNavigate } from 'react-router-dom'
export default function MainGroup() {
    const navigate=useNavigate();
  return (
    <div className='documentation-container'>
        <h1>DISCUSSION GROUPS</h1>
        <div className="ag-format-container">
  <div className="ag-courses_box">
    <div className="ag-courses_item">
      <div onClick={()=>{navigate("/group/Frontend-REACTJS")}} className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
          WEB&#160;DEVELOPMENT&#160;
        </div>

        <div className="ag-courses-item_date-box">
          Tech:
          <span className="ag-courses-item_date">
            REACTJS
          </span>
        </div>
      </div>
    </div>
        
            <div className="ag-courses_item">
              <div onClick={()=>{navigate("/group/DataStructure & Algorithm")}} className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
        
                <div className="ag-courses-item_title">
                  DSAlgo
                </div>
        
                <div className="ag-courses-item_date-box">
                  Language:
                  <span className="ag-courses-item_date">
                    C++/JAVA
                  </span>
                </div>
              </div>
            </div>

    <div className="ag-courses_item">
      <div onClick={()=>{navigate("/group/Backend-NODEJS")}} className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
          Backend &#160;Development
        </div>

        <div className="ag-courses-item_date-box">
          Tech:
          <span className="ag-courses-item_date">
            NODEJS
          </span>
        </div>
      </div>
    </div>

    <div className="ag-courses_item">
      <div onClick={()=>{navigate("/group/Android DEVELOPMENT")}} className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
          Android Development
        </div>

        {/* <div className="ag-courses-item_date-box">
          Start:
          <span className="ag-courses-item_date">
            04.11.2022
          </span>
        </div> */}
      </div>
    </div>

    <div className="ag-courses_item">
      <div onClick={()=>{navigate("/group/UI&UX")}} className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
          UI&UX
        </div>

        {/* <div className="ag-courses-item_date-box">
          Start:
          <span className="ag-courses-item_date">
            04.11.2022
          </span>
        </div> */}
      </div>
    </div>

    {/* <div className="ag-courses_item">
      <div onClick={()=>{navigate("/group/")}} className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
          Front-end development&#160;+ jQuery&#160;+ CMS
        </div>
      </div>
    </div>

    <div className="ag-courses_item">
      <div onClick={()=>{navigate("/group/")}} className="ag-courses-item_link">
        <div className="ag-courses-item_bg">
        </div>
        <div className="ag-courses-item_title">
          Digital Marketing
        </div>
      </div>
    </div>

    <div className="ag-courses_item">
      <div onClick={()=>{navigate("/group/")}} className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
          Interior Design
        </div>

        <div className="ag-courses-item_date-box">
          Start:
          <span className="ag-courses-item_date">
            31.10.2022
          </span>
        </div>
      </div>
    </div> */}

  </div>
</div>
    </div>
  )
}
