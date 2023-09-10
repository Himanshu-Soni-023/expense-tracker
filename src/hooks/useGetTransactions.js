import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import React, { useEffect, useState } from "react";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionTotal, setTransactionTotal] = useState({
    balane: 0.0,
    expense: 0.0,
    income: 0.0,
  });
  const transactionCollectionRef = collection(db, "transactions");
  const { userID } = useGetUserInfo();

  // query is function of firebase in which , u can filter out data, using query havinf collectionRef, by using Where function , what to query out, nd orderBy func, like how u want to order the datas
  const getTransaction = async () => {
    let unsubscribe;
    try {
      const queryTransaction = query(
        transactionCollectionRef,
        where("userID", "==", userID),
        orderBy("createdAt")
      );

      // onSnapshot is a function to take look on the filter data , nd let us see through each data and push it in array,
      unsubscribe = onSnapshot(queryTransaction, (snapshot) => {
        let docs = [];
        let totalIncome = 0;
        let totalExpense = 0;
        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;

          docs.push({ ...data, id });
          if (data.transactionType === "expense") {
            totalExpense += Number(data.transactionAmount);
          } else {
            totalIncome += Number(data.transactionAmount);
          }
        });
        setTransactions(docs);
        let balance = totalIncome - totalExpense;
        setTransactionTotal({
          balance,
          expense: totalExpense,
          income: totalIncome,
        });
      });
    } catch (err) {
      console.error(err);
    }
    return () => unsubscribe();
  };
  useEffect(() => {
    getTransaction();
  }, []);
  return { transactions, transactionTotal };
};
