const TransactionForm = () => {
  return (
    <form>
      <label>
        <p>Date</p>
        <input type="date" />
        <input type="time" />
      </label>
      <label>
        <p>Категорії</p>
        <input type="button" />
      </label>
      <label>
        <p>Сума</p>
        <input type="text" placeholder="Ведіть суму" />
      </label>
      <label>
        <p>Валюта</p>
        <input type="button" value="UHA" />
        <input type="text" />
      </label>
      <label>
        <input type="text" placeholder="Коментар" />
      </label>
    </form>
  );
};

export default TransactionForm;
