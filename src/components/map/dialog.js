import React from "react";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

export default class LegendDialog extends React.Component {

    render() {

        return (
            <Dialog onClose={this.props.onClose} open={this.props.open}>
                 <DialogTitle id="simple-dialog-title" style={{textAlign: "center"}}>Map Legend</DialogTitle>
                 <div className="dialog-body">
                     <h3> <div className="circle circle10"></div> &gt; 1 000 000 - 5 000 000 </h3>
                     <h3> <div className="circle circle2"></div> &gt; 500 000 - 1 000 000 </h3>
                     <h3> <div className="circle circle3"></div> &gt; 400,000 – 500,000</h3>
                     <h3> <div className="circle circle4"></div> &gt; 100,000 – 250,000</h3>
                     <h3> <div className="circle circle5"></div> &gt; 50,000 – 100,000</h3>
                     <h3> <div className="circle circle6"></div> &gt; 3,000 – 20,000</h3>
                     <h3> <div className="circle circle7"></div> &gt; 1 – 1,000</h3>
                 </div>

            </Dialog>
        )
    }

}
