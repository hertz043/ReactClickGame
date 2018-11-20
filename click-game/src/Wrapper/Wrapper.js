import React, { Component } from "react";
import "./Wrapper.css";
import characters from "../character.json";
import CharacterCard from "../CharacterCard/CharacterCard";
import Nav from "../Nav/Nav";


class Wrapper extends Component {

    state = {
      score: 0,
      topScore: 0,
      characters: characters,
      clicked: [],
      status: "Click on the characters below to build up your score, but don't click the same character twice!"
    };

    handleClick = (event) => {
        
        event.preventDefault();
        console.log(event.target)

        let name = event.target.name;
        let array = this.state.clicked;

        if (!this.state.clicked.includes(name)) {

            array.push(name);
            console.log(array)

            let newScore = this.state.score;
            newScore+=1;

            this.setState({status: "Good click, keep going!"})
            this.setState({clicked: array})
            this.setState({score: newScore})

            if (newScore === 12) {
                this.setState({status: `"The key to victory is the element of surprise. Surprise!" - Zapp Brannigan (You Win!)`})
                this.setState({score: 0})
                this.setState({clicked: []})
            }
            
            if (newScore > this.state.topScore) {
                this.setState({topScore: newScore})
            }

        } else {

           this.setState({clicked: []})
           this.setState({status: `"What an idiot I was! And by 'I', I meant 'you'!" - Prof. Farnsworth (You Lose)`})
           this.setState({score: 0})
        }

        let a = this.state.characters;

        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }

        this.setState({characters: a});
    }
  
    render() {
      return (
        <div>
         { <Nav 

            key = {1}
            score = {this.state.score}
            topScore = {this.state.topScore}
            status = {this.state.status}

         />}
          <div className="container" id="card-container">
            <div className="row">
                {
                    this.state.characters.map(
                        character => <CharacterCard 
                            key          ={character.id}
                            id           ={character.id}
                            name         ={character.name}
                            image        ={character.image}
                            handleClick  ={this.handleClick}
                        />
                    ) 
                }
            </div>
          </div>
        </div>
      );
    }
  }

export default Wrapper;