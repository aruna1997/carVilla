import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import rightChevron from './images/right-chevron.png';
import leftChevron from './images/left-chevron.png';
 
export default class Test extends React.Component {
 
  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
    });
 
    setTimeout(() => {
      this.setState({
        children: this.createChildren(4),
      })
    }, 1000); 
    /* this.setState({
      children: this.createChildren(20),
    }) */
  }
 
  createChildren = n => range(n).map(i =>
    <div key={i} className="car-card">
     <img src={"http://172.18.3.90:3000"+this.props.data[i].image.url} alt={this.props.data[i].name+"image"} className="img-responsive" style={{width:'350px',height:'200px'}}/>
     <h2 className="car-name">{this.props.data[i].name.toUpperCase()}</h2>
     <div>
     <span className="car-location">&#x20b9;{(this.props.data[i].price/100000).toFixed(2)}Lakh</span>
     <br/><span className="subtitle">Estimated price</span>
     </div>
     <span className="car-location">{this.props.data[i].location.toUpperCase()}</span>
     <br/><span className="subtitle">Location</span>
     </div>);
 
  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });
 
  render() {
    const {
      activeItemIndex,
      children,
    } = this.state;
   console.log('props',this.props);

    return (
      <ItemsCarousel
        numberOfCards={3}
        gutter={12}
        showSlither={true}
        firstAndLastGutter={true}
        freeScrolling={false}
 
        // Active item configurations
        requestToChangeActive={this.changeActiveItem}
        activeItemIndex={activeItemIndex}
        activePosition={'center'}
 
        chevronWidth={30}
        rightChevron={<img src={leftChevron} alt="leftchevron" className="img-responsive"/>}
        leftChevron={<img src={rightChevron} alt="rightchevron" className="img-responsive"/>}
        outsideChevron={false}
      >
        {children}
      </ItemsCarousel>
    );  
  }
} 