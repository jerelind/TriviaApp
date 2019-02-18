import React from 'react'
import HomeScreen from './components/HomeScreen'
import QuestionScreen from './components/QuestionScreen'
import {Icon} from 'semantic-ui-react'
import axios from 'axios'
import EndScreen from './components/EndScreen'
import CorrectScreen from './components/CorrectScreen'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gameOn: false,
      question: null,
      questionOptions: null,
      previousCorrectAnswer: null,
      answer: null,
      category: null,
      difficulty: null,
      answerRight: null,
      points: 0,
      answerCounter: 0,
      rightAnswers: 0,
      wrongAnswers: 0,
      wrongStreak: 0,
      rightStreak: 0,
      sessionToken: null
    }
  }
  //fetch sessionToken from API - token ensures that duplicate questions won't occur
  componentDidMount() {
    axios.get("https://opentdb.com/api_token.php?command=request")
      .then((response) => {
        this.setState({
          sessionToken: response.data.token
        })
      })
      .catch((error) => {
        console.log(error)
      })   
  }
  
  //fetch question data from API and set data to state
  newQuestion = () => {
    axios.get(`https://opentdb.com/api.php?amount=1&type=multiple&token=${this.state.sessionToken}`)
    .then((response) => {

      let question = response.data.results[0].question.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&pi;/g, "3.14").replace(/&amp;/g, "&").replace(/&ouml;/g, "ö").replace(/&eacute;/g, "é")
      let answer = response.data.results[0].correct_answer.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&pi;/g, "3.14").replace(/&amp;/g, "&").replace(/&ouml;/g, "ö").replace(/&eacute;/g, "é")
      let category = response.data.results[0].category
      let questionOptions = [response.data.results[0].correct_answer.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&pi;/g, "3.14").replace(/&amp;/g, "&").replace(/&ouml;/g, "ö").replace(/&eacute;/g, "é"), response.data.results[0].incorrect_answers[0].replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&pi;/g, "3.14").replace(/&amp;/g, "&").replace(/&ouml;/g, "ö").replace(/&eacute;/g, "é"), response.data.results[0].incorrect_answers[1].replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&pi;/g, "3.14").replace(/&amp;/g, "&").replace(/&ouml;/g, "ö").replace(/&eacute;/g, "é"), response.data.results[0].incorrect_answers[2].replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&pi;/g, "3.14").replace(/&amp;/g, "&").replace(/&ouml;/g, "ö").replace(/&eacute;/g, "é")]
      let correctAnswer = response.data.results[0].correct_answer.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&pi;/g, "3.14").replace(/&amp;/g, "&").replace(/&ouml;/g, "ö").replace(/&eacute;/g, "é")
      let difficulty = response.data.results[0].difficulty
      console.log(correctAnswer)
      //shuffle questionOptions
      for (let i = questionOptions.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = questionOptions[i]
        questionOptions[i] = questionOptions[j]
        questionOptions[j] = temp
      }
      this.setState({
        question: question,
        answer: answer,
        category: category,
        questionOptions: questionOptions,
        difficulty: difficulty,
        correctAnswer: correctAnswer,
        gameOn: true
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  reset = () => {
    this.setState({
      gameOn: false,
      answerRight: null,
      previousCorrectAnswer: "",
      rightAnswers: 0,
      wrongAnswers: 0,
      answerCounter: 0,
      points: 0,
      wrongStreak: 0,
      rightStreak: 0
    })
  }

  check = (event) => {
    if(this.state.answer === event.target.value) {
      switch(this.state.difficulty) {
        case "easy":
        this.setState({
          answerRight: true,
          rightAnswers: this.state.rightAnswers + 1,
          points: this.state.points + 1,
          answerCounter: this.state.answerCounter + 1,
          rightStreak: this.state.rightStreak + 1,
          wrongStreak: 0
        })
        break;
        case "medium":
        this.setState({
          answerRight: true,
          rightAnswers: this.state.rightAnswers + 1,
          points: this.state.points + 3,
          answerCounter: this.state.answerCounter + 1,
          rightStreak: this.state.rightStreak + 1,
          wrongStreak: 0
        })
        break;
        case "hard":
        this.setState({
          answerRight: true,
          rightAnswers: this.state.rightAnswers + 1,
          points: this.state.points + 5,
          answerCounter: this.state.answerCounter + 1,
          rightStreak: this.state.rightStreak + 1,
          wrongStreak: 0
        })
        break;
      }
      setTimeout(() => {
        this.setState({
          answerRight: null
        })
      }, 2000)
      this.newQuestion()
    } else {
      switch(this.state.difficulty) {
        case "easy":
        this.setState({
          answerRight: false,
          previousCorrectAnswer: this.state.answer,
          wrongAnswers: this.state.wrongAnswers + 1,
          points: this.state.points - 2,
          answerCounter: this.state.answerCounter + 1,
          wrongStreak: this.state.wrongStreak + 1,
          rightStreak: 0
        })
        break;
        case "medium":
        this.setState({
          answerRight: false,
          previousCorrectAnswer: this.state.answer,
          wrongAnswers: this.state.wrongAnswers + 1,
          points: this.state.points - 1,
          answerCounter: this.state.answerCounter + 1,
          wrongStreak: this.state.wrongStreak + 1,
          rightStreak: 0
        })
        break;
        case "hard":
        this.setState({
          answerRight: false,
          previousCorrectAnswer: this.state.answer,
          wrongAnswers: this.state.wrongAnswers + 1,
          answerCounter: this.state.answerCounter + 1,
          wrongStreak: this.state.wrongStreak + 1,
          rightStreak: 0
        })
        break;
      }
      setTimeout(() => {
        this.setState({
          answerRight: null
        })
      }, 2000)
      this.newQuestion()
    }
  }

  // conditional rendering
  render() {

    if(this.state.points >= 50 && this.state.wrongStreak === 3) {
      return(
        <EndScreen 
        reset={this.reset} 
        scoreRight={this.state.rightAnswers} 
        scoreWrong={this.state.wrongAnswers} 
        score={this.state.points}
        endText="YOU ARE THE LEGENDARY GRANDMASTER"
        iconColor="yellow"
        iconName="trophy"
        />
      )
    }

    if(this.state.points >= 30 && this.state.wrongStreak === 3) {
      return(
        <EndScreen 
        reset={this.reset} 
        scoreRight={this.state.rightAnswers} 
        scoreWrong={this.state.wrongAnswers} 
        score={this.state.points}
        endText="200IQ gameplay!"
        iconColor="grey"
        iconName="trophy"
        />
      )
    }

    if(this.state.points >= 20 && this.state.wrongStreak === 3) {
      return(
        <EndScreen 
        reset={this.reset} 
        scoreRight={this.state.rightAnswers} 
        scoreWrong={this.state.wrongAnswers} 
        score={this.state.points}
        endText="You are a great mind!"
        iconColor="brown"
        iconName="trophy"
        />
      )
    }

    if(this.state.points >= 0 && this.state.wrongStreak === 3) {
      return(
        <EndScreen 
        reset={this.reset} 
        scoreRight={this.state.rightAnswers} 
        scoreWrong={this.state.wrongAnswers} 
        score={this.state.points}
        endText="GG WP!"
        iconColor="violet"
        iconName="trophy"
        />
      )
    }

    if(this.state.points < 0 && this.state.wrongStreak === 3) {
      return(
        <EndScreen 
        reset={this.reset} 
        scoreRight={this.state.rightAnswers} 
        scoreWrong={this.state.wrongAnswers}
        score={this.state.points}
        endText="You had three (3) wrong answers in a row with negative score."
        iconColor="black"
        iconName="thumbs down"
        />
      )
    }

    switch(this.state.gameOn) {
      default:
        return(
          <HomeScreen newQuestion={this.newQuestion}/>
        )

      case true:
        let categoryName = null
        console.log(this.state.category)

      //set categoryName value according to API data (this.state.category)
      switch(true) {
        default:
        break;
        case this.state.category.startsWith("Any") || this.state.category.startsWith("General"):
          categoryName = <Icon size="big" color="black" name="question"/>
          break;
        case this.state.category.startsWith("Geography"):
          categoryName = <Icon size="big" color="blue" name="world"/>
          break;
        case this.state.category.startsWith("History"):
          categoryName = <Icon size="big" color="yellow" name="hourglass end"/>
          break;
        case this.state.category.startsWith("Science") || this.state.category.startsWith("Animals"):
          categoryName = <Icon size="big" color="green" name="tree"/>
          break;
        case this.state.category.startsWith("Entertainment: Video Games"):
          categoryName = <Icon size="big" color="purple" name="gamepad"/>
          break;
        case this.state.category.startsWith("Entertainment: Television") || this.state.category.startsWith("Entertainment: Film"):
          categoryName = <Icon size="big" color="pink" name="tv"/>
          break;
        case this.state.category.startsWith("Art") || this.state.category.startsWith("Mythology") || this.state.category.startsWith("Politics") || this.state.category.startsWith("Entertainment: Books") || this.state.category.startsWith("Entertainment: Comics") || this.state.category.startsWith("Entertainment: Japanese Anime & Manga"):
          categoryName = <Icon size="big" color="brown" name="book"/>
          break;
        case this.state.category.startsWith("Sports") || this.state.category.startsWith("Vehicles"):
          categoryName = <Icon size="big" color="orange" name="soccer"/>
          break;
        case this.state.category.startsWith("Entertainment") || this.state.category.startsWith("Celebrities"):
          categoryName = <Icon size="big" color="pink" name="music"/>
          break;
      }

      if(this.state.answerRight !== null) {
        return(
        <CorrectScreen 
          answerRight={this.state.answerRight} 
          previousCorrectAnswer={this.state.previousCorrectAnswer}
          rightStreak={this.state.rightStreak}
          difficulty={this.state.difficulty}
        />
        )
      } else {
        return(
          <QuestionScreen 
          question={this.state.question}
          reset={this.reset}
          categoryName={categoryName}
          questionOptions={this.state.questionOptions}
          answerRight={this.state.answerRight}
          checkAnswer={this.check}
          scoreRight={this.state.rightAnswers}
          scoreWrong={this.state.wrongAnswers}
          previousCorrectAnswer={this.state.previousCorrectAnswer}
          difficulty={this.state.difficulty}
          score={this.state.points}
          />
        )
      }
    }
  }
}

export default App