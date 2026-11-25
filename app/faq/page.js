export default function FAQPage() {
  return (
    <section>
      <div className="faq-container">
        <h1 className="faq-heading">
          <i className="fas fa-question-circle"></i> Frequently Asked Questions
        </h1>
        {/* <p>This is the FAQ page.</p> */}

        <div className="faq-content question-1">
          {/* Question 1 */}
          <h3 className="faq-sub-heading">
            <i className="fa-solid fa-plus"></i> What is Budget Tracker?
          </h3>
          <p className="faq-text">
            Budget Tracker is a web application that helps you manage your
            personal finances by tracking your income and expenses. It allows
            you to set budgets, monitor your spending, and gain insights into
            your financial habits.
          </p>
        </div>

        <div className="faq-content question-2">
          {/* Question 2 */}
          <h3 className="faq-sub-heading">
            <i className="fa-solid fa-plus"></i> How do I add a new transaction?
          </h3>
          <p className="faq-text">
            To add a new transaction, navigate to the{" "}
            <span className="bold">"Transactions"</span> section of the app and
            click on the <span className="bold">"Add Transaction"</span> button.
            Fill in the required details such as the amount, category, and date,
            then click <span className="bold">"Save"</span> to record the
            transaction.
          </p>
        </div>

        <div className="faq-content question-3">
          {/* Question 3 */}
          <h3 className="faq-sub-heading">
            <i className="fa-solid fa-plus"></i> What is the difference between
            Income and Expense?
          </h3>
          <p className="faq-text">
            Income refers to the money you receive, such as salary, gifts,
            refunds, or freelance payments. Expenses are the costs you incur,
            such as <span className="bold">rent</span>,{" "}
            <span className="bold">bills</span>,{" "}
            <span className="bold">groceries</span>, or{" "}
            <span className="bold">utilities</span>.
          </p>
        </div>

        <div className="faq-content question-4">
          {/* Question 4 */}
          <h3 className="faq-sub-heading">
            <i className="fa-solid fa-plus"></i> Can I Edit or Delete a
            Transaction?
          </h3>
          <p className="faq-text">
            Yes!, you can edit or delete a transaction at any time. Simply
            navigate to the <span className="bold">"Transactions"</span>{" "}
            section, find the transaction you want to modify, by clicking on the{" "}
            <span className="bold">"Edit"</span> or{" "}
            <span className="bold">"Delete"</span> button.
          </p>
        </div>

        <div className="faq-content question-5">
          {/* Question 5 */}
          <h3 className="faq-sub-heading">
            <i className="fa-solid fa-plus"></i> How do you store my data?
          </h3>
          <p className="faq-text">
            Your data is stored securely in a database. We use encryption and
            other security measures to protect your personal information and
            financial data. Nothing is shared with third parties.
          </p>
        </div>
      </div>
    </section>
  );
}
