import Adapter from 'enzyme-adapter-react-16';
const Enzyme=require('enzyme');
const config=Enzyme.configure({adapter:new Adapter()});
export default config;