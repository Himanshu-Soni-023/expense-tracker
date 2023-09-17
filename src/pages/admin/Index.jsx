import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase-config";

const Index = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collection(db, "transactions"));
      setDatas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, []);

  return (
    <div>
      {datas.map((data) => {
        return (
          <>
            <h1>{data.description}</h1>
            <h2>{data.transactionAmount}</h2>
            <h2>{data.transactionType}</h2>
          </>
        );
      })}
    </div>
  );
};

export default Index;
