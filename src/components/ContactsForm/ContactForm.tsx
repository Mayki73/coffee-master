import React from "react";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import Input from "../Form/Input";
import { IOrder } from "../../models/order.model";
import { useSendEmail } from "../../services/order.services";
import { enqueueSnackbar } from "notistack";
import { yupResolver } from "@hookform/resolvers/yup";
import ScrollAnimate from "../ScrollAnimate";

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

  const { mutate: sendEmail } = useSendEmail(() => {
    enqueueSnackbar("Ваше сообщение отправлено!", { variant: "success" });
    setValue("name", "");
    setValue("phone", "");
    setValue("question", "");
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useFormReturn;

  return (
    <form
      className="space-y-5 pb-10 max-w-[40rem] mx-20 md:mx-auto w-full"
      onSubmit={handleSubmit(submitOrderForm)}
    >
      <ScrollAnimate>
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
      </ScrollAnimate>

      <ScrollAnimate>
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
      </ScrollAnimate>

      <ScrollAnimate>
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
      </ScrollAnimate>

      <div className="flex justify-center">
        <ScrollAnimate>
          <button
            className="bg-black hover:text-black hover:bg-white text-white px-10 py-3 h-max border-2 border-black"
            type="submit"
          >
            Отправить
          </button>
        </ScrollAnimate>
      </div>
    </form>
  );
};

export default ContactForm;
