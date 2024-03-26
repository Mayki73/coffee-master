import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { IOrder } from "../models/order.model";

const sendEmail = async (data: IOrder) => {
  return axios.post("/api/sendEmail", data).then((res: any) => res.data);
};

export const useSendEmail = (
  onSuccess?: (data: any) => void,
  onError?: () => void
) => {
  return useMutation({
    mutationFn: (data: IOrder) => {
      return sendEmail(data);
    },
    onSuccess: (data: any) => {
      if (onSuccess) onSuccess(data);
    },
    onError: () => {
      if (onError) onError();
    },
  });
};
