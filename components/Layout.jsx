
import { Component } from "react"
import styles from "../styles/Layout.module.css"
export default class Layout extends Component{

    state = {
        /*
        estado recebe duas propriedade 
        numero e contador
        caso o numero nao receba nenhuma valor ele 
        inicia com o valor 0
        caso o contador nao receba nenum valor
        ele inicia com 1
        */
        number: this.props.inicialValue ?? 0,
        count: this.props.count ?? 1
    }

    increment = () =>{
        //acessando o estado e incrementando nele
        //usando o numero passado na propriedade do estado (Count)
        this.setState({
            number: this.state.number + this.state.count
        })
    }
    decrement = () =>{
        //acessando o estado e decrementando nele
        //usando o numero passado na propriedade do estado (Count)
        this.setState({
            number: this.state.number - this.state.count
        })
    }
    renderForm(){
        return (
            <div className={styles.contentButtons}>
            <input className={styles.inputNumber} type="number" min={1} max={1000} onChange={ev => this.setState({count: +ev.target.value})} />
            <div className={styles.buttons}>
                <button className={styles.btn} onClick={this.increment}> + </button>
                <button className={styles.btn} onClick={this.decrement}> - </button>
            </div>
        </div>
        )
    }
    render(){
        return (
            <div className={styles.container}>
                <h1>simple class-based counter</h1>
                <div className={styles.display}>
                    {this.state.number}
                </div>
                {this.renderForm()}    
            </div>
        )
    }

}