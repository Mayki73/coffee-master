import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IOrder } from "../../models/order.model";
import Input from "../Form/Input";

interface IProps {
  closeModal: () => void;
}

const OrderForm: React.FC<IProps> = ({ closeModal }) => {
  const OrderFormSchema = yup.object({
    name: yup.string().required("Пожалуйста, укажите свое имя!"),
    phone: yup.string().required("Пожалуйста, укажите свой номер телефона!"),
  });

  const useFormReturn = useForm<IOrder>({
    resolver: yupResolver(OrderFormSchema),
  });

  const submitOrderForm = (data: IOrder) => {
    console.log(data);
    closeModal();
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
    </form>
  );
};

export default OrderForm;
