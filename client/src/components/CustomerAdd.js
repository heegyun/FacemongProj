import React from 'react';
import {post} from 'axios';
import Dialog from '@material-ui/core/Dialog';
import  DialogActions  from '@material-ui/core/DialogActions';
import  DialogTitle  from '@material-ui/core/DialogTitle';
import  DialogContent  from '@material-ui/core/DialogContent';
import  TextField   from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

const styles = theme =>({
    hidden : {
        display : 'none'
    }
});

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
            fileName : "" ,
            open : false
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
            fileName : "" ,
            open : false
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

    handleClickOpen = () =>{
        this.setState({
            open : true
        });
    }

    handleClose = () =>{
        this.setState({
            file:null,
            breed : "",
            name : "",
            size : "",
            gender : "",
            age : "",
            fileName : "" ,
            open : false

        })
    }


    render(){
        const { classes } = this.props;
        return(
            <div>
                <Button variant ='contained' color = 'primary' onClick={this.handleClickOpen}>
                    고객 추가하기
                </Button>
                <Dialog open={this.state.open} onClose = {this.handleClose}>
                    <DialogTitle>고객추가</DialogTitle>
                    <DialogContent>
                        <input className = {classes.hidden} accept = "image/*" id = "raised-button-file"type="file" file = {this.state.file} value ={this.state.fileName} onChange = {this.handleFileChange}/><br/>
                        <label htmlFor = "raised-button-file">
                            <Button variant = "contained" color = "primary" component="span" name = "file">
                                {this.state.fileName == "" ? "프로필 이미지 선택" : this.state.fileName}
                            </Button>
                        </label>
                        <br/>
                        <TextField label="품종" type="text" name = "breed" value ={this.state.breed} onChange = {this.handleValueChange}/><br/>
                        <TextField label="이름" type="text" name = "name" value={this.state.name} onChange = {this.handleValueChange}/><br/>
                        <TextField label="크기" type="text" name = "size" value={this.state.size} onChange = {this.handleValueChange}/><br/>
                        <TextField label="성별" type = "text" name = "gender" value = {this.state.gender} onChange = {this.handleValueChange}/><br/>
                        <TextField label="나이" type = "text" name = "age" value = {this.state.age} onChange = {this.handleValueChange}/><br/>

                    </DialogContent>
                    <DialogActions>
                        <Button variant = "contained" color = "primary" onClick = {this.handleFormSubmit}>추가</Button>
                        <Button variant = "outlined" color = "primary" onClick = {this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
           
        );
    }
}

export default withStyles(styles)(CustomerAdd);