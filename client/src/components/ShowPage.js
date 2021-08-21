import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProduct, deleteProduct } from '../actions/index';

class ShowPage extends React.Component {
	componentDidMount() {
		const { match } = this.props;
		this.props.fetchProduct(match.params.id);
	}

	render() {
		const { product } = this.props;
		return (
			<div>
				<h1>{product.name}</h1>
				<ul>
					<li>${product.price}</li>
					<li>{product.category}</li>
				</ul>
				<button style={{ background: 'lightblue' }}>
					<Link to="/">Home</Link>
				</button>
				<button style={{ background: 'lightgreen', marginLeft: '20px' }}>
					<Link to={`/products/${product._id}/edit`}>Edit</Link>
				</button>
				<button
					onClick={() => {
						this.props.deleteProduct(product._id);
					}}
					style={{ background: 'red', marginLeft: '20px' }}
				>
					DELETE
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { product: state.product, match: ownProps.match };
};

export default connect(mapStateToProps, { fetchProduct, deleteProduct })(ShowPage);
