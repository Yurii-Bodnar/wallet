import MaineButtons from './../MaineButtons/MaineButtons';
import Header from '../Header';
import TransactionForm from './../TransactionForm/TransactionForm';
import {CategoryList} from './../data/CategoryList'


const MainePage = props => {
  return (
    <>
      <Header title="Журнал розходів" />
      <main>
        <TransactionForm />
        <MaineButtons />
        <CategoryList/>
      </main>
    </>
  );
};
export default MainePage;
