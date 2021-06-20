import Head from "next/head";
import Budget from "../components/Budget";
import Remaining from "../components/Remaining";
import ExpenseTotal from "../components/ExpenseTotal";
import ExpenseList from "../components/ExpenseList";
import AddExpenseForm from "../components/AddExpenseForm";

export default function Home() {
  return (
    <div className="grid min-h-screen py-2">
      <Head>
        <title>Next.js Budget App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid justify-center grid-row">
        <div className="">
          <div className="">
            <Budget />
          </div>
          <div className="">
            <Remaining />
          </div>
          <div className="">
            <ExpenseTotal />
          </div>
        </div>

        <div className="grid grid-row">
          <h3 className="text-2xl text-center text-red-200">Expenses</h3>
          <ExpenseList />
        </div>

        <div className="grid grid-row">
          <h3 className="text-2xl text-center text-red-200">Add Expenses</h3>
          <AddExpenseForm />
        </div>
      </div>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
