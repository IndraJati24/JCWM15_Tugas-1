import React from 'react'
import Axios from 'axios'
import {
    Card,
    Button
} from 'react-bootstrap'

import Navigation from './componen/navbar'
import Navigationnews from './componen/navbar-news-api'

let URL = 'http://newsapi.org/v2/top-headlines?country=id&apiKey='
let KEY = '12ffd68416ca4037afb947d7663d95e2'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: []
        }
    }

    componentDidMount() {
        Axios.get(URL + KEY)
            .then((res) => {
                console.log(res)
                this.setState({ news: res.data.articles })
            })
            .then((err) => console.log(err))
    }

    showCard = () => {
        return this.state.news.map((item, index) => {
            return (
                <Card style={{ width: '18rem', marginRight: '25px',marginBottom: '15px' }} key= {index}>
                    <Card.Img variant="top" src= {item.urlToImage} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Button href={item.url} variant="primary">Read More</Button>
                    </Card.Body>
                </Card>
            )
        })
    }

    render() {
        console.log(this.state.news)
        return (
            <div>
                <Navigation/>
                <Navigationnews/>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {this.showCard()}
                </div>
            </div>

        );
    }
}

export default App
