  // src/components/AwesomeAnimals.js
import React from "react";

export default class AwesomeAnimals extends React.Component {
  state = {
    animalsByAwesomeness: [
      "Chicken",
      "Sloth",
      "Porcupine",
      "Killer whale",
      "Velociraptor"
    ]
  }

  render () {
    return (
      <ul>
        {this.state.animalsByAwesomeness.map((animal, index) => (
          <li>Level {index +1 }: {animal}</li>
        ))}
      </ul>
    );
  }
}