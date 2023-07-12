import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IOrder } from "../../models/order.model";
import { useSendEmail } from "../../services/order.services";
import Input from "../../components/Form/Input";
import { enqueueSnackbar } from "notistack";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../../constants/query-client";

const ContactForm: React.FC = () => {
  const ContactFormSchema = yup.object({
    name: yup.string().required("Пожалуйста, укажите свое имя!"),
    phone: yup.string().required("Пожалуйста, укажите свой номер телефона!"),
    question: yup.string(),
    answers: yup.string(),
  });

  const useFormReturn = useForm<IOrder>({
    resolver: yupResolver(ContactFormSchema),
  });

  const submitOrderForm = (data: IOrder) => {
    sendEmail(data);
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useFormReturn;

  const { mutate: sendEmail } = useSendEmail(() => {
    enqueueSnackbar("Ваше сообщение отправлено!", { variant: "success" });
    setValue("name", "");
    setValue("phone", "");
    setValue("question", "");
  });

  return (
    <QueryClientProvider client={queryClient}>
      <form
        className="space-y-5 pb-10 max-w-[40rem] mx-20 md:mx-auto w-full"
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

        <Controller
          name="question"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              onChange={onChange}
              value={value}
              textarea
              placeholder="Задайте нам свой вопрос! (необязательно)"
              error={Boolean(errors.question?.message)}
              helperText={errors.question?.message}
            />
          )}
        />

        <div className="flex justify-center">
          <button
            className="bg-black hover:text-black hover:bg-white text-white px-10 py-3 h-max border-2 border-black"
            type="submit"
          >
            Отправить
          </button>
        </div>
      </form>
    </QueryClientProvider>
  );
};

export default ContactForm;
