import React, { Component } from 'react';

const withFetchData = (getDataFunc, page) => (WrappedComponent) => {
    return class WithFetchData extends Component {
        state = {
            data: [],
            loading: false,
            error: null,
        };

        componentDidMount() {
            this.setState({ loading: true });
            const getData = getDataFunc(page);
            getData.then(res => {
                console.log('users list', res.data);
                return this.setState({
                    data: res.data
                });
            })
                .catch((error) => this.setState({ error }))
                .finally(() => this.setState({ loading: false }));
        }

        render() {
            return <WrappedComponent {...this.props} {...this.state} />;
        }
    };
};

export default withFetchData;