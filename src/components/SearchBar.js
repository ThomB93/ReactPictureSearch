import React from "react"

class SearchBar extends React.Component {
    state = {term: ""}
    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.term)
    }
    
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field"></div> 
                    <label>Image Search</label>
                    <input type="text" onChange={(e) => this.setState({term: e.target.value})} value={this.state.term}></input>
                </form>
            </div>
        )
    }
}

export default SearchBar