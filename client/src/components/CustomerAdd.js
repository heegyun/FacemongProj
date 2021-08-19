import React from 'react';
import {post} from 'axios';

class CustomerAdd extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            file : null, 
            breed : "",
            name : "",
            size : "",
            gender : "",
            age : "",
            fileName : "" 
        }

    }

    handleFormSubmit = (e) =>{
        e.preventDefault()
        this.addCustomer()
        .then((response)=>{
            console.log(response.data);
            this.props.stateRefresh();
        })

        this.setState({
            file:null,
            breed : "",
            name : "",
            size : "",
            gender : "",
            age : "",
            fileName : "" 
        })
       
    }

    handleFileChange  = (e) =>{
        this.setState({
            file: e.target.files[0],
            fileName : e.target.value
        })
    }
    
    handleValueChange = (e) =>{
        let nextState = {};
        nextState[e.target.name] = e.target.name;
        this.setState(nextState);

    }


    addCustomer = () =>{
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('breed', this.state.breed);
        formData.append('name', this.state.birthday);
        formData.append('size', this.state.size);
        formData.append('gender', this.state.gender);
        formData.append('age', this.state.age);
        const config = {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

  


    render(){
        return(
            <form onSubmit = {this.handleFormSubmit}>
                <h1>고객 추가</h1>
                프로필 이미지: <input type="file" name = "file" file = {this.state.file} value ={this.state.fileName} onChange = {this.handleFileChange}/><br/>
                품종명: <input type="text" name = "breed" value ={this.state.breed} onChange = {this.handleValueChange}/><br/>
                이름: <input type="text" name = "name" value={this.state.name} onChange = {this.handleValueChange}/><br/>
                크기: <input type="text" name = "size" value={this.state.size} onChange = {this.handleValueChange}/><br/>
                성별: <input type = "text" name = "gender" value = {this.state.gender} onChange = {this.handleValueChange}/><br/>
                나이: <input type = "text" name = "age" value = {this.state.age} onChange = {this.handleValueChange}/><br/>
                <button type = "submit">추가하기</button>
            </form>
        );
    }
}

export default CustomerAdd;