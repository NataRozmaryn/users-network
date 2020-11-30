import React, {Component} from 'react';

class Button extends Component {
	state = {
		page: this.props.page
	}

	showMore = () => {
		this.props.onClick ({
			page: this.state.page + 1
		});
	}
	render(){ console.log('btn', this.props);
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: 'smooth',
		});
		return <button className = "Button" onClick = {this.showMore}> Show More</button>
	}
};

export default Button;