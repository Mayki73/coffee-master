import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.yandex.com",
    port: 465,
    secure: true,
    auth: {
      user: "servicecoffee.5upport@yandex.ru",
      pass: "xjtsmyemkrbdvzlq",
    },
  });
  const { phone, name, question, answers } = req.body;
  if (phone === "+375 () - -")
    return {
      statusCode: 500,
      body: "Произошла ошибка!",
    };

  const subject = `Новая заявка из CoffeeRemont24`;

  const mailOptions = {
    from: "servicecoffee.5upport@yandex.ru",
    to: "serviscoffee@yandex.ru", //serviscoffee@yandex.ru
    subject: subject,
    html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
            body {
                font-family: Arial, sans-serif;
              }
            span {
                font-weight: bold;
            }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 5px;
              }
            </style>
          </head>
          <body>
          <div class="container">
          <h1>Новая заявка из CoffeeRemont24</h1>
          <p><span>Дата:</span> ${new Date(
            new Date().setHours(new Date().getHours() + 3)
          ).toLocaleString()}</p>
          <p><span>Имя:</span> ${name}</p>
          <p><span>Телефон:</span> ${phone}</p>
          ${question ? "<p><span>Вопрос:</span> " + question + "</p>" : ""}
          <p><span>Результат теста:</span> ${answers ? answers : "-"}</p>
            <p>С уважением, CoffeeRemont24</p>
        </div>
          </body>
        </html>
      `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ statusCode: 200, message: "Email sent" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ statusCode: 500, message: "Internal server error" });
  }
}
