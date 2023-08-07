import React from 'react'
import './group.css'
import { useNavigate } from 'react-router-dom'
export default function MainGroup() {
    const navigate=useNavigate();
  return (
    <div className='documentation-container'>
        <h1>DISCUSSION GROUPS</h1>
        <div class="ag-format-container">
  <div class="ag-courses_box">
    <div class="ag-courses_item">
      <div onClick={()=>{navigate("/group/Frontend-REACTJS")}} class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          WEB&#160;DEVELOPMENT&#160;
        </div>

        <div class="ag-courses-item_date-box">
          Tech:
          <span class="ag-courses-item_date">
            REACTJS
          </span>
        </div>
      </div>
    </div>
        
            <div class="ag-courses_item">
              <div onClick={()=>{navigate("/group/DataStructure & Algorithm")}} class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
        
                <div class="ag-courses-item_title">
                  DSAlgo
                </div>
        
                <div class="ag-courses-item_date-box">
                  Language:
                  <span class="ag-courses-item_date">
                    C++/JAVA
                  </span>
                </div>
              </div>
            </div>

    <div class="ag-courses_item">
      <div onClick={()=>{navigate("/group/Backend-NODEJS")}} class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Backend &#160;Development
        </div>

        <div class="ag-courses-item_date-box">
          Tech:
          <span class="ag-courses-item_date">
            NODEJS
          </span>
        </div>
      </div>
    </div>

    <div class="ag-courses_item">
      <div onClick={()=>{navigate("/group/Android DEVELOPMENT")}} class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Android Development
        </div>

        {/* <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            04.11.2022
          </span>
        </div> */}
      </div>
    </div>

    <div class="ag-courses_item">
      <div onClick={()=>{navigate("/group/UI&UX")}} class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          UI&UX
        </div>

        {/* <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            04.11.2022
          </span>
        </div> */}
      </div>
    </div>

    {/* <div class="ag-courses_item">
      <div onClick={()=>{navigate("/group/")}} class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Front-end development&#160;+ jQuery&#160;+ CMS
        </div>
      </div>
    </div>

    <div class="ag-courses_item">
      <div onClick={()=>{navigate("/group/")}} class="ag-courses-item_link">
        <div class="ag-courses-item_bg">
        </div>
        <div class="ag-courses-item_title">
          Digital Marketing
        </div>
      </div>
    </div>

    <div class="ag-courses_item">
      <div onClick={()=>{navigate("/group/")}} class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Interior Design
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
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
