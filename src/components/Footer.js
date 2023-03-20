import { useContext } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom"
import styled from 'styled-components';
import UserContext from '../contexts/UseContext';

export default function Footer() {

  const { percentage } = useContext(UserContext)

    return(
      <Container3>

      <Links to="/habitos">Hábitos</Links>
        <div>
        <Container>
          <Link to="/hoje">
              <CircularProgressbar
                value={percentage === 0 ? 1 : percentage}
                text={"Hoje"}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#3e98c7",
                  textColor: "#fff",
                  pathColor: "#fff",
                  trailColor: "transparent"
                })}
              />
          </Link>
        </Container>
        </div>

        <Links to="/historico">Histórico</Links>

      </Container3>

    )

}

const Container = styled.div`

  width: 90px;
  height: 90px;
  position: absolute;
  bottom: 10px;
  right: 145px;

`

const Container3 = styled.div`

  width: 375px;
  height: 70px;
  position: fixed;
  bottom: 0px;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;

`

const Links = styled(Link)`

  font-size: 18px;
  line-height: 22px;
  color: #52b6ff;
  margin: 0px 31px;
  text-decoration: none;

`