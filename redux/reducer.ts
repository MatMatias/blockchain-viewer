import { Blockchain } from "../blockchain";

const initialState = {
  blockchain: new Blockchain(0),
  chain: [],
};

interface PayloadShape {
  difficulty?: number;
  blockData?: string;
}

export function reducer(state = initialState, action: { type: string; payload: PayloadShape }) {
  const { blockchain } = state;

  switch (action.type) {
    case "blockchain/setDifficulty":
      blockchain.difficulty = action.payload.difficulty!;
      return {
        ...state,
        blockchain: blockchain,
        chain: [...blockchain.chain],
      };
    case "blockchain/addBlock":
      blockchain.addBlock(action.payload.blockData!);
      return {
        ...state,
        blockchain: blockchain,
        chain: [...blockchain.chain],
      };
    default:
      return state;
  }
}
