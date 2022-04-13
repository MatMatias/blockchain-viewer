import { FC, Fragment } from "react";
import { useAppSelector } from "../../redux/hooks";

export const Blockchain: FC = () => {
  const { chain } = useAppSelector((state) => state.blockchain);
  console.log("CHAIN", chain);

  return (
    <Fragment>
      {chain.map((block) => {
        const { data, hash, nonce, parentHash, timestamp } = block;
        let isGenesisBlock = false;
        if (!parentHash) {
          isGenesisBlock = true;
        }

        {
          isGenesisBlock ? (
            <article className="card" key={hash}>
              <p>Data: {data}</p>
              <p>Hash: {hash}</p>
              <p>Hash: {hash}</p>
              <p>Nonce: {nonce}</p>
              <p>Timestamp: {timestamp}</p>
            </article>
          ) : (
            <article className="card" key={hash}>
              <p>Data: {data}</p>
              <p>Hash: {hash}</p>
              <p>Nonce: {nonce}</p>
              <p>Parent Hash: {parentHash}</p>
              <p>Timestamp: {timestamp}</p>
            </article>
          );
        }
      })}
    </Fragment>
  );
};
