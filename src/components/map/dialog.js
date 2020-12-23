import React from "react";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

export default class LegendDialog extends React.Component {

    render() {
        const dialogStyle = {
            background: 'red',
            color: "red",
        }

        return (
            <Dialog className={dialogStyle} onClose={this.props.onClose} open={this.props.open}>
                 <DialogTitle id="simple-dialog-title" style={{textAlign: "center"}}>Map Legend</DialogTitle>
                 <div className="dialog-body">
                     <h3> <div className="circle circle10"></div> > 1 000 000 - 5 000 000 </h3>
                     <h3> <div className="circle circle2"></div> > 500 000 - 1 000 000 </h3>
                     <h3> <div className="circle circle3"></div> > 400,000 – 500,000</h3>
                     <h3> <div className="circle circle4"></div> > 100,000 – 250,000</h3>
                     <h3> <div className="circle circle5"></div> > 50,000 – 100,000</h3>
                     <h3> <div className="circle circle6"></div> > 3,000 – 20,000</h3>
                     <h3> <div className="circle circle7"></div> > 1 – 1,000</h3>
                 </div>

            </Dialog>
        )
    }

}
