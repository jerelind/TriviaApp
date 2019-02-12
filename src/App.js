import React from 'react'
import HomeScreen from './components/HomeScreen'
import QuestionScreen from './components/QuestionScreen'
import {Icon, Button, Container} from 'semantic-ui-react'
import axios from 'axios'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gameOn: false,
      question: null,
      allQuestionOptions: null,
      answer: null,
      category: null,
      answerRight: null,
      rightAnswers: 0,
      wrongAnswers: 0,
      sessionToken: null
    }
  }
  
  //haetaan sessionToken APIsta - token varmistaa, ettei samaa kysymystä kysytä toista kertaa
  componentDidMount() {
    axios.get("https://opentdb.com/api_token.php?command=request")
      .then((response) => {
        this.setState({
          sessionToken: response.data.token
        })
      })
  }

  // haetaan kysymys open trivia DB -APIsta ja asetetaan arvot stateen
  newQuestion = () => {

    axios.get(`https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple&token=${this.state.sessionToken}`)
    .then((response) => {
      this.setState({
        question: response.data.results[0].question,
        answer: response.data.results[0].correct_answer,
        category: response.data.results[0].category,
        allQuestionOptions: [response.data.results[0].correct_answer, response.data.results[0].incorrect_answers[0], response.data.results[0].incorrect_answers[1], response.data.results[0].incorrect_answers[2]],
        gameOn: true,
        answerRight: null
      })
    })
  }

  reset = () => {

    this.setState({
      gameOn: false,
      rightAnswers: 0,
      wrongAnswers: 0
    })
  }

  check = (event) => {

    if(this.state.answer === event.target.value) {
      this.setState({
        answerRight: true,
        rightAnswers: this.state.rightAnswers + 1
      })
      setTimeout(() => {
        this.newQuestion()
      }, 2000)
    } else {
      this.setState({
        wrongAnswers: this.state.wrongAnswers + 1
      })
    }
  }

  // ehdollinen renderöinti 
  render() {

    if(this.state.rightAnswers === 10) {
      return(
        <Container style={alignCenter}>
          <div id="questionHeader">
            Perfect!
          </div>
          <Button color="blue" style={playAgainButton} onClick={this.reset}>Play again</Button>
        </Container>
      )
    }

    if(this.state.wrongAnswers === 10) {
      return(
        <Container style={alignCenter}>
          <div id="questionHeader">
            Too many wrong answers.
          </div>
          <Button color="blue" style={playAgainButton} onClick={this.reset}>Play again</Button>
        </Container>
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

      //asetetaan categoryNamen arvo API:n datan kategorian (this.state.category) mukaan
      switch(true) {
        case this.state.category.startsWith("Any") || this.state.category.startsWith("General"):
          categoryName = <Icon color="yellow" name="huge smile"/>
          break;
        case this.state.category.startsWith("Geography"):
          categoryName = <Icon color="blue" name="huge world"/>
          break;
        case this.state.category.startsWith("History"):
          categoryName = <Icon color="yellow" name="huge hourglass end"/>
          break;
        case this.state.category.startsWith("Science") || this.state.category.startsWith("Animals"):
          categoryName = <Icon color="green" name="huge tree"/>
          break;
        case this.state.category.startsWith("Art") || this.state.category.startsWith("Mythology") || this.state.category.startsWith("Politics"):
          categoryName = <Icon color="brown" name="huge book"/>
          break;
        case this.state.category.startsWith("Sports") || this.state.category.startsWith("Vehicles"):
          categoryName = <Icon color="orange" name="huge soccer"/>
          break;
        case this.state.category.startsWith("Entertainment") || this.state.category.startsWith("Celebrities"):
          categoryName = <Icon color="pink" name="huge music"/>
          break;
      }

      return(
        <QuestionScreen 
        question={this.state.question}
        reset={this.reset}
        categoryName={categoryName}
        questionOptions={this.state.allQuestionOptions}
        answerRight={this.state.answerRight}
        checkAnswer={this.check}
        score={this.state.rightAnswers}
        />
      )
    }
  }
}

const alignCenter = {
  textAlign: "center",
  marginTop: "300px"
}

const playAgainButton = {
  marginTop: "20px"
}

export default App