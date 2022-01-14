import React, { useState } from "react";
const baseUrl = "https://se.armanbrokerage.ir/api/";
import Message from "../components/UI/Messages";

const useHttp = () => {
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const sendRequest = async (dataConfig, resultData) => {
    try {
      setIsLoading(true);
      setIsError(null);
      const respponse = await fetch(`${baseUrl}${dataConfig.url}`, {
        method: dataConfig.method ? dataConfig.method : "GET",
        headers: dataConfig.headers ? dataConfig.headers : {},
        body: dataConfig.body ? JSON.stringify(dataConfig.body) : null,
      });

      const data = await respponse.json();
      if (!respponse.ok) {
        throw new Error(data.message);
      }

      resultData(data);
    } catch (error) {
      setIsError("اطلاعات وارد شده صحیح نمی باشد")
      setIsError(error.message);
      setIsLoading(false);
    }
    setIsLoading(false);
  };
  return {
    isLoading,
    isError,
    sendRequest,
  };
};
export default useHttp;
