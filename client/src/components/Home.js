import React, { useEffect, useState } from "react";
import NftList from "./NftList";

const Home = () => {
  const [list, setList] = useState(null);

  useEffect(() => {
    setList([
      {
        price: "0.03",
        name: "First name",
        description: "The best nft",
        image:
          "data:image/png;base64,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",
      },
      {
        price: "0.03",
        name: "First name",
        description: "The best nft",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPCMDD7OLK3LuJdJR6fDW026l3qVi4G9TJ6g&usqp=CAU",
      },
      {
        price: "0.03",
        name: "First name",
        description: "The best nft",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRnuI0C8IQX-xXSibuHqFUA6z4ORmcrgUwg&usqp=CAU",
      },
      {
        price: "0.03",
        name: "First name",
        description: "The best nft",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAyVBMVEVjhZZ9omkAAABeclNVVVWBp2xCVTdmipsmMzlLZXL/AABsjFqbvIhff49Vc4F4m2RXV1c3NzcTGRxgdlVfe1A0Rk8XHhSIrHVlfVhRaURAVmFqhFtVdVU9SjZui166Sjb2FRBOd1Z1p2zcAADCAAAgICBkdFzWVTfnPigvPiiRs34xQk+ev4sAHxRbbVE4S1VYdoYmKSseKTcSFw9IX19HXDtOZUumbkqkSjYySjauYUOVSjZATTjQWTrUFxDgQyy8GRFbglwHCxeUh6pBAAADOklEQVR4nO3de1cSQRiAcUERiVtxE8Ss7G6Et7J7Rt//Q9WJeQeOsw4DiPPO9jx/ru/R+bGcwwq77NYWERER3VdlKfZCNlX5tGuqxF7Khiq3iqaDnO5FhOmHMP0Qpl9uhfWG6ez8pen0TLbFXtyd1JA9V9x5aHpkN+ViZ84JTTNhC2ESIUw/hOmHMP0Qph/C9EOYfgjTD2H6IUw/hOmHMP0QplbdySvMmI8tWFC56MkVZtRVvlsRIkQYP4QI9QrtiZVrC9/pPEezsWe6qDp1PMKeO354YX7VuSpixSpKhRuVqj6hOz57QFIRFhAi1BFChOqF5eWEO1Z4qV3YqJg+7Ep2yftS0/7slXQlWz5mPCB2XH555SwasLwnD/duSbIrPRnV/jWqlTw5wL97UbI7M94FKPNCZ6EnNdNJhiIkhAgRIkT4PwhHplrOhOIa7a8I0y+UJydChAgRIkS4UJjf10P75sW6QLXCuwshQoQIESJEiBAhQoQIESJMQxj0ob1vXLtw2L7Ztg/Yd8b76oXbNxt7hc54GyFChAgRJi20V0R4hYdS0OvhxBmPKTyQrgamjrPi0qcnps9fHpuatwOPv8r4Nxn/Hk9Yt3+6evvx2PHrB6bndtwnfCPjL4pOMYWeJSNEiBAhQoSLhT+emn6+703zCq9l/JeM95QLC5NnpknQ+zQZ49qF9si774PZ7JH3ULYgRIgQIcK8CD0vdcOxKVAo47qEb6WBS2zagoTuuAqhLWefriFEiBAhQhXCkLMYYgrlZpvd1orCasfJPS6IeS5G0GdPvj04cJ8F7iGu+rNNECJEiBAhQoQLiMqP2tYXhj0MCBEiRIgQIUKECBEiRIgQYaJC92YWs3R9brGicLbkjHLxPk2pl2lDiBAhQoQI55d8mXvhtj2HtOmUMZ6gsC3nAR8tdwiUojBgGiFChAgRZgvHU+DYK1Rw/eGqwsKR5LsEoyrfRDGwX06h455dIcKQ5u+7Fv+Wq5sWxpMhRIgQIcJ7F7r/0Pvq/G5NS0c4u9NqUKrurb4RYVeDTEKIEGH8ECLMn7ARUry3LDJaVliPveClQ4hQfwgR6g8hQv0hRKg/hAj1h1CP8A++xOWCzER5gQAAAABJRU5ErkJggg==",
      },
    ]);
  }, []);

  return (
    <NftList
      nftList={[
        {
          price: "0.03",
          name: "First name",
          description: "The best nft",
          image:
            "data:image/png;base64,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",
        },
        {
          price: "0.03",
          name: "First name",
          description: "The best nft",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPCMDD7OLK3LuJdJR6fDW026l3qVi4G9TJ6g&usqp=CAU",
        },
        {
          price: "0.03",
          name: "First name",
          description: "The best nft",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRnuI0C8IQX-xXSibuHqFUA6z4ORmcrgUwg&usqp=CAU",
        },
        {
          price: "0.03",
          name: "First name",
          description: "The best nft",
          image:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAyVBMVEVjhZZ9omkAAABeclNVVVWBp2xCVTdmipsmMzlLZXL/AABsjFqbvIhff49Vc4F4m2RXV1c3NzcTGRxgdlVfe1A0Rk8XHhSIrHVlfVhRaURAVmFqhFtVdVU9SjZui166Sjb2FRBOd1Z1p2zcAADCAAAgICBkdFzWVTfnPigvPiiRs34xQk+ev4sAHxRbbVE4S1VYdoYmKSseKTcSFw9IX19HXDtOZUumbkqkSjYySjauYUOVSjZATTjQWTrUFxDgQyy8GRFbglwHCxeUh6pBAAADOklEQVR4nO3de1cSQRiAcUERiVtxE8Ss7G6Et7J7Rt//Q9WJeQeOsw4DiPPO9jx/ru/R+bGcwwq77NYWERER3VdlKfZCNlX5tGuqxF7Khiq3iqaDnO5FhOmHMP0Qpl9uhfWG6ez8pen0TLbFXtyd1JA9V9x5aHpkN+ViZ84JTTNhC2ESIUw/hOmHMP0Qph/C9EOYfgjTD2H6IUw/hOmHMP0QplbdySvMmI8tWFC56MkVZtRVvlsRIkQYP4QI9QrtiZVrC9/pPEezsWe6qDp1PMKeO354YX7VuSpixSpKhRuVqj6hOz57QFIRFhAi1BFChOqF5eWEO1Z4qV3YqJg+7Ep2yftS0/7slXQlWz5mPCB2XH555SwasLwnD/duSbIrPRnV/jWqlTw5wL97UbI7M94FKPNCZ6EnNdNJhiIkhAgRIkT4PwhHplrOhOIa7a8I0y+UJydChAgRIkS4UJjf10P75sW6QLXCuwshQoQIESJEiBAhQoQIESJMQxj0ob1vXLtw2L7Ztg/Yd8b76oXbNxt7hc54GyFChAgRJi20V0R4hYdS0OvhxBmPKTyQrgamjrPi0qcnps9fHpuatwOPv8r4Nxn/Hk9Yt3+6evvx2PHrB6bndtwnfCPjL4pOMYWeJSNEiBAhQoSLhT+emn6+703zCq9l/JeM95QLC5NnpknQ+zQZ49qF9si774PZ7JH3ULYgRIgQIcK8CD0vdcOxKVAo47qEb6WBS2zagoTuuAqhLWefriFEiBAhQhXCkLMYYgrlZpvd1orCasfJPS6IeS5G0GdPvj04cJ8F7iGu+rNNECJEiBAhQoQLiMqP2tYXhj0MCBEiRIgQIUKECBEiRIgQYaJC92YWs3R9brGicLbkjHLxPk2pl2lDiBAhQoQI55d8mXvhtj2HtOmUMZ6gsC3nAR8tdwiUojBgGiFChAgRZgvHU+DYK1Rw/eGqwsKR5LsEoyrfRDGwX06h455dIcKQ5u+7Fv+Wq5sWxpMhRIgQIcJ7F7r/0Pvq/G5NS0c4u9NqUKrurb4RYVeDTEKIEGH8ECLMn7ARUry3LDJaVliPveClQ4hQfwgR6g8hQv0hRKg/hAj1h1CP8A++xOWCzER5gQAAAABJRU5ErkJggg==",
        },
      ]}
    />
  );
};

export default Home;
