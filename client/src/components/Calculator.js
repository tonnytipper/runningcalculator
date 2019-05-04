import React, { Component } from 'react'

class Calculator extends Component {    
    constructor() {
        super();
        this.state = { name: 'Guest', miles: 0, reward: "Bicycle" };
        this.submitMiles = this.submitMiles.bind(this);
        this.submitChange = this.submitChange.bind(this);
        this.blur = this.blur.bind(this);
        this.determineReward = this.determineReward.bind(this);
    }

    submitChange(e){
        this.setState({miles: e.target.value});
        e.preventDefault();
    }

    blur(e){
        this.determineReward();
    }

    determineReward(){
        var miles = this.state.miles;
        var reward = "";
        if( miles < 1){
            reward = "Bicycle";
        }
        else if(miles >= 1 && miles <= 3){
            reward = "Motorbike";
        }
        else if(miles > 3){
            reward = "Car";
        }
        this.setState({reward: reward});

    }

    submitMiles(e) {
        e.preventDefault();
        this.determineReward();
    }

    render() {
        return (
            <div className="calculator">
                <form onSubmit={this.submitMiles}>
                    <label>Enter the miles you ran:</label>
                    <div>
                        <input type="text" name="miles" value={this.state.miles} onBlur={this.blur} onChange={this.submitChange}   />                  
                        <input type="submit" value="Submit"/>
                    </div>
                    <label className="reward-msg">Your reward is a </label>
                    <label className="reward">{this.state.reward} </label>
                </form>
            </div>

        );
    }
}

export default Calculator;