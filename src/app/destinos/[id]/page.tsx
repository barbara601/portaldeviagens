import { destinos } from "@/lib/destinos";

type Props = {
  params: {
    id: string;
  };
};

const DestinoDetalhe = ({ params }: Props) => {
  const destino = destinos.find(
    (d) => d.id === Number(params.id)
  );

  if (!destino) {
    return <p>Destino não encontrado</p>;
  }

  return (
    <div>
      <h1>{destino.nome}</h1>
      <img src={destino.imagem} alt={destino.nome} />
      <p>{destino.description}</p>
    </div>
  );
};

export default DestinoDetalhe;