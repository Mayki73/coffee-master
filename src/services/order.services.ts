import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { IOrder } from "../models/order.model";

const sendEmail = async (data: IOrder) => {
  return axios
    .post("/.netlify/functions/sendEmail", data)
    .then((res) => res.data);
};

export const useSendEmail = (
  onSuccess?: (data: any) => void,
  onError?: () => void
) => {
  return useMutation(
    (data: IOrder) => {
      return sendEmail(data);
    },
    {
      onSuccess: (data: any) => {
        if (onSuccess) onSuccess(data);
      },
      onError: () => {
        if (onError) onError();
      },
    }
  );
};
