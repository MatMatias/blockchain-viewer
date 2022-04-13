import { FC, Fragment } from "react";
import { useAppSelector } from "../../redux/hooks";

export const Blockchain: FC = () => {
  const { chain } = useAppSelector((state) => state);
  return (
    <Fragment>
      {chain.length > 0 && (
        <ul className="flex flex-col gap-y-2">
          {chain.map((block) => {
            const { data, hash, nonce, parentHash, timestamp } = block;
            let isGenesisBlock = false;
            if (!parentHash) {
              isGenesisBlock = true;
            }
            return (
              <Fragment>
                {isGenesisBlock ? (
                  <li key={hash}>
                    <article className="flex flex-col gap-y-5 items-center bg-zinc-800 card">
                      <p>Data: {data}</p>
                      <p>Hash: {hash}</p>
                      <p>Hash: {hash}</p>
                      <p>Nonce: {nonce}</p>
                      <p>Timestamp: {timestamp}</p>
                    </article>
                  </li>
                ) : (
                  <li key={hash}>
                    <article className="flex flex-col gap-y-5 items-center bg-zinc-800 card">
                      <p>Data: {data}</p>
                      <p>Hash: {hash}</p>
                      <p>Nonce: {nonce}</p>
                      <p>Parent Hash: {parentHash}</p>
                      <p>Timestamp: {timestamp}</p>
                    </article>
                  </li>
                )}
              </Fragment>
            );
          })}
        </ul>
      )}
    </Fragment>
  );
};
