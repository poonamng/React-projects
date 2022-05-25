import React from "react";
import Emoji from'../Emoji.json';
export default class Emoj extends React.Component{
    constructor(){
        super()
        this.state={
            Emojisearch:""
        }
    }
    Emojisearch=(e)=>{
        this.setState({
            Emojisearch:e.target.value
        })
    }
    render(){
        return(
            <div style={{textAlign:"center"}} className="search">
                <h1>Emoji Search App</h1>
                <input type="text" placeholder="Enter Your Feeling....." onChange={this.Emojisearch} />
                
                {Emoji.filter(Emoji=>{
                    return(
                        
                        Emoji.title.toLowerCase().includes(this.state.Emojisearch.toLowerCase())||
                        Emoji.symbol.toLowerCase().includes(this.state.Emojisearch.toLowerCase())      
                    )
                }).map(Emoji=>{
                      return(
                            <div>
                                <>
                              <h1>  {Emoji.symbol}
                              {Emoji.title}
                              </h1>
                              </>
                            </div>  
                        )}
                )}    
                
            </div>
                      
        )
    }
}
           