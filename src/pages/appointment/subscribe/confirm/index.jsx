import Page from "@/components/page";
import Styles from "./confirm.module.scss";

export default function Confirmation() {
  return (
    <Page>
      <div className={Styles.wrapper}>
        <div className={Styles.content}>
          <h1>Confime seu agendamento</h1>
          <p>Confirme seu agendamento clianco no link enviado para seu email</p>
          <h2>Acesse seu email: </h2>
          <ul>
            <li>
              <a target="_black" href="https://mail.google.com">
                gmail
              </a>
            </li>
            <li>
              <a target="_black" href="https://outlook.live.com/mail/0">
                outlook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Page>
  );
}
