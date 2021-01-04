import React from "react";
import MaterialIcon from "material-icons-react";
import LegendDialog from "./dialog"

export default class Legend extends React.Component {

    state = {
        isOpen: false
    }

    handleClickOpen = () => {
        this.setState({ isOpen: true })
    }

    handleClose = () => {
        this.setState({ isOpen: false })
    }

    render () {

        return (
            <div className="legend">
                <MaterialIcon  icon="list" color='black' size={50} onClick={this.handleClickOpen} />
                <LegendDialog open={this.state.isOpen} onClose={this.handleClose} />
            </div>
        )
    }
}
