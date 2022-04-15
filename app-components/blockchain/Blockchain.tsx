import { FC, Fragment } from "react";
import { useAppSelector } from "../../redux/hooks";

export const Blockchain: FC = () => {
  const { chain } = useAppSelector((state) => state);
  return (
    <Fragment>
      {chain.length > 0 && (
        <ul className="flex flex-col gap-y-5">
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
                    <article className="flex flex-col items-start bg-zinc-800 card px-5 py-5">
                      <p>
                        <b>Data:</b> {data}
                      </p>
                      <p>
                        <b>Hash:</b> {hash}
                      </p>
                      <p>
                        <b>Nonce:</b> {nonce}
                      </p>
                      <p>
                        <b>Timestamp: </b>
                        {timestamp}
                      </p>
                    </article>
                  </li>
                ) : (
                  <li key={hash}>
                    <article className="flex flex-col items-start tems-center bg-zinc-800 card px-5 py-5">
                      <p>
                        <b>Data:</b> {data}
                      </p>
                      <p>
                        <b>Hash:</b> {hash}
                      </p>
                      <p>
                        <b>Nonce:</b> {nonce}
                      </p>
                      <p>
                        <b>Parent Hash: </b> {parentHash}
                      </p>
                      <p>
                        <b>Timestamp: </b>
                        {timestamp}
                      </p>
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
