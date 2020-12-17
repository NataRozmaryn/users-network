import React, { Component } from 'react';

const withFetchData = (getDataFunc, accumulateData = false) => (WrappedComponent) => {
    return class WithFetchData extends Component {
        state = {
            data: [],
            loading: false,
            error: null,
        };

        fetchData(prevState) {
            const prevStateData = prevState || []
            this.setState({ loading: true });
            const getData = getDataFunc(this.props.page);
            getData
                .then(res => {
                    console.log('users list from fetch', res.data);
                    return this.setState({
                        data: this.props.accumulateData ? [...prevStateData, ...res.data] : res.data
                    });
                })
                .catch((error) => this.setState({ error }))
                .finally(() => this.setState({ loading: false }));
        }
        componentDidMount() {
            this.fetchData();
        }
        componentDidUpdate(prevProps, prevState) {
            console.log("updateprevProps", prevProps.page);
            console.log("updateprevState", prevState);
            if (prevProps.page !== this.props.page) {
                this.fetchData(prevState.data);
            }
        }

        render() {
            return <WrappedComponent {...this.props} {...this.state} />;
        }
    };
};

export default withFetchData;