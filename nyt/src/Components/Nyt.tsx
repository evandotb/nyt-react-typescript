import React, {Component} from 'react';
import NytResults from './NytResults';

type State = {
    search: string,
    startDate: string | number,
    endDate: string | number,
    page: number,
    results: []
}

type Props = {

}


export default class Nyt extends Component<{}, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            search: '',
            page: 0,
            startDate: '',
            endDate: '',
            results: []
        }
    }

    
    fetchResults = (e: any) => {
        e.preventDefault();
        const key = 'Q4VzyZDHiTLidN47dHsdbjjT9XIeK2Ir';
        let baseUrl: string = `https://api.nytimes.com/svc/search/v2/articlesearch.json`;
        let url: string = `${baseUrl}?api-key=${key}&page=${this.state.page}&q=${this.state.search}`
        
        if (this.state.startDate) {
            url = `${url}&start-date=${this.state.startDate}`
            console.log(url)
        }

        if (this.state.endDate) {
            url = `${url}&end-date=${this.state.endDate}`
            console.log(url)
        }

        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    results: json.response.docs
                })
            })
    }

    handleSubmit(e: any) {
        e.preventDefault()
        this.fetchResults(e)
    }

    nextPage(e: any){
        e.preventDefault()
        this.setState({
            page: this.state.page+1
        })
        this.fetchResults(e)
    }

    previousPage(e: any){
        e.preventDefault()
        if(this.state.page > 0) {
        this.setState({
            page: this.state.page-1
        })
        this.fetchResults(e)
    }
}

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit} >
                        <label>Enter search term </label>
                        <input type='text' value={this.state.search} placeholder='Search' onChange={(e) => this.fetchResults(e.target.value)} />
                        <br />
                        <label>Enter start date</label>
                        <input type='date' onChange={(e) => this.fetchResults(e.target.value)} />
                        <br />
                        <label>End Date</label>
                        <input type='date' onChange={(e) => this.fetchResults(e.target.value)} />
                        <button type='submit'>Search</button>
                        <hr />
                        <NytResults results={this.state.results} />
                        <button onClick={(e)=> this.previousPage(e)}>Previous Page</button>
                        <button onClick={(e)=> this.nextPage(e)}>Next Page</button>
                    </form>
                </div>
            </div>
        )
    }
}