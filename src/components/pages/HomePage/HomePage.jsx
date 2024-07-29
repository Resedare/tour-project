import './HomePage.module.scss';
import Tours from './Tours/Tours';
import PopularDirections from '../../PopularDirections/PopularDirections';
import Header from '@layouts/Header/Header';
import Footer from '@layouts/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <Header isMainPage={true} />
      <PopularDirections />
      <Tours />
      <Footer />
    </>
  )
}

export default HomePage