import React from 'react'

export default class AddService extends React.Component{
    constructor(){
        super()
        this.state = {
            title:'',
            body:'',
            icon:'',
            message:'',
            is_error:false
        }
    }
    onFormSubmit = (evt) =>{ 
        console.log('good');
        const body = this.state.body
        const title = this.state.title
        const icon = this.state.icon

        fetch('/new?title='+title+'&body='+body+'&icon='+icon)
            .then( (response) => response.json() )
            .then( response => {
                if(response.status===200){
                    this.setState({message:'service added, thank you you\'re cool'})
                }else{
                    this.setState({is_error:true,message:response.message})
                }
            })
        evt.preventDefault()
    }
    onTitleChange = (evt) => {
        const value = evt.target.value
        this.setState({ title: value })
    }
    onBodyChange = (evt) => {
        const value = evt.target.value
        this.setState({ body: value })
    }
    onIconChange = (evt) => {
        const value = evt.target.value
        this.setState({ icon: value })
    }
    render(){
        const is_error = this.state.is_error
        const message = this.state.message
        const body = this.state.body
        const title = this.state.title
        const icon = this.state.icon
        return (
        <section className="inner">
        <section className="content">
        <section className="row">
            { is_error
            ? <div className="error">{message}</div>
            : <div className="flash">{message}</div>
            }
            <form onSubmit={this.onFormSubmit}>
            <section className="col-12">
                <label>Icon</label>
                <select name="icon" onChange={this.onIconChange} value={icon}>
                    <option value="vcard">Vcard</option>
                    <option value="files">Files</option>
                </select>
            </section>
            <section className="col-12">
                <label>Title</label>
                <input type="text" name="title" onChange={this.onTitleChange} value={title}/>
            </section>
            <section className="col-12">
                <label>Body</label>
                <textarea name="body" onChange={this.onBodyChange} value={body}/>
                <button>Ok</button>
            </section>
            </form>
        </section>
        </section>
        </section>
        )
    }
}