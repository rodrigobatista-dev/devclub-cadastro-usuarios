import { useEffect, useState } from "react";
import api from "../../services/api";
import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
// import { Container, Title } from "../Home/styles";
import {  Container, Title, CardUsers, ContainerUsers, TrashIcon, AvatarUser } from "./styles";

import Trash from "../../assets/trash.svg";
import { useNavigate } from "react-router-dom";

export default function ListUsers() {
  
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios");
      setUsers(data);
    }
    getUsers();
  }, []);

  const handleDeleteUser = async (id) => {
    await api.delete(`/usuarios/${id}`);
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <Container>
      <TopBackground />
      <Title>Listagem de Usuários</Title>

      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser src={`https://avatar.iran.liara.run/public?username=[value]${user.id}`}/>
          <div>
            <h3>Nome: {user.name}</h3>
            <p>Idade: {user.age}</p>
            <p>E-mail: {user.email}</p>
          </div>

          <TrashIcon src={Trash} alt="Delete-User" onClick={() => handleDeleteUser(user.id)} />
          </CardUsers>
        ))}
      </ContainerUsers>

      <Button type="button" onClick={() => navigate('/')}>Voltar</Button>
    </Container>
  );
}
