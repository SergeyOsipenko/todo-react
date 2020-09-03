import React from 'react';
import './Board.css';
import DoingsEnter from '../DoingsEnter/DoingsEnter';
import Doing from '../Doing/Doing';
import Footer from '../Footer/Footer';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doings: [{value: "todo", isCompleted: false}],
            filteredBy: "All"
        }
    }

    handelToggleAll(event) {
        event.persist();
        const doings = this.state.doings.slice();
        doings.forEach(doing => doing.isCompleted = event.target.checked);

        this.setState({
            doings: doings
        });
    }

    handelAddRow(event) {
        event.persist();
        if(event.key !== "Enter" || !event.target.value)
            return;

        const doings = this.state.doings.slice();
        const doing = {value: event.target.value, isCompleted: false};
        event.target.value = "";
        
        this.setState({
            doings: doings.concat([doing])
        });
    }

    handelDeleteRow(index){
        const doings = this.state.doings.slice();
        doings.splice(index, 1);

        this.setState({
            doings: doings
        });
    }

    handelChangeStatusRow(index) {
        const doings = this.state.doings.slice();
        doings[index].isCompleted = !doings[index].isCompleted;

        this.setState({
            doings: doings
        });
    }

    handelFilterClick(event) {
        event.persist();
        const filter = event.target.innerHTML;

        this.setState({
            filteredBy: filter
        });
    }

    handelClearClick(){
        const doings = this.state.doings.filter(doing => !doing.isCompleted);

        this.setState({
            doings: doings
        });
    }

    createList(){
        let filteredDoings = null;
        switch(this.state.filteredBy){
            case "Active":
                filteredDoings = this.state.doings.filter(doing => !doing.isCompleted);
                break;
            case "Completed":
                filteredDoings = this.state.doings.filter(doing => doing.isCompleted);
                break;
            default :
                filteredDoings = this.state.doings;
        }

        return filteredDoings.map((doing, index) => {
            return (
                <li key={index}>
                    <Doing
                        value={doing.value}
                        status={doing.isCompleted}
                        onDeleteRow={() => this.handelDeleteRow(index)}
                        onChangeStatusRow={() => this.handelChangeStatusRow(index)}
                    />
                </li>
            );
        });
    }

    createFooter(){
        if(this.sequenceHasElements()){
            return(
                <Footer
                    itemsNumber={this.getLeftItemsNumber()}
                    filteredBy={this.state.filteredBy}
                    hasCompletedElements={this.sequenceHasCompletedElements()}
                    onFilterClick={(event) => this.handelFilterClick(event)}
                    onClearClick={() => this.handelClearClick()}
                />
            );
        }
    }

    sequenceHasElements(){
        return this.state.doings.length > 0;
    }

    sequenceHasCompletedElements(){
        return this.state.doings.filter(doing => doing.isCompleted).length > 0;
    }

    getLeftItemsNumber(){
        return this.state.doings.filter(doing => !doing.isCompleted).length;
    }

    render() {
        return (
            <div className="Board">
                <DoingsEnter
                    onAddRow={(event) => this.handelAddRow(event)}
                    onToggleAll={(event) => this.handelToggleAll(event)}
                    hasElements={this.sequenceHasElements()}
                />
                <ul className="todo-list">
                    {this.createList()}
                </ul>
                {this.createFooter()}
            </div>
        )
    }
}

export default Board;