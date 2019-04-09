import React from 'react';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        let state;
        state = {
            channelList: []
        };
        this.state = state;
        this.channelChosen = this.channelChosen.bind(this);

    }

    componentWillMount() {
        // get the information you need to load the channels
        // TODO: setup an axios call to load the channel list for this group.
        this.setState({
            channelList: [{
                id: 1,
                name: 'Hello',
                description: 'This is a channel hello',
                status: 'new'
            }, {
                id: 2,
                name: 'Hello2',
                description: 'This is a channel hello',
                status: 'new'
            }]
        })

    }

    channelChosen(id){
        this.props.setChannel(id);
    }


    render() {
        return (
            <>
                <h2>Sidebar</h2>
                <ul>
                    {
                        this.state.channelList.map((data) => {

                            return (
                                <li key={data.objectId} onClick={this.channelChosen(data.id)}>{data.name}</li>
                            )
                        })
                    }
                </ul>

            </>
        )
    }
}

export default Sidebar;