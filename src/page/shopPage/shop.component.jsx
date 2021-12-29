import react from 'react';

import SHOP_DATA from './shop.data.js';
import CollectonPreview from '../../component/preview-collection/preview-collection.component.jsx';

class ShopPage extends react.Component{
	constructor(props){
		super();

		this.state = {
			collections: SHOP_DATA
		};
	}
render(){
	const {collections} = this.state;
	return (<div className='shop-page'>
			{
				collections.map(({id, ...otherCollectionProps}) => (
					<CollectonPreview key={id} {...otherCollectionProps} />
					))
			}
		</div>);
}
}


export default ShopPage;