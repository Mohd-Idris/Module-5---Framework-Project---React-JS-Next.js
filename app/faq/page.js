"use client";
import { useState } from "react";

export default function FAQPage() {
  // State to track the active question
  const [activeQuestion, setActiveQuestion] = useState(null);

  // Function to toggle the active/deactivate question
  const toggleQuestion = (questionId) => {
    setActiveQuestion(activeQuestion === questionId ? null : questionId);
  };

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: "What is Budget Tracker?",
      answer: `Budget Tracker is a web application that helps you manage your personal finances by tracking your income and expenses.
         It allows you to set budgets, monitor your spending, and gain insights into your financial habits.`,
    },
    {
      id: 2,
      question: "How do I add a new transaction?",
      answer: `To add a new transaction, navigate to the "Transactions" section of the app and click on the "Add Transaction" button.
         Fill in the required details such as the amount, category, and date, then click "Save" to record the transaction.`,
    },
    {
      id: 3,
      question: "What is the difference between Income and Expense?",
      answer: `Income refers to the money you receive, such as salary, gifts, refunds, or freelance payments.
         Expenses are the costs you incur, such as rent, bills, groceries, or utilities.`,
    },
    {
      id: 4,
      question: "Can I Edit or Delete a Transaction?",
      answer: `Yes!, you can edit or delete a transaction at any time. Simply navigate to the "Transactions" section,
         find the transaction you want to modify, by clicking on the "Edit" or "Delete" button.`,
    },
    {
      id: 5,
      question: "How do you store my data?",
      answer: `Your data is stored securely in a database. We use encryption and other security measures to protect your personal information
         and financial data. Nothing is shared with third parties.`,
    },
  ];

  return (
    <section>
      <div
        style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2rem 4rem" }}
      >
        <h1 className="faq-heading">
          <i className="fas fa-question-circle"></i> Frequently Asked Questions
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqs.map((faq, index) => (
            <div
              className="faq-item"
              key={index}
              style={{
                backgroundColor: "var(--light-green-bgcolor)",
                borderRight: "4px solid var(--text-color)",
                borderLeft: "4px solid var(--text-color)",
                borderRadius: "8px",
                overflow: "hidden",
                transition: "max-height 0.3s ease-in-out",
                cursor: "pointer",
              }}
            >
              <button
                onClick={() => toggleQuestion(index)}
                style={{
                  width: "100%",
                  background: "transparent",
                  color: "var(--light-gold-color)",
                  padding: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "none",
                  textAlign: "left",
                  fontWeight: "600",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                {faq.question}
                <i
                  className={`fa-solid ${activeQuestion === index ? "fa-minus" : "fa-plus"}`}
                  style={{
                    background: "linear-gradient(to left, var(--accent-color))",
                    color: "var(--text-color)",
                    marginRight: "0.5rem",
                    padding: "0.25rem",
                    borderRadius: "50%",
                    outline: "none",
                    fontSize: "1.3rem",
                    border: "2px solid var(--text-color)",
                    height: "30px",
                    width: "30px",
                  }}
                ></i>
              </button>

              <div
                style={{
                  maxHeight: activeQuestion === index ? "500px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease-in-out",
                  backgroundColor: "var(--light-gold-bgcolor)",
                }}
              >
                <p
                  style={{
                    color: "var(--sub-text-color)",
                    padding: "0 1.25rem 1.25rem",
                    marginTop: "0.75rem",
                    lineHeight: "1.6",
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
