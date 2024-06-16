import { Component } from "react";
import ScoreContext from "../../context/ScoreContext";
import GameItem from "../GameItem";
import Cookies from "js-cookie";
import { FaHandsClapping } from "react-icons/fa6";
import { Redirect } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

const imagesList = [
  {
    id: uuidv4(),
    image_url:
      "https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg",
    name: "html",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo-768x480.png",
    name: "css",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    name: "js",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://d3mxt5v3yxgcsr.cloudfront.net/courses/17101/course_17101_image.jpg",
    name: "bs",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://blog.logrocket.com/wp-content/uploads/2023/10/complete-guide-react-refs.png",
    name: "react",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*TY9uBBO9leUbRtlXmQBiug.png",
    name: "node",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://symbols.getvecta.com/stencil_28/61_sql-database-generic.90b41636a8.svg",
    name: "sql",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*3IcLSFuT8PQg4cUBaRXH1A.png",
    name: "python",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/182px-Java_programming_language_logo.svg.png",
    name: "java",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://backendapi.iihtsrt.com/wp-content/uploads/2022/04/CPP.jpg",
    name: "cpp",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/aws-icon.png",
    name: "aws",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://img.freepik.com/free-vector/robotic-artificial-intelligence-technology-smart-lerning-from-bigdata_1150-48136.jpg?size=626&ext=jpg",
    name: "ai",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://1.bp.blogspot.com/-jkSmywQ57sA/Wer3KKSqgaI/AAAAAAAACc4/07TexMsBBI4v7WlVKo76YvxM3TvrMxIdwCLcBGAs/s640/express.js.png",
    name: "express",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://static8.depositphotos.com/1338574/829/i/450/depositphotos_8292951-stock-photo-the-letter-c-in-gold.jpg",
    name: "c",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url: "https://www.castechnologies.co.in/Inner/Dot%20Net.png",
    name: "dotnet",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://images.datacamp.com/image/upload/v1714478776/re388xshtgihucfiiavf.png",
    name: "powerbi",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg",
    name: "html",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo-768x480.png",
    name: "css",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    name: "js",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://d3mxt5v3yxgcsr.cloudfront.net/courses/17101/course_17101_image.jpg",
    name: "bs",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://blog.logrocket.com/wp-content/uploads/2023/10/complete-guide-react-refs.png",
    name: "react",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*TY9uBBO9leUbRtlXmQBiug.png",
    name: "node",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://symbols.getvecta.com/stencil_28/61_sql-database-generic.90b41636a8.svg",
    name: "sql",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*3IcLSFuT8PQg4cUBaRXH1A.png",
    name: "python",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/182px-Java_programming_language_logo.svg.png",
    name: "java",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://backendapi.iihtsrt.com/wp-content/uploads/2022/04/CPP.jpg",
    name: "cpp",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/aws-icon.png",
    name: "aws",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://img.freepik.com/free-vector/robotic-artificial-intelligence-technology-smart-lerning-from-bigdata_1150-48136.jpg?size=626&ext=jpg",
    name: "ai",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://1.bp.blogspot.com/-jkSmywQ57sA/Wer3KKSqgaI/AAAAAAAACc4/07TexMsBBI4v7WlVKo76YvxM3TvrMxIdwCLcBGAs/s640/express.js.png",
    name: "express",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://static8.depositphotos.com/1338574/829/i/450/depositphotos_8292951-stock-photo-the-letter-c-in-gold.jpg",
    name: "c",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url: "https://www.castechnologies.co.in/Inner/Dot%20Net.png",
    name: "dotnet",
    isVisible: false,
    isPartiallyVisible: false,
  },
  {
    id: uuidv4(),
    image_url:
      "https://images.datacamp.com/image/upload/v1714478776/re388xshtgihucfiiavf.png",
    name: "powerbi",
    isVisible: false,
    isPartiallyVisible: false,
  },
];

class GameBoard extends Component {
  state = { score: 0, time: 0, objectDetailsList: imagesList };

  getMins = (time) => {
    const value = Math.floor(time / 60);
    return value < 10 ? `0${value}` : `${value}`;
  };

  getSeconds = (time) => {
    const secs = time % 60;
    return secs < 10 ? `0${secs}` : `${secs}`;
  };

  componentDidMount = () => {
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time + 1 }));
    }, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.timerId);
  };

  updatePartiallyVisibleStatus = (id) => {
    this.setState((prevState) => {
      const updatedList = prevState.objectDetailsList.map((each) => {
        if (each.id === id && !each.isPartiallyVisible && !each.isVisible) {
          return { ...each, isPartiallyVisible: true };
        }
        return each;
      });

      return { objectDetailsList: updatedList };
    }, this.updatePartialVisibleTOVisible);
  };

  get_partial_visible = () => {
    const { objectDetailsList } = this.state;
    const updatedList = objectDetailsList.filter(
      (each) => each.isPartiallyVisible === true
    );
    return updatedList;
  };

  updatePartialVisibleTOVisible = () => {
    const partialVisiblesList = this.get_partial_visible();

    if (partialVisiblesList.length === 2) {
      const [firstItem, secondItem] = partialVisiblesList;
      const isSameImage = firstItem.image_url === secondItem.image_url;

      this.setState((prevState) => {
        const updatedList = prevState.objectDetailsList.map((item) => {
          if (item.id === firstItem.id || item.id === secondItem.id) {
            return {
              ...item,
              isPartiallyVisible: false,
              isVisible: isSameImage ? true : item.isVisible,
            };
          }
          return item;
        });

        return {
          objectDetailsList: updatedList,
          score: prevState.score + (isSameImage ? 1 : -1),
        };
      });
    }
  };

  isGameEnd = () => {
    const { objectDetailsList } = this.state;
    const updatedList = objectDetailsList.filter(
      (each) => each.isVisible === true
    );
    return updatedList.length === 32;
  };

  render() {
    const { score, time, objectDetailsList } = this.state;
    const mins = this.getMins(time);
    const seconds = this.getSeconds(time);
    const username = Cookies.get("username");

    if (this.isGameEnd()) {
      return (
        <ScoreContext.Consumer>
          {(value) => {
            const { updateScore, updateTime } = value;
            const { score, time } = this.state;
            updateScore(score);
            updateTime(time);
            return <Redirect to="/score" />;
          }}
        </ScoreContext.Consumer>
      );
    }

    return (
      <div className="game-page-container">
        <h1 className="mahajong-game-head">Mahajong Game</h1>
        <div className="gb-score-time-container">
          <h1 className="gb-score-time-heading">Score: {score}</h1>
          <h1 className="gb-score-time-heading">
            Time: {mins}:{seconds}
          </h1>
        </div>
        <div className="game-board-container">
          <div className="gb-welcome-user-container">
            <h1 className="gb-welcome-heading">Welcome {username}</h1>
            <FaHandsClapping className="gb-welcome-icon" />
            <FaHandsClapping className="gb-welcome-icon" />
          </div>
          <ul className="gb-objects-container">
            {objectDetailsList.map((each) => (
              <GameItem
                updatePartiallyVisibleStatus={this.updatePartiallyVisibleStatus}
                key={each.id}
                gameDetails={each}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default GameBoard;
