import React from "react";
import { CardTitle, CardText, Row, Col, Button, Card } from "reactstrap";
import "../App.css";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  const nextPage = (page) => {
    navigate("/"+page);
  }

  return (
    <div>
        <Button onClick={()=>{nextPage("page01")}} color="primary">
            <h5>บทที่ 1</h5>
        </Button><br/>
        <Button onClick={()=>{nextPage("page02")}} color="primary">
            <h5>บทที่ 2</h5>
        </Button><br/>
        <Button onClick={()=>{nextPage("page03")}} color="primary">
            <h5>บทที่ 3</h5>
        </Button><br/>
        <Button onClick={()=>{nextPage("page04")}} color="primary">
            <h5>บทที่ 4</h5>
        </Button><br/>
        <Button onClick={()=>{nextPage("page05")}} color="primary">
            <h5>บทที่ 5</h5>
        </Button><br/>
        <Button onClick={()=>{nextPage("page05")}} color="primary">
            <h5>บทที่ 6</h5>
        </Button><br/>
        
    </div>
  );
}

export default Home;
