import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IOrder } from "../../models/order.model";
import Input from "../Form/Input";
import { useSendEmail } from "../../services/order.services";

interface IProps {
  closeModal: () => void;
  answers: string[];
}

const OrderForm: React.FC<IProps> = ({ closeModal, answers }) => {
  const { mutate: sendEmail } = useSendEmail(() => {
    closeModal();
  });
  const OrderFormSchema = yup.object({
    name: yup.string().required("Пожалуйста, укажите свое имя!"),
    phone: yup.string().required("Пожалуйста, укажите свой номер телефона!"),
    question: yup.string(),
    answers: yup.string(),
  });

  const useFormReturn = useForm<IOrder>({
    resolver: yupResolver(OrderFormSchema),
  });

  const submitOrderForm = (data: IOrder) => {
    sendEmail({ ...data, answers: answers?.join(", ") });
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useFormReturn;

  return (
    <form
      className="space-y-5 pb-10"
      id="order"
      onSubmit={handleSubmit(submitOrderForm)}
    >
      <Controller
        name="name"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChange={onChange}
            value={value}
            placeholder="Ваше имя"
            error={Boolean(errors.name?.message)}
            helperText={errors.name?.message}
          />
        )}
      />

      <Controller
        name="phone"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChange={onChange}
            value={value}
            mask="+375 (99) 999-99-99"
            maskChar=" "
            placeholder="+375 (__) ___-__-__"
            error={Boolean(errors.phone?.message)}
            helperText={errors.phone?.message}
          />
        )}
      />

      <div className="flex justify-center">
        <button
          type="submit"
          form="order"
          className="px-10 py-3 h-max border-2 border-black bg-black hover:text-black hover:bg-white text-white"
        >
          Отправить заявку
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
